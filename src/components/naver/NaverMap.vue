<template>
  <div id="map" />
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
    window.clickSelectStationButton = this.clickSelectStationButton;
  },

  methods: {
    addNaverMapApiScript() {
      /* global naver */
      const script = document.createElement('script');
      const type = 'text/javascript';
      const src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.$clientID}`;
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
          this.isClickLoading = true;
          this.$emit('click', eventArgument.coord);
          this.hasClickEvent = false;
          this.$emit('clickMapEventComplete');
          this.isClickLoading = false;
        }
      });
    },

    addClickMarkerEventListener(marker, stationInformation) {
      const contentString = [
        '<div class="iw_inner" style="width: 200px">',
        '   <h3 class="text-center">', stationInformation.name, '</h1>',
        '   <p class="center">',
        `       <button class="button"
                        onclick="clickSelectStationButton('Departure', '${encodeURIComponent(JSON.stringify(stationInformation))}')"
                        >
                        출발지 선택
                </button>`,
        `       <button class="button"
                        onclick="clickSelectStationButton('Arrival', '${encodeURIComponent(JSON.stringify(stationInformation))}')"
                        >
                        도착지 선택
                </button>`,
        '   </p>',
        '</div>'].join('');
      const infoWindow = new naver.maps.InfoWindow({
        content: contentString,
      });
      window.naver.maps.Event.addListener(marker, 'click', () => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(this.map, marker);
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
      this.addClickMarkerEventListener(marker, stationInformation);
    },

    setMarker(stationInformation) {
      // eslint-disable-next-line no-unused-expressions
      window.naver ? this.addMarker(stationInformation) : this.$on('mapLoaded', () => this.addMarker(stationInformation));
    },

    removeMarkers() {
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = null;
      this.setHasClickEvent();
    },

    clickSelectStationButton(selectOptionString, stationInformation) {
      const object = JSON.parse(decodeURIComponent(stationInformation));
      if (selectOptionString === 'Departure') {
        this.$emit('setDepartureStop', object);
      } else if (selectOptionString === 'Arrival') {
        this.$emit('setArrivalStop', object);
      }
    },
  },
};
</script>

<style>
.button {
  width: 80px;
  height: 30px;
  background-color: #fff;
  border: 3px solid #ebebeb;
}

.center {
  display: flex;
  justify-content: center;
}
</style>
