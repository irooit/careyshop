<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    购物车模型
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/8/26
 */

namespace app\common\model;

class Cart extends CareyShop
{
    /**
     * 主键
     * @var string
     */
    protected $pk = 'cart_id';

    /**
     * 是否需要自动写入时间戳
     * @var bool
     */
    protected $autoWriteTimestamp = true;

    /**
     * 创建日期字段
     * @var bool|string
     */
    protected $createTime = false;

    /**
     * 隐藏属性
     * @var array
     */
    protected $hidden = [
        'user_id',
        'is_show',
    ];

    /**
     * 只读属性
     * @var array
     */
    protected $readonly = [
        'cart_id',
        'user_id',
        'goods_id',
    ];

    /**
     * 字段类型或者格式转换
     * @var array
     */
    protected $type = [
        'cart_id'     => 'integer',
        'user_id'     => 'integer',
        'goods_id'    => 'integer',
        'goods_num'   => 'integer',
        'is_selected' => 'integer',
        'is_show'     => 'integer',
    ];

    /**
     * hasOne cs_goods
     * @access public
     * @return mixed
     */
    public function goods()
    {
        $field = [
            'goods_id', 'name', 'goods_code', 'goods_sku', 'bar_code', 'store_qty',
            'measure', 'measure_type', 'is_postage', 'market_price', 'shop_price',
            'shop_price', 'purchase_sum', 'attachment', 'status', 'is_delete',
            'integral_type', 'give_integral', 'is_integral',
        ];

        return $this
            ->hasOne(Goods::class, 'goods_id', 'goods_id')
            ->field($field);
    }

    /**
     * hasMany cs_spec_goods
     * @access public
     * @return mixed
     */
    public function goodsSpecItem()
    {
        return $this->hasMany(SpecGoods::class, 'goods_id', 'goods_id');
    }

    /**
     * hasMany cs_spec_image
     * @access public
     * @return mixed
     */
    public function goodsSpecImage()
    {
        return $this->hasMany(SpecImage::class, 'goods_id', 'goods_id');
    }

    /**
     * 添加或编辑购物车商品
     * @access public
     * @param array $data     外部数据
     * @param bool  $isBuyNow 是否立即购买
     * @return false|array
     * @throws
     */
    public function setCartItem(array $data, $isBuyNow = false)
    {
        // 避免无关字段,并初始化部分数据
        $data['user_id'] = get_client_id();
        unset($data['cart_id']);

        // 验证并获取修改后的值
        if (false === ($data = $this->checkCartGoods($data))) {
            return false;
        }

        $map[] = ['user_id', '<>', 0];
        $map[] = ['user_id', '=', $data['user_id']];
        $map[] = ['is_show', '=', $isBuyNow ? 0 : 1];

        // 立即购买通过检测后可直接返回
        if (true === $isBuyNow) {
            $data['is_show'] = 0;
            $this->where($map)->delete();

            if ($this->save($data)) {
                return $this->toArray();
            }

            return false;
        }

        // 获取已储存的购物车商品
        $map[] = ['goods_id', '=', $data['goods_id']];
        if (!empty($data['key_name']) && empty($data['former_spec'])) {
            $map[] = ['key_name', '=', $data['key_name']];
        } else if (!empty($data['former_spec'])) {
            $map[] = ['key_name', '=', $data['former_spec']];
        }

        // 进一步检测
        $cartResult = $this->where($map)->find();
        if (!empty($data['former_spec']) && !$cartResult) {
            return $this->setError('购物车商品不存在');
        }

        if (!empty($data['former_spec'])) {
            if (self::checkUnique(['key_name' => $data['key_name']])) {
                return $this->setError('购物车中已有相同规格的商品');
            }
        }

        // 存在相同规格商品则更新,否则新增
        if (!$cartResult && $this->save($data)) {
            return $this->toArray();
        } else if ($cartResult && $cartResult->save($data)) {
            return $cartResult->toArray();
        }

        return false;
    }

