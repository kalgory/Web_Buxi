<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row no-gutters>
        <v-col cols="7">
          <v-text-field
            v-model="departureStop"
            placeholder="출발 정류장"
            disabled
          />
        </v-col>
        <v-col offset="1">
          <v-btn
            block
            class="mt-4"
            color="primary"
            @click="setDepartStop"
          >
            선택
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        class="mt-n1"
      >
        <v-col cols="7">
          <v-text-field
            v-model="arrivalStop"
            placeholder="도착 정류장"
            disabled
          />
        </v-col>
        <v-col offset="1">
          <v-btn
            block
            class="mt-4"
            color="primary"
            @click="setArriveStop"
          >
            선택
          </v-btn>
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
import PositionEventBus from '../../event/position';

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
    PositionEventBus.$on('responsePosition', (payload) => {
      console.log(payload);
    });
  },

  methods: {
    submit() {
      console.log(this.arrivalStop);
      console.log(this.departureStop);
    },

    setArriveStop() {
      PositionEventBus.$emit('requestPosition', 'arrivalStop');
      this.arrivalStop = 'test';
    },

    setDepartStop() {
      PositionEventBus.$emit('requestPosition', 'departureStop');
      this.departureStop = 'test2';
    },
  },
};
</script>
