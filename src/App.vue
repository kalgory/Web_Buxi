<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://firebasestorage.googleapis.com/v0/b/buxi-14dd3.appspot.com/o/logo.png?alt=media&token=adc6e5d5-569c-425e-8e04-f5624ab4f82e"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer />

      <v-btn
        color="primary"
        target="_blank"
        @click="getTest"
      >
        <span class="mr-2">Get test</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    getTest() {
      console.log(this.$hyunmin);
      axios.get('http://35.232.144.196:3000/').then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
