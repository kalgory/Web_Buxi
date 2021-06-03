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
          :center-position="currentPosition"
          @dragend="onDragend"
          @setDepartureStop="onSetDepartureStop"
          @setArrivalStop="onsSetArrivalStop"
        />
      </v-col>
    </v-row>
    <apply-card
      id="overlay"
      class="mb-6"
      :arrival-stop="arrivalStop"
      :departure-stop="departureStop"
    />
    <v-container
      v-if="isBoardLoading || isLoading"
      id="overlay"
      fill-height
    >
      <v-row justify="center">
        <v-col cols="auto">
          <v-progress-circular
            indeterminate
            size="128"
            color="primary"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ApplyCard from '@/components/board/apply/ApplyCard.vue';
import NaverMap from '@/components/naver/NaverMap.vue';
import Axios from 'axios';

export default {
  name: 'BoardApply',

  components: {
    ApplyCard,
    NaverMap,
  },

  data: () => ({
    isLoading: false,
    departureStop: {
      name: '',
      number: 0,
      lat: 0,
      lng: 0,
    },
    arrivalStop: {
      name: '',
      number: 0,
      lat: 0,
      lng: 0,
    },
    currentPosition: {
      lat: 37.54093868,
      lng: 127.0673386,
    },
  }),

  computed: {
    isBoardLoading() {
      return this.$store.getters.getIsBoardLoading;
    },
  },

  created() {
    // this.getCurrentPosition();
  },

  methods: {
    getStations(position) {
      const radius = this.$refs.naver_map.getRadius();
      if (radius != null) {
        Axios.post(`${this.$apiURI}/getStations`, {
          lng: position.lng,
          lat: position.lat,
          radius,
        })
          .then((response) => {
            response.data.stations.forEach((station) => {
              this.$refs.naver_map.setMarker(station);
            });
          });
      }
    },
    onDragend(position) {
      this.getStations(position);
    },
    onSetDepartureStop(stop) {
      console.log('departure stop : ', stop);
      this.departureStop = {
        name: stop.name,
        number: stop.number,
        lng: stop.lng,
        lat: stop.lat,
      };
    },
    onsSetArrivalStop(stop) {
      console.log('arrival stop : ', stop);
      this.arrivalStop = {
        name: stop.name,
        number: stop.number,
        lng: stop.lng,
        lat: stop.lat,
      };
    },
    getCurrentPosition() {
      if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition((position) => {
          this.isLoading = false;
          this.currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(this.currentPosition);
          this.getStations(position);
        }, (error) => {
          console.error(error);
        }, {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        });
      } else {
        // eslint-disable-next-line no-alert
        alert('GPS를 지원하지 않습니다');
      }
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
