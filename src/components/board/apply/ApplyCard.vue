<template>
  <v-card max-width="360">
    <v-card-text>
      <v-container class="mb-n1 mt-n3">
        <v-row
          no-gutters
          justify="space-around"
        >
          <v-col cols="5">
            <v-text-field
              :value="departureStop.name"
              placeholder="출발 정류장"
              disabled
            />
          </v-col>
          <v-col cols="5">
            <v-text-field
              :value="arrivalStop.name"
              placeholder="도착 정류장"
              disabled
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <apply-dialog
              :is-valid="isValid"
              :departure-stop="departureStop"
              :arrival-stop="arrivalStop"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import ApplyDialog from '@/components/board/apply/ApplyDialog.vue';

export default {
  name: 'ApplyCard',

  components: {
    ApplyDialog,
  },

  props: {
    departureStop: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        number: 0,
      }),
    },
    arrivalStop: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        number: 0,
      }),
    },
  },

  data: () => ({
    waitingTime: 0,
  }),

  computed: {
    isValid() {
      return this.departureStop.name.length > 0 && this.arrivalStop.name.length > 0;
    },
  },
};
</script>
