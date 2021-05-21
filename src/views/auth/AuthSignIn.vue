<template>
  <sign-in-card />
</template>

<script>
import SignInCard from '@/components/auth/sign-in/SignInCard.vue';

export default {
  name: 'AuthSignIn',

  components: {
    SignInCard,
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
      if (!value && this.isAuthenticated) {
        this.$router.push('/call');
      }
    },
  },

  created() {
    if (this.isAuthenticated) {
      this.$router.push('/call');
    }
  },
};
</script>
