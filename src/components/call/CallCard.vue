<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row
          no-gutters
          justify="space-around"
        >
          <v-col cols="5">
            <v-text-field
              v-model="departureStopName"
              placeholder="출발 정류장"
              disabled
            />
          </v-col>
          <v-col cols="5">
            <v-text-field
              v-model="arrivalStopName"
              placeholder="도착 정류장"
              disabled
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <call-dialog
              :is-valid="isValid"
              :departure-stop-name="departureStopName"
              :departure-stop-number="departureStopNumber"
              :arrival-stop-name="arrivalStopName"
              :arrival-stop-number="arrivalStopNumber"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import CallDialog from '@/components/call/CallDialog.vue';

export default {
  name: 'CallForm',

  components: {
    CallDialog,
  },

  data: () => ({
    departureStopName: '',
    departureStopNumber: 0,
    arrivalStopName: '',
    arrivalStopNumber: 0,
    waitingTime: 0,
  }),

  computed: {
    isValid() {
      return this.departureStopName.length > 0 && this.arrivalStopName.length > 0;
    },
  },
};
</script>
