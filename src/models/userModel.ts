import { useRequest } from 'ahooks';
import { useState, useCallback } from 'react'
import request from '@/utils/request';
import auth from '@/utils/auth'

export default function userModel() {
  const [user, setUser] = useState(null)

  const [userInfo, updateUserInfo] = useState()

  const { run: runLogin, loading: loadingLogin } = useRequest(async (account, password) => {
    return request.post(`auth/login`, { data: { account, password } })
  }, {
    manual: true,
    onSuccess: (res: any) => {
      const { code, data } = res
      if (code == 0) {
        auth.setUserInfo(data)
        updateUserInfo(data)
      }
    },
  });

  return {
    userInfo,
    runLogin
  }
}