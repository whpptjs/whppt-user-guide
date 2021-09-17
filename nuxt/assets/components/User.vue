<template>
  <div class="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center">{{ abbreviation }}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'User',
  computed: {
    ...mapState('client', ['client']),
    abbreviation() {
      return this.client?.username.slice(0, 2).toUpperCase();
    },
  },
};
</script>
