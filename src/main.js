import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './components/Home.vue';
import Dokter from './components/Dokter.vue';
import Specialist from './components/Specialist.vue';
import Profile from './components/Profile.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/dokter/:specialist', component: Specialist },
  { path: '/dokter', component: Dokter },
  { path: '/dokter/:specialist/:id', component: Profile }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
