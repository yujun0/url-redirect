import { createRouter, createWebHashHistory } from 'vue-router';
import Redirect from '../components/Redirect.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'Redirect' }, // 轉址路徑
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => Redirect, // 轉址組件
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;