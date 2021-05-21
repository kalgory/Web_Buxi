<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <div>
          지도
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="auto"
      >
        <call-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CallCard from '@/components/call/CallCard.vue';

export default {
  name: 'CallDefault',
  components: { CallCard },
};
</script>
