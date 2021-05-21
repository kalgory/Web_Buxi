<template>
  <div>
    <div id="map" style="width:100%;height:400px;"></div>
  </div>
</template>

<script>

export default {
  name: 'Map',

  props: {
    mapStyle: {
      type: String,
      required: true,
    },
    zoom: {
      type: Number,
      required: false,
      default: 15,
    },
    centerPosition: {
      type: Object,
      required: false,
      default: function () {
        return {lat: 37.54764772691377};
      },
    },
  },

  data: () => ({
    map: null,
  }),

  methods: {
    test() {
      /* global naver */
      const script = document.createElement('script');
      const type = 'text/javascript';
      const src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=pqbywqev5y';
      script.setAttribute('async', '');
      script.setAttribute('defer', '');
      script.setAttribute('type', type);
      script.setAttribute('src', src);
      script.onload = () => this.initMap();
      document.body.appendChild(script);
    },

    initMap() {
      const container = document.getElementById('map');
      this.map = new naver.maps.Map(container, {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: this.zoom,
      });
    },
  },

  mounted() {
    if (window.naver) {
      this.initMap();
    } else {
      this.test();
    }
  },
};
</script>
