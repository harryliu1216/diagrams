import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/login', component: 'login/index', layout: false },
    { path: '/', component: 'table/index' },
    { path: '/strategy', component: 'strategy/index' },
    { path: '/workflow', component: 'workflow/index' },
    { path: '/workflow/edit', component: 'workflow/edit/index' },
    { path: '/package', component: 'package/index' },
    { path: '/publish', component: 'publish/index' },
    { path: '/chat', component: 'chat/index' },
    { path: '/*', component: '@/pages/404.tsx' }
  ],

  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss', '@umijs/plugins/dist/initial-state', '@umijs/plugins/dist/model'],
  initialState: {},
  model: {},
});
