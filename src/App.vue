<template>
  <v-app>
    <app-bar v-show="$route.meta.isAppBarShow" />
    <v-main>
      <v-container
        v-if="isLoading"
        fill-height
      >
        <v-row justify="center">
          <v-col cols="auto">
            <v-progress-circular
              indeterminate
              size="128"
              color="primary"
            />
          </v-col>
        </v-row>
      </v-container>
      <router-view v-else />
    </v-main>
    {{ isAuthLoading }}
    {{ isAuthenticated }}
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

  data: () => ({
    isLoading: true,
  }),

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
          this.$router.push('/auth/signin');
        }
      }
      this.isLoading = false;
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
