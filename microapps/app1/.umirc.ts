import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/about', component: '@/pages/about' },
  ],
  publicPath: process.env.QIANKUN === 'build' ? '/microapps/app1/' : '/',
  mountElementId: 'root-app1',
  qiankun: {
    slave: {},
  },
});
