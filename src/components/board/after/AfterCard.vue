<template>
  <v-card max-width="360">
    <v-card-text>
      <v-container class="mb-n1 mt-n3">
        <v-row>
          <v-col>
            <p class="text-center text-h6">
              {{ departureStop.name }} 에 {{ remainingTime }} 분 뒤에 도착합니다!
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-btn
              block
              class="light-grey"
              @click="cancelApply"
            >
              호출 취소
            </v-btn>
          </v-col>
          <v-col offset="1">
            <after-dialog />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import AfterDialog from '@/components/board/after/AfterDialog.vue';

export default {
  name: 'AfterCard',

  components: {
    AfterDialog,
  },

  props: {
    departureStop: {
      type: Object,
      required: true,
    },
    remainingTime: {
      type: Number,
      required: true,
    },
  },

  methods: {
    cancelApply() {
      this.$store.commit('setIsBoardBefore', false);
      this.$store.commit('setDepartureStop', {});
      this.$store.commit('setArrivalStop', {});
      this.$router.push('/board/apply');
    },
  },
};
</script>
