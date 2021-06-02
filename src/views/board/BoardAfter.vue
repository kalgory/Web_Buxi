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
    <apply-card
      id="overlay"
      :arrival-stop="arrivalStop"
      :departure-stop="departureStop"
    />
  </v-container>
</template>

<script>
import ApplyCard from '@/components/ board/apply/ApplyCard.vue';
import NaverMap from '@/components/naver/NaverMap.vue';
// import Axios from 'axios';

export default {
  name: 'BoardBefore',

  components: {
    NaverMap,
    ApplyCard,
  },

  data: () => ({
    departureStop: {
      name: '',
      number: 0,
      position: {
        lat: 0,
        lng: 0,
      },
    },
    arrivalStop: {
      name: '',
      number: 0,
      position: {
        lat: 0,
        lng: 0,
      },
    },
  }),

};
</script>
