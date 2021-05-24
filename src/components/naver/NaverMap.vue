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
    window.naver ? this.initMap() : this.addNaverMapApiScript();
  },

  methods: {
    addNaverMapApiScript() {
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
      this.$emit('mapLoaded');
      this.addClickMapEventListener();
      this.addDragendEventListener();
    },

    addDragendEventListener() {
      window.naver.maps.Event.addListener(this.map, 'dragend', () => {
        this.$emit('dragend', {
          lat: this.map.getCenter().y,
          lng: this.map.getCenter().x,
        });
      });
    },

    addClickMapEventListener() {
      window.naver.maps.Event.addListener(this.map, 'click', (eventArgument) => {
        if (this.hasClickEvent) {
          console.log(eventArgument);
          this.isClickLoading = true;
          this.$emit('click', eventArgument.coord);
          this.hasClickEvent = false;
          this.$emit('clickMapEventComplete');
          this.isClickLoading = false;
        }
      });
    },

    setHasClickEvent() {
      if (!this.isClickLoading) {
        this.hasClickEvent = true;
      } else {
        this.$on('clickMapEventComplete', () => {
          this.hasClickEvent = true;
        });
      }
    },

    addMarker(stationInformation) {
      const marker = new window.naver.maps.Marker({
        map: this.map,
        position: new window.naver.maps.LatLng(stationInformation.lat, stationInformation.lng),
        clickable: true,
      });
      marker.setMap(this.map);
      this.markers.push(marker);
      window.naver.maps.Event.addListener(marker, 'click', () => {
        this.$emit('clickMarker', stationInformation);
      });
    },

    setMarker(stationInformation) {
      // eslint-disable-next-line no-unused-expressions
      window.naver ? this.addMarker(stationInformation) : this.$on('mapLoaded', () => this.addMarker());
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
