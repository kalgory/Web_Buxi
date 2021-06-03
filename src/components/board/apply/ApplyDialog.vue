<template>
  <v-dialog
    v-model="isDialogShow"
    width="500"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        block
        color="primary"
        :disabled="!isValid"
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
                v-model="departureTimeOffsetMinute"
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
              <span class="ml-8 font-weight-bold">{{ departureStop.name }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="text-body-1"> 도착 </span>
              <span class="ml-8 font-weight-bold">{{ arrivalStop.name }}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions class="mt-n4">
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
import Axios from 'axios';
import Firebase from 'firebase/app';

export default {
  name: 'ApplyDialog',

  props: {
    isValid: {
      type: Boolean,
      required: true,
    },
    departureStop: {
      type: Object,
      required: true,
    },
    arrivalStop: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    departureTimeOffsetMinute: 0,
    isDialogShow: false,
  }),

  computed: {
    departureTimeOffsetSecond() {
      return this.departureTimeOffsetMinute * 60;
    },
  },

  methods: {
    submit() {
      this.$store.commit('setIsBoardLoading', true);
      this.isDialogShow = false;
      Axios.post(`${this.$apiURI}/match`, {
        uid: Firebase.auth().currentUser.uid,
        departureStop: this.departureStop.number,
        arrivalStop: this.arrivalStop.number,
        departureTimeOffset: this.departureTimeOffsetSecond,
      })
        .then((response) => {
          console.log(response);
          this.$store.commit('setBus', response.data.bus);
          this.$store.commit('setDepartureStop', this.departureStop);
          this.$store.commit('setArrivalStop', this.arrivalStop);
          this.$store.commit('setIsBoardBefore', true);
          this.$router.push('/board/before');
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.$store.commit('setIsBoardLoading', false);
        });
    },
  },
};
</script>
