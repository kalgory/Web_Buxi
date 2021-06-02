export default {
  state: {
    isBoardLoading: false,
    isBoardBefore: false,
    isBoardOn: false,
    isBoardAfter: false,
    bus: {
    },
    departureStop: {
      name: 'departure',
    },
    arrivalStop: {
      name: 'arrival',
    },
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
    getDepartureStop(state) {
      return state.departureStop;
    },
    getArrivalStop(state) {
      return state.arrivalStop;
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
    setDepartureStop(state, value) {
      state.departureStop = value;
    },
    setArrivalStop(state, value) {
      state.arrivalStop = value;
    },
  },
};
