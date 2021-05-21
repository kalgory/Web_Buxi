<template>
  <div
    id="map"
  />
</template>

<script>
export default {
  name: 'NaverMap',

  props: {
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
    isClickLoading: false,
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
      const src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=s4ygn6mjbi';
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
      this.clickEventListener();
    },

    clickEventListener() {
      window.naver.maps.Event.addListener(this.map, 'click', (position) => {
        if (this.hasClickEvent) {
          this.isClickLoading = true;
          this.$emit('click', position.coord);
          this.hasClickEvent = false;
          this.$emit('clickLoading');
          this.isClickLoading = false;
        }
      });
    },

    setHasClickEvent() {
      if (!this.isClickLoading) {
        this.hasClickEvent = true;
      } else {
        this.$on('clickLoading', () => {
          this.hasClickEvent = true;
        });
      }
    },

    initMarker(option) {
      const marker = new window.naver.maps.Marker({
        map: this.map,
        position: new window.naver.maps.LatLng(option.lat, option.lng),
        clickable: true,
      });
      marker.setMap(this.map);
      this.markers.push(marker);
      window.naver.maps.Event.addListener(marker, 'click', () => {
        this.$emit('markerClick', option);
      });
    },

    setMarker(option) {
      // eslint-disable-next-line no-unused-expressions
      window.naver ? this.initMarker(option) : this.$on('load', () => this.initMarker(option));
    },

    removeMarkers() {
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.setHasClickEvent();
    },
  },
};
</script>
