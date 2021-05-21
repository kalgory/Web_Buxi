export default {
  state: {
    isAuthLoading: true,
    isAuthenticated: false,
    userUID: '',
  },

  getters: {
    getIsAuthLoading(state) {
      return state.isAuthLoading;
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUserUID(state) {
      return state.userUID;
    },
  },

  mutations: {
    setIsAuthLoading(state, value) {
      state.isAuthLoading = value;
    },
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    setUserUID(state, value) {
      state.userUID = value;
    },
  },
};
