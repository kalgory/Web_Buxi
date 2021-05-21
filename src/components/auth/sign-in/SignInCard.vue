<template>
  <v-card>
    <v-card-title>
      Sign in to Buxi
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row align="center">
          <v-col>
            <v-btn
              block
              @click="signInWithGoogle"
            >
              Google
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

  methods: {
    signInWithGoogle() {
      const provider = new Firebase.auth.GoogleAuthProvider();
      Firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result.user);
      }).catch((error) => {
        console.error(error);
      });
    },
  },
};
</script>
