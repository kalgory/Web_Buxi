export default {
  state: {
    isBoardLoading: false,
    isBoardBefore: false,
    isBoardOn: false,
    isBoardAfter: false,
    bus: {
      ID: 0,
    },
    departureStop: {
      name: 'departure',
      number: 0,
    },
    arrivalStop: {
      name: 'arrival',
      number: 0,
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
    getBus(state) {
      return state.bus;
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
    setBus(state, value) {
      state.bus = value;
    },
  },
};
