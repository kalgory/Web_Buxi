<template>
  <v-container
    fluid
    fill-height
    class="pa-0"
  >
    <v-row
      class="fill-height"
      justify="center"
      no-gutters
    >
      <v-col cols="auto">
        <v-img
          class="fill-height"
          width="15600px"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MTZfMjMy%2FMDAxNjIxMTQ1Mjc1MTQx.4zOnJxpjtFcRCXeovvzu-EtVad_lG6Kuf33jvFtWdZsg.Oy8Zrz0eK1r6Clj61dzSklRwU8RUT5k8ehwS6ZU1sFkg.JPEG.bong8appa%2F1.gif&type=sc960_832_gif"
        />
      </v-col>
    </v-row>

    <call-card id="overlay" />
  </v-container>
</template>

<script>
import CallCard from '@/components/call/CallCard.vue';

export default {
  name: 'CallDefault',

  components: {
    CallCard,
  },
};
</script>

<style>
#overlay {
  position: fixed;
  width: 800px;
  margin: 5% auto;
  left: 0;
  right: 0;
  bottom: 10%;
  /*background-color: rgba(0,0,0,0.5);*/
}
</style>
