/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { Notification } from '@arco-design/web-react';
import auth from '@/utils/auth';
import { BASE_URL } from './api';
import get from 'lodash/get';

export interface ResponseType {
  code: number;
  data: { [key: string]: any } | [];
  errorMessage: string;
  detailErrorMessage: string;
}

const codeMessage: { [code: string]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: any) => {
  const { response } = error;

  if (get(response, 'status') !== 403) {
    Notification.error({
      content: '您的网络链接存在异常，请确认网络通畅后继续使用。',
      title: '网络异常',
    });
  }

  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  timeout: 1000000,
  prefix: BASE_URL,
});

request.interceptors.request.use((url, options) => {
  let token = auth.getToken();
  if (token) {
    // @ts-ignore
    options.headers.Authorization = 'Bearer ' + token;
  }
  return {
    url,
    options,
  };
});

// @ts-ignore
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  if (data.code == 401 && location.pathname !== '/login') {
    window.location.href =
      '/login?fromUrl=' + decodeURIComponent(location.pathname);
  }

  // response 拦截
  if (response.status === 403) {
    if (data.code === 1004) {
      // 没有权限
      return response;
    } else if (window.location.pathname.includes('login')) {
      // 重置页
      return response;
    } else {
      window.location.href =
        '/login?fromUrl=' + decodeURIComponent(location.pathname);
    }
  } else {
    return response;
  }
});

export default request;
