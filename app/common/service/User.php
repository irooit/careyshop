<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    账号管理服务层
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/7/29
 */

namespace app\common\service;

use think\exception\ValidateException;

class User extends CareyShop
{
    /**
     * 验证某个字段
     * @access private
     * @param array $rules 验证规则
     * @param array $data  待验证数据
     * @return bool
     */
    private function checkField(array $rules, array $data)
    {
        try {
            validate($rules)->check($data);
        } catch (ValidateException $e) {
            return $this->setError($e->getMessage());
        }

        return true;
    }

    /**
     * 验证账号是否合法
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function checkUserName(array $data)
    {
        $rule = 'require|alphaDash|length:4,20|unique:user,username';
        $rule .= sprintf(',%d,user_id', isset($data['exclude_id']) ? $data['exclude_id'] : 0);

        return $this->checkField(['username|账号' => $rule], $data);
    }

    /**
     * 验证账号手机是否合法
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function checkUserMobile(array $data)
    {
        $rule = 'require|number|length:7,15|unique:user,mobile';
        $rule .= sprintf(',%d,user_id', isset($data['exclude_id']) ? $data['exclude_id'] : 0);

        return $this->checkField(['mobile|手机号' => $rule], $data);
    }

    /**
     * 验证账号昵称是否合法
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function checkUserNick(array $data)
    {
        $rule = 'require|max:50|unique:user,nickname';
        $rule .= sprintf(',%d,user_id', isset($data['exclude_id']) ? $data['exclude_id'] : 0);

        return $this->checkField(['nickname|昵称' => $rule], $data);
    }
}
