export default {
  state: {
    isAuthLoading: true,
    isAuthenticated: false,
  },

  getters: {
    getIsAuthLoading(state) {
      return state.isAuthLoading;
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
  },

  mutations: {
    setIsAuthLoading(state, value) {
      state.isAuthLoading = value;
    },
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
  },
};
