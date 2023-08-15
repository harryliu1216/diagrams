import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'table/index' },
    { path: '/package', component: 'package/index' },
    { path: '/publish', component: 'publish/index' },
    { path: '/chat', component: 'chat/index' }
  ],
  npmClient: 'yarn'
});
