import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: { name: 'redirect' }, // 轉址路徑
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import('../components/Redirect.vue'), // 轉址組件
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;