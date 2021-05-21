<template>
  <div
    id="map"
    :style="mapStyle"
    @click="getClickPosition"
  >
  </div>
</template>

<script>
export default {
  name: 'NaverMap',

  props: {
    mapStyle: {
      type: String,
      required: false,
      default: 'width:100%;height:400px;',
    },
    zoom: {
      type: Number,
      required: false,
      default: 16,
    },
    centerPosition: {
      type: Object,
      required: false,
      default: () => ({
        lat: 37.54664772691377,
        lng: 127.0708046173278,
      }),
    },
  },

  data: () => ({
    map: null,
    markers: [],
    hasClickEvent: true,
  }),

  mounted() {
    // eslint-disable-next-line no-unused-expressions
    window.naver ? this.initMap() : this.naverMapApiScript();
  },

  methods: {
    naverMapApiScript() {
      /* global naver */
      const script = document.createElement('script');
      const type = 'text/javascript';
      const src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=pqbywqev5y';
      script.setAttribute('async', '');
      script.setAttribute('defer', '');
      script.setAttribute('type', type);
      script.setAttribute('src', src);
      script.id = 'map';
      script.onload = () => this.initMap();
      document.body.appendChild(script);
    },

    initMap() {
      const container = document.getElementById('map');
      this.map = new naver.maps.Map(container, {
        center: new naver.maps.LatLng(this.centerPosition.lat, this.centerPosition.lng),
        zoom: this.zoom,
      });
      this.$emit('load');
    },

    clickEventListener() {
      const clickEvent = window.naver.maps.Event.addListener(this.map, 'click', (position) => {
        window.naver.maps.Event.removeListener(clickEvent);
        this.$emit('click', position.coord);
        this.hasClickEvent = false;
      });
    },

    getClickPosition() {
      if (this.hasClickEvent) {
        // eslint-disable-next-line no-unused-expressions
        window.naver ? this.clickEventListener() : this.$on('load', () => this.clickEventListener());
      }
    },

    setHasClickEvent() {
      this.hasClickEvent = true;
    },

    initMarker(position) {
      const marker = new window.naver.maps.Marker({
        map: this.map,
        position: new window.naver.maps.LatLng(position.lat, position.lng),
        clickable: true,
      });
      this.markers.push(marker);
      console.log(this.markers);
    },

  },
};
</script>
