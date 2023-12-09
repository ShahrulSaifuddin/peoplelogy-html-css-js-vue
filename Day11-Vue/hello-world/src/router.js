import { createRouter, createWebHistory } from 'vue-router';
import FetctApi from './components/FetctApi.vue';
import MakeHome from './components/MakeHome.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: MakeHome,
    },
    {
      name: 'fecth-api',
      path: '/fetchapi',
      component: FetctApi,
    },
  ],
  linkActiveClass: 'active',
});

export default router;
