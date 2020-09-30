<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    扩展配置
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/7/20
 */

return [
    // 产品信息
    'product'      => [
        'product_name'    => 'CareyShop商城框架系统',
        'product_version' => '1.3.0',
        'build_version'   => '20200720',
        'product_website' => 'http://www.careyshop.cn',
        'product_update'  => 'http://www.careyshop.cn/checkUpdate',
        'develop_team'    => 'think',
        'company_name'    => '温州瑞令网络科技有限公司',
        'company_website' => 'http://www.careyshop.cn',
    ],

    // 模块
    'module_group' => [
        'api'   => 'API',
        'admin' => '后台',
        'home'  => '前台',
    ],

    // 客户组
    'client_group' => [
        'visitor' => [
            'value' => -1,
            'name'  => '游客组',
        ],
        'user'    => [
            'value' => 0,
            'name'  => '顾客组',
        ],
        'admin'   => [
            'value' => 1,
            'name'  => '管理组',
        ],
    ],
];