    /**
     * 验证是否允许添加或编辑购物车
     * @access public
     * @param array $data 外部数据
     * @return false|array
     * @throws
     */
    public function checkCartGoods(array $data)
    {
        if (!$this->validateData($data)) {
            return false;
        }

        // 获取商品详细信息
        $goodsDb = new Goods();
        $goodsResult = $goodsDb->with('goods_spec_item')->where('goods_id', '=', $data['goods_id'])->find();

        if (is_null($goodsResult)) {
            return $this->setError('商品不存在');
        } else {
            $goodsResult = $goodsResult->toArray();
        }

        if ($goodsResult['store_qty'] <= 0 || $goodsResult['status'] != 1 || $goodsResult['is_delete'] != 0) {
            return $this->setError('商品已下架');
        }

        if ($goodsResult['least_sum'] > $data['goods_num']) {
            return $this->setError(sprintf('最少%d件起订', $goodsResult['least_sum']));
        }

        if ($goodsResult['purchase_sum'] > 0) {
            $boughtCount = OrderGoods::getBoughtGoods($data['goods_id']);
            if (($goodsResult['purchase_sum'] - $data['goods_num'] - $boughtCount) < 0) {
                return $this->setError(sprintf('限购商品，您最多可再购买%d件', $goodsResult['purchase_sum'] - $boughtCount));
            }
        }

        if (!empty($goodsResult['goods_spec_item']) && empty($data['goods_spec'])) {
            return $this->setError('请选择商品规格');
        }

        if ($goodsResult['store_qty'] < $data['goods_num']) {
            $storeQty = $goodsResult['store_qty'] > 0 ? $goodsResult['store_qty'] : 0;
            return $this->setError(sprintf('商品库存不足，仅剩%d件', $storeQty));
        }

        // 组合商品键名
        $data['key_name'] = '';
        $data['key_value'] = '';

        if (!empty($data['goods_spec'])) {
            // 验证提交的商品规格是否存在及库存
            $data['goods_spec'] = implode('_', $data['goods_spec']);
            $goodsSpec = array_column($goodsResult['goods_spec_item'], null, 'key_name');

            if (!array_key_exists($data['goods_spec'], $goodsSpec)) {
                return $this->setError('商品规格错误');
            }

            if ($goodsSpec[$data['goods_spec']]['store_qty'] < $data['goods_num']) {
                $storeQty = $goodsSpec[$data['goods_spec']]['store_qty'];
                return $this->setError(sprintf('商品库存不足，仅剩%d件', $storeQty > 0 ? $storeQty : 0));
            }

            $data['key_name'] = $data['goods_spec'];
            $data['key_value'] = $goodsSpec[$data['goods_spec']]['key_value'];
        }

        // 数据处理
        $data['goods_id'] = (int)$data['goods_id'];
        $data['goods_num'] = (int)$data['goods_num'];

        // 前端只保存合适的数据,此字段不再需要
        unset($data['goods_spec']);
        return $data;
    }

