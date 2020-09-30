<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    条形码控制器
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/3/31
 */

namespace app\api\controller\v1;

use app\api\controller\CareyShop;
use app\common\service\Barcode as BarcodeService;

class Barcode extends CareyShop
{
    /**
     * 方法路由器
     * @access protected
     * @return array
     */
    protected static function initMethod()
    {
        return [
            // 获取条形码调用地址
            'get.barcode.callurl' => ['getBarcodeCallurl', BarcodeService::class],
            // 获取一个条形码
            'get.barcode.item'    => ['getBarcodeItem', BarcodeService::class],
        ];
    }
}
