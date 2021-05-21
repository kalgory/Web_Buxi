<template>
  <div
    id="map"
    :style="mapStyle"
  />
</template>

<script>

export default {
  name: 'Map',

  props: {
    mapStyle: {
      type: String,
      required: false,
      default: 'width:100%;height:400px;',
    },
    zoom: {
      type: Number,
      required: false,
      default: 15,
    },
    centerPosition: {
      type: Object,
      required: false,
      default: () => ({
        lat: 37.54764772691377, lng: 127.0708046173278,
      }),
    },
  },

  data: () => ({
    map: null,
  }),

  mounted() {
    // eslint-disable-next-line no-unused-expressions
    window.naver ? this.initMap() : this.test();
  },

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
        center: new naver.maps.LatLng(this.centerPosition.lat, this.centerPosition.lng),
        zoom: this.zoom,
      });
    },
  },
};
</script>
