const USER_INFO_KEY = 'CC_AUTH_KEY';
export default {
  getToken() {
    let userInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY) || '{}');
    return userInfo.token;
  },
  setStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  },
  getStorage(key: string) {
    return localStorage.getItem(key) || '';
  },
  clearUserInfo() {
    localStorage.removeItem(USER_INFO_KEY);
  },
  setUserInfo(userinfo: { [key: string]: any }) {
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userinfo));
  },
  getUserInfo() {
    return JSON.parse(localStorage.getItem(USER_INFO_KEY) || '{}');
  },
};
