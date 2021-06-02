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
  </v-container>
</template>

<script>
import AfterCard from '@/components/board/after/AfterCard.vue';
import NaverMap from '@/components/naver/NaverMap.vue';
// import Axios from 'axios';

export default {
  name: 'BoardBefore',

  components: {
    NaverMap,
    AfterCard,
  },

  data: () => ({
    remainingTime: 0,
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
  },

  created() {
    if (!this.isBoardBefore) {
      // this.$router.push('/board/apply');
    }
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
