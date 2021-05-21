<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="11">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BaseAuth',

  data: () => ({
  }),
};
</script>
