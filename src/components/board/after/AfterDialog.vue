<template>
  <v-dialog
    v-model="isDialogShow"
    width="500"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        block
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        탑승
      </v-btn>
    </template>

    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions class="mt-n4">
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="submit"
        >
          취소
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AfterDialog',

  data: () => ({
    isDialogShow: false,
  }),

  methods: {
    submit() {
      this.isDialogShow = false;
    },
  },
};
</script>
