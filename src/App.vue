<template>
  <v-app>
    <app-bar v-if="$route.meta.isAppBarShow" />
    <v-main class="primary">
      <v-container
        v-if="isAuthLoading"
        fill-height
      >
        <v-row justify="center">
          <v-col cols="auto">
            <v-progress-circular
              indeterminate
              size="128"
              color="white"
            />

          </v-col>
        </v-row>
      </v-container>
      <router-view v-else />
    </v-main>
  </v-app>
</template>

<script>
import Firebase from 'firebase/app';
import AppBar from '@/components/app/AppBar.vue';

export default {
  name: 'App',

  components: {
    AppBar,
  },

  computed: {
    isAuthLoading() {
      return this.$store.getters.getIsAuthLoading;
    },
    isAuthenticated() {
      return this.$store.getters.getIsAuthenticated;
    },
  },

  watch: {
    isAuthLoading(value) {
      if (!value) {
        if (!this.isAuthenticated) {
          if (this.$route.name !== 'sign in') {
            this.$router.push('/auth/signin');
          }
        }
      }
    },
  },

  created() {
    this.onAuthStateChanged();
  },

  methods: {
    onAuthStateChanged() {
      Firebase.auth().onAuthStateChanged((user) => {
        this.$store.commit('setIsAuthLoading', false);
        if (user) {
          this.$store.commit('setIsAuthenticated', true);
        } else {
          this.$store.commit('setIsAuthenticated', false);
        }
      });
    },
  },
};
</script>
