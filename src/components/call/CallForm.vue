<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row no-gutters>
        <v-col cols="7">
          <v-text-field
            v-model="busStop.departStop"
            hint="출발 정류장"
            placeholder="정류장 선택"
            disabled
          />
        </v-col>
        <v-col offset="1">
          <v-btn
            block
            class="mt-4"
            @click="setDepartStop"
          >
            출발
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="7">
          <v-text-field
            v-model="busStop.arriveStop"
            hint="도착 정류장"
            placeholder="정류장 선택"
            disabled
          />
        </v-col>
        <v-col offset="1">
          <v-btn
            block
            class="mt-4"
            @click="setArriveStop"
          >
            도착
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="boardingTime"
            hint="탑승 시간"
            type="number"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-btn
            block
            color="primary"
            disabled
          >
            버스 호출
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <form-dialog
      v-if="valid"
      :arrive-stop="busStop.arriveStop"
      :depart-stop="busStop.departStop"
      :time="boardingTime"
    />
  </v-form>
</template>

<script>
import FormDialog from '@/components/call/form/FormDialog.vue';

export default {
  name: 'CallForm',

  components: {
    FormDialog,
  },

  data: () => ({
    busStop: {
      departStop: '',
      arriveStop: '',
    },
    boardingTime: 5,
  }),

  computed: {
    valid() {
      return this.busStop.departStop.length > 0
          && this.busStop.arriveStop.length > 0
          && this.boardingTime >= 0;
    },
  },

  methods: {
    submit() {

    },

    setArriveStop() {
      this.busStop.arriveStop = 'test';
    },

    setDepartStop() {
      this.busStop.departStop = 'test2';
    },
  },
};
</script>

<style scoped>

</style>
