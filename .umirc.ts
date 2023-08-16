import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'table/index' },
    { path: '/strategy', component: 'strategy/index' },
    { path: '/workflow', component: 'workflow/index' },
    { path: '/workflow/edit', component: 'workflow/edit/index' },
    { path: '/package', component: 'package/index' },
    { path: '/publish', component: 'publish/index' },
    { path: '/chat', component: 'chat/index' }
  ],

  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss']
});
