<template>
  <div id="map">
  </div>
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
    test: 0,
    hasClickEvent: true,
    isClickLoading: false,
  }),

  mounted() {
    // eslint-disable-next-line no-unused-expressions
    window.naver ? this.initMap() : this.naverMapApiScript();
    window.clickInfoWindowButton = this.clickInfoWindowButton;
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
      this.dragEndEventListener();
    },

    dragEndEventListener() {
      window.naver.maps.Event.addListener(this.map, 'dragend', () => {
        this.test += 1;
        this.$emit('dragend', {
          lat: this.map.getCenter().y,
          lng: this.map.getCenter().x,
        });
        this.setMarker({
          lat: this.map.getCenter().y,
          lng: this.map.getCenter().x,
          stop_nm: this.test,
        });
      });
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

    clickMarkerEventListener(marker, option) {
      const contentString = [
        '<div class="iw_inner" style="width: 200px">',
        '   <h3 class="text-center">', option.stop_nm, '</h1>',
        '   <p class="center">',
        `       <button class="button" onclick="clickInfoWindowButton(1, '${encodeURIComponent(JSON.stringify(option))}')">출발지 선택</button>`,
        `       <button class="button" onclick="clickInfoWindowButton(0, '${encodeURIComponent(JSON.stringify(option))}')">도착지 선택</button>`,
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
      this.clickMarkerEventListener(marker, option);
    },

    setMarker(option) {
      // eslint-disable-next-line no-unused-expressions
      window.naver ? this.initMarker(option) : this.$on('load', () => this.initMarker(option));
    },

    removeMarkers() {
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = null;
      this.setHasClickEvent();
    },

    clickInfoWindowButton(select, option) {
      const object = JSON.parse(decodeURIComponent(option));
      if (select === 1) {
        this.$emit('startStation', object);
      } else if (select === 0) {
        this.$emit('endStation', object);
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
