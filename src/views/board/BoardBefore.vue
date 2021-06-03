<template>
  <v-container
    fluid
    fill-height
    class="pa-0"
  >
    <v-row
      class="fill-height"
      justify="center"
      no-gutters
    >
      <v-col>
        <naver-map
          ref="naver_map"
          class="fill-height"
        />
      </v-col>
    </v-row>
    <before-card
      id="overlay"
      class="mb-6"
      :departure-stop="departureStop"
      :remaining-time="remainingTime"
    />
  </v-container>
</template>

<script>
import BeforeCard from '@/components/board/before/BeforeCard.vue';
import NaverMap from '@/components/naver/NaverMap.vue';
import Axios from 'axios';

export default {
  name: 'BoardBefore',

  components: {
    NaverMap,
    BeforeCard,
  },

  data: () => ({
    remainingTime: 0,
    timerID: null,
  }),

  computed: {
    departureStop() {
      return this.$store.getters.getDepartureStop;
    },
    arrivalStop() {
      return this.$store.getters.getArrivalStop;
    },
    isBoardBefore() {
      return this.$store.getters.getIsBoardBefore;
    },
    bus() {
      return this.$store.getters.getBus;
    },
  },

  mounted() {
    if (!this.isBoardBefore) {
      // this.$router.push('/board/apply');
    }
    // 1. 컴포넌트 create 시 위치 받아오기
    // this.getBusPosition();
    // 버스 포지션으로 맵 위치 수정
    // 2. timer 시작
    // this.timerID = setInterval(() => { this.getBusPosition(); }, 3000);
    this.addDepartureStopMarker();
    this.addArrivalStopMarker();
  },

  destroyed() {
    clearTimeout(this.timerID);
  },

  methods: {
    getBusPosition() {
      Axios.post(`${this.$apiURI}/getStations`, {
        busID: this.bus.ID,
        departureNumber: this.departureStop.number,
      })
        .then((response) => {
          this.addBusMarker(response.data.position);
          if (response.data.remainingTime < 30) {
            clearTimeout(this.timerID);
          }
        });
    },
    addDepartureStopMarker() {
      this.$refs.naver_map.setCustomMarker(this.departureStop, 'departureStop');
    },
    addArrivalStopMarker() {
      this.$refs.naver_map.setCustomMarker(this.arrivalStop, 'arrivalStop');
    },
    addBusMarker(position) {
      this.$refs.naver_map.setCustomMarker(position, 'bus');
    },
  },
};
</script>

<style scoped>
#overlay {
  position: fixed;
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 8px;
}
</style>
