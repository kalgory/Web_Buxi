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
          :center-position="bus.position"
          :zoom="13"
        />
      </v-col>
    </v-row>
    <before-card
      id="overlay"
      class="mb-6"
      :departure-stop="departureStop"
      :remaining-time="bus.remainingTime"
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

  created() {
    if (!this.isBoardBefore) {
      this.$router.push('/board/apply');
    }
  },

  mounted() {
    if (this.isBoardBefore) {
      this.getBusPosition();
      // this.timerID = setInterval(() => { this.getBusPosition(); }, 1000);
      this.addBusMarker(this.bus.position);
      this.addDepartureStopMarker();
      this.addArrivalStopMarker();
    }
  },

  destroyed() {
    clearTimeout(this.timerID);
  },

  methods: {
    getBusPosition() {
      Axios.post(`${this.$apiURI}/getBusPosition`, {
        busID: this.bus.ID,
        stopNumber: this.departureStop.number,
      })
        .then((response) => {
          console.log(response);
          this.$refs.naver_map.setCustomMarker(response.data.position, 'bus');
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
