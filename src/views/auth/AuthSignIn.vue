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
    isAuthenticated(value) {
      if (value) {
        this.$router.push('/board');
      }
    },
  },

  created() {
    if (this.isAuthenticated) {
      if (this.$route.name !== 'sign in') {
        this.$router.push('/auth/signin');
      }
    }
  },
};
</script>
