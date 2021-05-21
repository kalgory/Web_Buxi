<template>
  <v-form
    class="pa-5"
    @submit.prevent="submit"
  >
    <v-text-field
      v-model="departStop"
      hint="출발 정류장"
      placeholder="출발 정류장을 입력해주세요"
    />
    <v-text-field
      v-model="arriveStop"
      hint="도착 정류장"
      placeholder="출발 정류장을 입력해주세요"
    />
    <v-text-field type="time" />
    <v-btn
      type="submit"
      class="mt-5"
      color="primary"
      @click.prevent="submit"
    >
      Call
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'CallForm',

  data: () => ({
    departStop: '',
    arriveStop: '',
  }),

  methods: {
    submit() {

    },
  },
};
</script>

<style scoped>

</style>
