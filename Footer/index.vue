<template>
  <footer class="bg-gray-600 w-full py-8 text-white">
    <div class="container flex">
      <div class="w-2/12" />
      <div class="w-10/12">Footer</div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Footer',
  computed: {
    ...mapState('whppt/site', ['footer']),
  },
};
</script>
