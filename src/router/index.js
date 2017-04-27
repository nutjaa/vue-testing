import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Signin from '@/components/Signin';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
    },
  ],
});
