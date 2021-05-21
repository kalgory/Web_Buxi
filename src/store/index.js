import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './modules/auth/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
  },
});
