<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row
        no-gutters
        justify="space-around"
      >
        <v-col cols="5">
          <v-text-field
            v-model="departureStop"
            placeholder="출발 정류장"
            disabled
          />
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model="arrivalStop"
            placeholder="도착 정류장"
            disabled
          />
        </v-col>
      </v-row>
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
      <v-row no-gutters>
        <v-col>
          <v-btn
            type="submit"
            block
            color="primary"
            :disabled="!isValid"
          >
            버스 호출
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import MapEventBus from '../../event/map';

export default {
  name: 'CallForm',

  data: () => ({
    departureStop: '',
    arrivalStop: '',
    waitingTime: 0,
  }),

  computed: {
    isValid() {
      return this.departureStop.length > 0 && this.arrivalStop.length > 0;
    },
  },

  created() {
    MapEventBus.$on('responsePosition', (payload) => {
      console.log(payload);
    });
  },

  methods: {
    submit() {
      console.log(this.arrivalStop);
      console.log(this.departureStop);
    },
  },
};
</script>
