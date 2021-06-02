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
    <after-card
      id="overlay"
      class="mb-6"
      :departure-stop="departureStop"
      :remaining-time="remainingTime"
    />
    {{ timerID }}
  </v-container>
</template>

<script>
import AfterCard from '@/components/board/after/AfterCard.vue';
import NaverMap from '@/components/naver/NaverMap.vue';
import Axios from 'axios';

export default {
  name: 'BoardBefore',

  components: {
    NaverMap,
    AfterCard,
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

  created() {
    if (!this.isBoardBefore) {
      // this.$router.push('/board/apply');
    }

    // 1. 컴포넌트 create 시 위치 받아오기
    // this.getBusPosition();
    // 2. timer 시작
    this.timerID = setInterval(() => { this.getBusPosition(); }, 3000);
  },

  destroyed() {
    clearTimeout(this.timerID);
  },

  methods: {
    getBusPosition() {
      console.log('get bus position method called');
      Axios.post(`${this.$apiURI}/getStations`, {
        busID: this.bus.ID,
        departureNumber: this.departureStop.number,
      })
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          // 1. 이전에 있던 버스 마카 지우고
          // 2. 리스폰스에 있는 버스 위치 마카 입력하고
          // 3. 위에 eslint 주석 지우고
        });
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
