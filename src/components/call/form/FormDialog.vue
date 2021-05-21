<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="400"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Call
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        버스 호출 정보 확인
      </v-card-title>
      <v-card-text>{{ arriveStop }}</v-card-text>
      <v-card-text>{{ departStop }}</v-card-text>
      <v-card-text>{{ time }}</v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="gray"
          text
          @click="dialog = false"
        >
          Disagree
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="sendInformation"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'FormDialog',

  props: {
    departStop: {
      type: String,
      default: '',
      required: true,
    },
    arriveStop: {
      type: String,
      default: '',
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    dialog: false,
  }),

  methods: {
    sendInformation() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
</style>
