import { createRouter, createWebHistory } from 'vue-router';

const staticRouter = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/index.vue'),
    children: []
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: staticRouter,
  strict: false,
});

export default router;
