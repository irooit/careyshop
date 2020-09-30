<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    配送区域模型
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/8/21
 */

namespace app\common\model;

class DeliveryArea extends CareyShop
{
    /**
     * 主键
     * @var string
     */
    protected $pk = 'delivery_area_id';

    /**
     * 隐藏属性
     * @var array
     */
    protected $hidden = [
        'delivery_id',
    ];

    /**
     * 只读属性
     * @var array
     */
    protected $readonly = [
        'delivery_area_id',
        'delivery_id',
    ];

    /**
     * 字段类型或者格式转换
     * @var array
     */
    protected $type = [
        'delivery_area_id'    => 'integer',
        'delivery_id'         => 'integer',
        'region'              => 'array',
        'first_weight_price'  => 'float',
        'second_weight_price' => 'float',
        'first_item_price'    => 'float',
        'second_item_price'   => 'float',
        'first_volume_price'  => 'float',
        'second_volume_price' => 'float',
    ];

    /**
     * 验证并设置区域数据
     * @access private
     * @param array $data   外部数据
     * @param int   $areaId 字段delivery_area_id
     * @return bool
     */
    private function setRegionData(array &$data, int $areaId)
    {
        if (isset($data['region']) && is_array($data['region'])) {
            $data['region'] = array_unique($data['region']);
            if ($this->checkRegionUnique($data['region'], $data['delivery_id'], $areaId)) {
                return false;
            }

            // 整理配送区域
            $regionData = [];
            $regionList = Region::getRegionCacheList();

            foreach ($data['region'] as $value) {
                if (!empty($value)) {
                    $regionData[] = [
                        'name'      => $regionList[$value]['region_name'],
                        'region_id' => $regionList[$value]['region_id'],
                    ];
                }
            }

            $data['region'] = $regionData;
        }

        return true;
    }

    /**
     * 验证配送区域是否存在重复
     * @access private
     * @param array $source     待验证数据
     * @param int   $deliveryId 配送方式Id
     * @param int   $areaId     字段delivery_area_id
     * @return bool true:重复 false:不重复
     * @throws
     */
    private function checkRegionUnique(array $source, int $deliveryId, int $areaId)
    {
        // 获取当前已存在的配送区域
        $map[] = ['delivery_id', '=', $deliveryId];
        $map[] = ['delivery_area_id', '<>', $areaId];
        $result = $this->field('region')->where($map)->select();

        // 合并各个配送区域
        $tempData = [];
        foreach ($result as $value) {
            $tempData = array_merge($tempData, $value->getAttr('region'));
        }

        // 去处重复并验证
        foreach ($source as $value) {
            foreach ($tempData as $item) {
                if ($value == $item['region_id']) {
                    return !$this->setError($item['name'] . '在其他配送区域项中重复出现');
                }
            }
        }

        return false;
    }

    /**
     * 添加一个配送区域
     * @access public
     * @param array $data 外部数据
     * @return false|array
     */
    public function addAreaItem(array $data)
    {
        if (!$this->validateData($data) || !$this->setRegionData($data, 0)) {
            return false;
        }

        // 避免无关字段,及数组字段特殊处理
        unset($data['delivery_area_id']);
        !empty($data['region']) ?: $data['region'] = [];

        if ($this->save($data)) {
            return $this->toArray();
        }

        return false;
    }

    /**
     * 编辑一个配送区域
     * @access public
     * @param array $data 外部数据
     * @return false|array
     */
    public function setAreaItem(array $data)
    {
        if (!$this->validateData($data, 'set', true)) {
            return false;
        }

        // 搜索条件
        $map[] = ['delivery_area_id', '=', $data['delivery_area_id']];

        if (empty($data['delivery_id'])) {
            $deliveryId = $this->where($map)->value('delivery_id');
            is_null($deliveryId) ?: $data['delivery_id'] = $deliveryId;
        }

        // 验证所辖区域是否已存在,并且获取区域的组合数组
        if (!$this->setRegionData($data, $data['delivery_area_id'])) {
            return false;
        }

        // 数组字段特殊处理
        if (isset($data['region']) && '' == $data['region']) {
            $data['region'] = [];
        }

        $result = self::update($data, $map);
        return $result->toArray();
    }

    /**
     * 批量删除配送区域
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function delAreaList(array $data)
    {
        if (!$this->validateData($data, 'del')) {
            return false;
        }

        self::destroy($data['delivery_area_id']);
        return true;
    }

    /**
     * 获取一个配送区域
     * @access public
     * @param array $data 外部数据
     * @return false|array
     * @throws
     */
    public function getAreaItem(array $data)
    {
        if (!$this->validateData($data, 'item')) {
            return false;
        }

        $result = $this->find($data['delivery_area_id']);
        return is_null($result) ? null : $result->toArray();
    }

    /**
     * 获取配送区域列表
     * @access public
     * @param array $data 外部数据
     * @return false|array
     * @throws
     */
    public function getAreaList(array $data)
    {
        if (!$this->validateData($data, 'list')) {
            return false;
        }

        // 获取配送方式基础数据
        $deliveryData = Delivery::find($data['delivery_id']);
        if (!$deliveryData) {
            return $this->setError('配送方式不存在');
        }

        $baseData = [
            'delivery_area_id'    => 0,
            'name'                => '默认基数',
            'region'              => [['name' => '其他配送区域', 'region_id' => 0]],
            'first_weight_price'  => $deliveryData->getAttr('first_weight_price'),
            'second_weight_price' => $deliveryData->getAttr('second_weight_price'),
            'first_item_price'    => $deliveryData->getAttr('first_item_price'),
            'second_item_price'   => $deliveryData->getAttr('second_item_price'),
            'first_volume_price'  => $deliveryData->getAttr('first_volume_price'),
            'second_volume_price' => $deliveryData->getAttr('second_volume_price'),
        ];

        // 搜索条件
        $map[] = ['delivery_id', '=', $data['delivery_id']];
        empty($data['name']) ?: $map[] = ['name', 'like', '%' . $data['name'] . '%'];

        $result = $this->where($map)->select();
        if (empty($data['name'])) {
            $result->unshift($baseData);
        }

        return $result->toArray();
    }
}
