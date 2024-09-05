import { createRouter, RouteRecordRaw,createWebHistory  } from 'vue-router';

const staticRouter: RouteRecordRaw[] = [
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