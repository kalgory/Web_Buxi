import Vue from 'vue';
import App from './App.vue';

import './plugins/firebase';

import Router from './router';
import Store from './store';
import Vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router: Router,
  store: Store,
  vuetify: Vuetify,
  render: (h) => h(App),
}).$mount('#app');
