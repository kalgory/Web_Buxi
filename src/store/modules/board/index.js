export default {
  state: {
    isBoardLoading: false,
    isBoardBefore: true,
    isBoardOn: false,
    isBoardAfter: false,
  },

  getters: {
    getIsBoardLoading(state) {
      return state.isBoardLoading;
    },
    getIsBoardBefore(state) {
      return state.isBoardBefore;
    },
    getIsBoardOn(state) {
      return state.isBoardOn;
    },
    getIsBoardAfter(state) {
      return state.isBoardAfter;
    },
  },

  mutations: {
    setIsBoardLoading(state, value) {
      state.isBoardLoading = value;
    },
    setIsBoardBefore(state, value) {
      state.isBoardBefore = value;
    },
    setIsBoardOn(state, value) {
      state.isBoardOn = value;
    },
    setIsBoardAfter(state, value) {
      state.isBoardAfter = value;
    },
  },
};
