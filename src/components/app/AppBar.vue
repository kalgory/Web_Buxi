<template>
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
        src="https://firebasestorage.googleapis.com/v0/b/buxi-14dd3.appspot.com/o/logo.png?alt=media&token=7f3267db-547c-4f27-84be-d84d03e7abf1"
        transition="scale-transition"
        width="80"
      />
    </div>

    <v-spacer />

    <v-btn
      color="primary"
      target="_blank"
      @click="signOut"
    >
      <span class="mr-2">Sign Out</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Firebase from 'firebase/app';

export default {
  name: 'AppBar',

  methods: {
    signOut() {
      this.$store.commit('setIsAuthLoading', true);
      Firebase.auth().signOut()
        .then(() => {
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
