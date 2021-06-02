<template>
  <v-card max-width="360">
    <v-card-text>
      <v-container class="mb-n1 mt-n3">
        <v-row no-gutters>
          <v-col cols="5">
            {{ departureStop.name }}
          </v-col>
          <v-col cols="5">
            {{ arrivalStop.name }}
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-btn
              block
              class="light-grey"
            >
              호출 취소
            </v-btn>
          </v-col>
          <v-col offset="1">
            <v-btn
              block
              class="primary"
            >
              탑승
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AfterCard',

  props: {
    departureStop: {
      type: Object,
      required: true,
      default: () => ({
        name: 'test',
        number: 0,
      }),
    },
    arrivalStop: {
      type: Object,
      required: true,
      default: () => ({
        name: 'test1424',
        number: 0,
      }),
    },
  },
};
</script>
