import { useRequest } from 'ahooks';
import { useState, useCallback } from 'react'
import request from '@/utils/request';
import auth from '@/utils/auth'
import { Message } from '@arco-design/web-react';
import { history } from 'umi';

export default function userModel() {
  const [userInfo, updateUserInfo] = useState(auth.getUserInfo())

  const { run: runLogin, loading: loadingLogin } = useRequest((account, password) => {
    return request.post(`auth/login`, { data: { account, password } })
  }, {
    manual: true,
    onSuccess: (res: any) => {
      const { code, data, msg } = res
      if (code == 0) {
        auth.setUserInfo(data)
        updateUserInfo(data)
        history.push({ pathname: '/' })
      } else {
        Message.error(msg)
      }
    }
  });

  const logout = () => {
    auth.clearUserInfo()
    updateUserInfo(null)
    history.replace('/login')
  }

  return {
    userInfo,
    runLogin,
    loadingLogin,
    logout
  }
}