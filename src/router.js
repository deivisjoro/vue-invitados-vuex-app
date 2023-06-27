import { createRouter, createWebHistory } from 'vue-router';

import ListApp from './components/ListApp.vue';
import FormApp from './components/FormApp.vue';
import DetailsApp from './components/DetailsApp.vue';
import NotFoundApp from './components/NotFoundApp.vue';

const routes = [
  {
    path: '/',
    component: FormApp
  },
  {
    path: '/personas',
    component: ListApp
  },  
  {
    path: '/details/:index',
    component: DetailsApp
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundApp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;