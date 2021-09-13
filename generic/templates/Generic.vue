<template>
  <div class="relative mt-16 xl:mt-20 flex w-full container">
    <!-- <generic-header :header="page.header" :slug="page.slug" />
    <slot></slot>
    <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents" /> -->
    <div class="w-2/12 border-r border-gray-200">Introduction</div>
    <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents w-8/12" />
    <div class="w-2/12">Getting Started</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import GenericHeader from '../headers/Generic';

export default {
  name: 'GenericTemplate',
  // components: { GenericHeader },
  props: { page: { type: Object, default: () => ({}) } },
  computed: {
    ...mapState('navigation', ['header']),
  },
};
</script>
