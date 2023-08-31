const apiConfig = {
  mock: '//localhost:7012/',
  test: '//localhost:7012/',
  prod: '//.com/'
};

//当前环境
let env: 'mock' | 'test' | 'prod' | 'prod2' = 'test';
const host = window.location.host;
if (host === '') {
  env = 'prod';
}

export const BASE_URL = apiConfig[env];

export const RuleList = 'rule'
