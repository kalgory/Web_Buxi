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
    <apply-card
      id="overlay"
      :arrival-stop="arrivalStop"
      :departure-stop="departureStop"
    />
    <v-container
      v-if="isBoardLoading"
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
import ApplyCard from '@/components/ board/apply/ApplyCard.vue';
import NaverMap from '@/components/naver/NaverMap.vue';
import Axios from 'axios';

export default {
  name: 'BoardApply',

  components: {
    ApplyCard,
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

  computed: {
    isBoardLoading() {
      return this.$store.getters.getIsBoardLoading;
    },
  },

  methods: {
    onClick(position) {
      console.log(position);
      this.$refs.naver_map.setHasClickEvent();
    },
    onDragend(position) {
      console.log(position);
      Axios.post(`${this.$apiURI}/getStations`, {
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
      console.log('departure stop : ', stopInformation);
      this.departureStop = {
        name: stopInformation.name,
        number: stopInformation.number,
        lng: stopInformation.lng,
        lat: stopInformation.lat,
      };
    },
    onsSetArrivalStop(stopInformation) {
      console.log('arrival stop : ', stopInformation);
      this.arrivalStop = {
        name: stopInformation.name,
        number: stopInformation.number,
        lng: stopInformation.lng,
        lat: stopInformation.lat,
      };
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
