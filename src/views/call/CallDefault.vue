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
          @click="onClick"
          @dragend="onDragend"
          @setDepartureStop="onSetDepartureStop"
          @setArrivalStop="onsSetArrivalStop"
        />
      </v-col>
    </v-row>
    <call-card
      id="overlay"
      :arrival-stop="arrivalStop"
      :departure-stop="departureStop"
    />
  </v-container>
</template>

<script>
import CallCard from '@/components/call/CallCard.vue';
import NaverMap from '@/components/naver/NaverMap.vue';
import Axios from 'axios';

export default {
  name: 'CallDefault',

  components: {
    CallCard,
    NaverMap,
  },

  data: () => ({
    departureStop: {
      name: '',
      number: 0,
    },
    arrivalStop: {
      name: '',
      number: 0,
    },
    testStation: {
      stop_nm: '건대입구역',
      ycode: '37.54093868',
      stop_no: '05217',
      xcode: '127.0673386',
    },
  }),

  mounted() {
    this.$refs.naver_map.setMarker({
      name: this.testStation.stop_nm,
      number: this.testStation.stop_no,
      lng: this.testStation.xcode,
      lat: this.testStation.ycode,
    });
    this.getCurrentPosition();
  },

  methods: {
    onClick(position) {
      console.log(position);
      this.$refs.naver_map.setHasClickEvent();
    },
    onDragend(position) {
      console.log(position);
      Axios.post(`${this.$apiURI}/getStations`, {

      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSetDepartureStop(stopInformation) {
      console.log('start station : ', stopInformation);
      this.departureStop = {
        name: stopInformation.name,
        number: stopInformation.number,
        lng: stopInformation.lng,
        lat: stopInformation.lat,
      };
    },
    onsSetArrivalStop(stopInformation) {
      console.log('end station : ', stopInformation);
      this.arrivalStop = {
        name: stopInformation.name,
        number: stopInformation.number,
        lng: stopInformation.lng,
        lat: stopInformation.lat,
      };
    },
    getCurrentPosition() {
      if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition((position) => {
          this.$refs.naver_map.setMarker({
            name: this.testStation.stop_nm,
            number: this.testStation.stop_no,
            lng: position.coords.longitude,
            lat: position.coords.latitude,
          });
        }, (error) => {
          console.error(error);
        }, {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        });
      } else {
        alert('GPS를 지원하지 않습니다');
      }
    },
  },
};
</script>

<style scoped>
#overlay {
  position: fixed;
  width: 340px;
  margin: 5% auto;
  left: 0;
  right: 0;
  bottom: 8px;
  /*background-color: rgba(0, 0, 0, 0.5);*/
}
</style>