    /**
     * 批量添加商品到购物车
     * @access public
     * @param array $data 外部数据
     * @return bool
     * @throws
     */
    public function addCartList(array $data)
    {
        if (!$this->validateData($data, 'add')) {
            return false;
        }

        $cartData = [];
        $nowTime = time();
        $userId = get_client_id();

        // 提取需要插入或更新的数据
        foreach ($data['cart_goods'] as $value) {
            if (!isset($value['goods_id']) || empty($value['goods_num'])) {
                continue;
            }

            $cartData[] = [
                'user_id'     => $userId,
                'goods_id'    => $value['goods_id'],
                'goods_num'   => $value['goods_num'],
                'key_name'    => !empty($value['key_name']) ? $value['key_name'] : '',
                'key_value'   => !empty($value['key_value']) ? $value['key_value'] : '',
                'update_time' => $nowTime,
            ];
        }

        // 获取商品编号列表
        $goodsList = array_column($cartData, 'goods_id');
        if (empty($goodsList)) {
            return true;
        }

        // 获取已存在的购物车商品
        $map[] = ['user_id', '<>', 0];
        $map[] = ['user_id', '=', $userId];
        $map[] = ['goods_id', 'in', $goodsList];
        $map[] = ['is_show', '=', 1];
        $cartResult = $this->where($map)->select()->toArray();

        // 筛选出相同商品相同规格的商品
        $delCartList = [];
        foreach ($cartResult as $item) {
            foreach ($cartData as $value) {
                if ($value['goods_id'] == $item['goods_id'] && $value['key_name'] == $item['key_name']) {
                    $delCartList[] = $item['cart_id'];
                    break;
                }
            }
        }

        empty($delCartList) ?: $this->where('cart_id', 'in', $delCartList)->delete();
        $this->insertAll($cartData);

        return true;
    }

    /**
     * 获取购物车列表
     * @access public
     * @param array $data 外部数据
     * @return false|array
     * @throws
     */
    public function getCartList(array $data)
    {
        if (!$this->validateData($data, 'list')) {
            return false;
        }

        $map[] = ['user_id', '<>', 0];
        $map[] = ['user_id', '=', get_client_id()];
        $map[] = ['is_show', '=', 1];

        $result = $this
            ->with(['goods', 'goods_spec_item', 'goods_spec_image'])
            ->where($map)
            ->limit(empty($data['show_size']) ? 0 : $data['show_size'])
            ->order(['update_time' => 'desc'])
            ->select();

        if (!$result->isEmpty()) {
            $cartSer = new \app\common\service\Cart();
            return $cartSer->checkCartGoodsList($result->toArray(), false);
        }

        return [];
    }

    /**
     * 获取购物车商品数量
     * @access public
     * @param array $data 外部数据
     * @return false|array
     */
    public static function getCartCount(array $data)
    {
        $map[] = ['cart.user_id', '<>', 0];
        $map[] = ['cart.user_id', '=', get_client_id()];
        $map[] = ['cart.is_show', '=', 1];

        $totalResult = isset($data['total_type']) && 'number' == $data['total_type']
            ? self::where($map)->withJoin('goods')->sum('goods_num')
            : self::where($map)->withJoin('goods')->count();

        return ['total_result' => (int)$totalResult];
    }

    /**
     * 设置购物车商品是否选中
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function setCartSelect(array $data)
    {
        if (!$this->validateData($data, 'select')) {
            return false;
        }

        $map[] = ['cart_id', 'in', $data['cart_id']];
        $map[] = ['user_id', '<>', 0];
        $map[] = ['user_id', '=', get_client_id()];
        !empty($data['is_selected']) ?: $data['is_selected'] = 0;

        self::update(['is_selected' => $data['is_selected']], $map);
        return true;
    }

    /**
     * 批量删除购物车商品
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function delCartList(array $data)
    {
        if (!$this->validateData($data, 'del')) {
            return false;
        }

        $map[] = ['cart_id', 'in', $data['cart_id']];
        $map[] = ['user_id', '<>', 0];
        $map[] = ['user_id', '=', get_client_id()];
        $map[] = ['is_show', '=', 1];

        $this->where($map)->delete();
        return true;
    }

    /**
     * 清空购物车
     * @access public
     * @return bool
     */
    public function clearCartList()
    {
        $map[] = ['user_id', '<>', 0];
        $map[] = ['user_id', '=', get_client_id()];
        $map[] = ['is_show', '=', 1];

        $this->where($map)->delete();
        return true;
    }

    /**
     * 请求商品立即购买
     * @access public
     * @param array $data 外部数据
     * @return false|array
     */
    public function createCartBuynow(array $data)
    {
        return $this->setCartItem($data, true);
    }
}
