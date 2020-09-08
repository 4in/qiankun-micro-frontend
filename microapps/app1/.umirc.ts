import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  mountElementId: 'root-app1',
  qiankun: {
    slave: {},
  },
});
