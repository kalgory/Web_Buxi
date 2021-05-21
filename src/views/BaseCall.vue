<template>
  <v-container fill-height>
    <v-row justify="center">
      <Map map-style="width:100%;height:600px;" ref="naver_map" @click="test"/>
    </v-row>
  </v-container>
</template>

<script>
import Map from '@/components/naver/NaverMap.vue';

export default {
  name: 'BaseCall',
  components: {
    Map,
  },

  methods: {
    test(position) {
      console.log('plz', position);
    },
  },
};
</script>
