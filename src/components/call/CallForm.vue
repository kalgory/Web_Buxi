<template>
  <v-form
    class="pa-5"
    @submit.prevent="submit"
  >
    <slot
      name="busStopName"
      :busStop="busStop"
    />
    <v-text-field
      v-model="busStop.departStop"
      hint="출발 정류장"
      placeholder="출발 정류장을 선택해주세요"
      disabled
    />
    <v-btn
      @click="setDepartStop"
    >
      출발지 설정
    </v-btn>
    <v-text-field
      v-model="busStop.arriveStop"
      hint="도착 정류장"
      placeholder="도착 정류장을 선택해주세요"
      disabled
    />
    <v-btn
      @click="setArriveStop"
    >
      도착지 설정
    </v-btn>
    <v-text-field
      v-model="boardingTime"
      hint="탑승 시간"
      type="time"
    />
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

  components: { FormDialog },

  data: () => ({
    busStop: {
      departStop: '',
      arriveStop: '',
    },
    boardingTime: 0,
  }),

  computed: {
    valid() {
      return this.busStop.departStop.length > 0
          && this.busStop.arriveStop.length > 0
          && this.boardingTime !== 0;
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
