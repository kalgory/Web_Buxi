<template>
  <div>
    <div
      id="map"
      class="map"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line no-unused-expressions
    window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript();
  },

  methods: {
    addKakaoMapScript() {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7fdedab9b885a10a64fea29a0c10e7a7';
      document.head.appendChild(script);
    },
    initMap() {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      // eslint-disable-next-line no-unused-vars
      const map = new kakao.maps.Map(container, options);
    },
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 1500px;
}
</style>
