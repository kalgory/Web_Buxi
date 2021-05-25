import Vue from 'vue';
import App from './App.vue';

import './plugins/firebase';

import Router from './router';
import Store from './store';
import Vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.prototype.$clientID = 's4ygn6mjbi';
Vue.prototype.$apiURI = 'https://35.232.144.196:3000';

new Vue({
  router: Router,
  store: Store,
  vuetify: Vuetify,
  render: (h) => h(App),
}).$mount('#app');
