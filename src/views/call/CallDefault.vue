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
  }),

  methods: {
    onClick(position) {
      console.log(position);
      this.$refs.naver_map.setHasClickEvent();
    },
    onDragend(position) {
      console.log(position);
      Axios.post('http://35.232.144.196:3000/getStations', {
        lng: position.lng,
        lat: position.lat,
        range: 200,
      })
        .then((res) => {
          res.data.stations.forEach((station) => {
            this.$refs.naver_map.setMarker(station);
          });
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
      console.log(this.departureStop.number, this.arrivalStop.number);
      Axios.post('http://35.232.144.196:3000/insCustomer', {
        uid: 'fucking 이준호',
        departStation: this.departureStop.number,
        departTime: 10,
        arrivalStation: this.arrivalStop.number,
      })
        .then((res) => {
          console.log(res);
        });
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
