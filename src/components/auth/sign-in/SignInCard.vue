<template>
  <v-card :loading="isAuthLoading">
    <v-card-title>
      <v-container>
        <v-row justify="center">
          <v-col cols="auto">
            <v-img
              max-width="300"
              src="https://firebasestorage.googleapis.com/v0/b/buxi-14dd3.appspot.com/o/logo-color.png?alt=media&token=d2ea7cf3-794a-4af3-80b2-96e9cb95c878"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row align="center">
          <v-col>
            <v-btn
              block
              plain
              width="96"
              @click="signInWithGoogle"
            >
              <v-img
                max-width="250"
                src="../../../assets/btn-google-signin.png"
              />
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import Firebase from 'firebase/app';

export default {
  name: 'SignInCard',

  computed: {
    isAuthLoading() {
      return this.$store.getters.getIsAuthLoading;
    },
  },

  methods: {
    signInWithGoogle() {
      this.$store.commit('setIsAuthLoading', true);
      const provider = new Firebase.auth.GoogleAuthProvider();
      Firebase.auth().signInWithPopup(provider)
        // eslint-disable-next-line no-unused-vars
        .then((result) => {
          // console.log(result.user);
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
