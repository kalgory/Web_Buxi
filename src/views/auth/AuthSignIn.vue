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
      console.log('isAuthLoading changed', value);
      if (value) {
        if (this.isAuthenticated) {
          this.$router.push('/');
        }
      }
    },
  },
};
</script>
