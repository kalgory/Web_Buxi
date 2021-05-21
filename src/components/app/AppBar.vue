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
        src="https://firebasestorage.googleapis.com/v0/b/buxi-14dd3.appspot.com/o/logo.png?alt=media&token=dfae23be-0353-4bea-973e-2d3d6adc4487"
        transition="scale-transition"
        width="80"
      />
    </div>
    <v-spacer />
    <v-btn
      v-show="!isAuthLoading"
      color="primary"
      @click="signOut"
    >
      <span class="mr-2">Sign Out</span>
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Firebase from 'firebase/app';

export default {
  name: 'AppBar',

  computed: {
    isAuthLoading() {
      return this.$store.getters.getIsAuthLoading;
    },
  },

  methods: {
    signOut() {
      this.$store.commit('setIsAuthLoading', true);
      Firebase.auth().signOut()
        .then(() => {
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.$store.commit('setIsAuthLoading', false);
        });
    },
  },
};
</script>
