<template>

</template>

<script>
export default {
  name: 'MapMarker',

  props: {
    lng: {
      type: Number,
      required: false,
    },
    lat: {
      type: Number,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    iconStyle: {
      type: Object,
      required: false,
      default() {
        return {
          size: { width: 0, height: 0 },
          anchor: { x: 0, y: 0 },
        };
      },
    },
  },


};
</script>

<style scoped>

</style>
