<template>
  <div class="relative mt-16">
    <home-header :header="page.header" />
    <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents container" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HomeHeader from '../headers/Home';

export default {
  name: 'HomeTemplate',
  components: { HomeHeader },
  props: { page: { type: Object, default: () => ({}) } },
  computed: {
    ...mapState('navigation', ['header']),
  },
};
</script>
