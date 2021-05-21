<template>
  <v-container
    fluid
    fill-height
  >
    <v-row justify="center">
      <v-col cols="auto">
        <v-img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MTZfMjMy%2FMDAxNjIxMTQ1Mjc1MTQx.4zOnJxpjtFcRCXeovvzu-EtVad_lG6Kuf33jvFtWdZsg.Oy8Zrz0eK1r6Clj61dzSklRwU8RUT5k8ehwS6ZU1sFkg.JPEG.bong8appa%2F1.gif&type=sc960_832_gif"
        />
      </v-col>
    </v-row>

    <v-overlay
      class="mb-n16"
      :value="true"
      :dark="false"
      :opacity="0"
    >
      <call-card />
    </v-overlay>
  </v-container>
</template>

<script>
import CallCard from '@/components/call/CallCard.vue';

export default {
  name: 'CallDefault',
  components: { CallCard },
};
</script>
