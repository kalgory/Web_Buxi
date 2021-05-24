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
          @click="mapClickEventHandler"
          @startStation="start"
          @endStation="end"
        />
      </v-col>
    </v-row>
    <call-card id="overlay" />
  </v-container>
</template>

<script>
import CallCard from '@/components/call/CallCard.vue';
import NaverMap from '@/components/naver/NaverMap.vue';

export default {
  name: 'CallDefault',

  components: {
    CallCard,
    NaverMap,
  },

  methods: {
    mapClickEventHandler(position) {
      console.log(position);
      this.$refs.naver_map.setHasClickEvent();
    },
    start(option) {
      console.log('start station : ', option);
    },
    end(option) {
      console.log('end station : ', option);
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
