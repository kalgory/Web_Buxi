<template>
  <v-dialog
    v-model="isDialogShow"
    width="500"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        block
        color="primary"
        :disabled="!!isValid"
        v-bind="attrs"
        v-on="on"
      >
        버스 호출
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        탑승 정보
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row no-gutters>
            <v-col>
              <v-slider
                v-model="waitingTime"
                class="mt-6"
                label="몇분뒤?"
                thumb-label="always"
                max="20"
                min="0"
              />
            </v-col>
          </v-row>
          <v-row class="mt-n2">
            <v-col>
              <span class="text-body-1"> 출발 </span>
              <span class="ml-8 font-weight-bold">{{ departureStopName }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="text-body-1"> 도착 </span>
              <span class="ml-8 font-weight-bold">{{ arrivalStopName }}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="submit"
        >
          호출
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'CallDialog',

  props: {
    isValid: {
      type: Boolean,
      required: true,
    },
    departureStopName: {
      type: String,
      required: true,
    },
    departureStopNumber: {
      type: Number,
      required: true,
    },
    arrivalStopName: {
      type: String,
      required: true,
    },
    arrivalStopNumber: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    waitingTime: 0,
    isDialogShow: true,
  }),

  methods: {
    submit() {
      console.log('matching');
      this.isDialogShow = false;
    },
  },
};
</script>
