<template>
  <div class="relative mt-16 xl:mt-20 flex w-full container">
    <div class="w-2/12 border-r border-gray-200">Introduction</div>
    <div class="w-8/12">
      <div class="font-bold text-2xl container">Title</div>
      <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents w-full" />
    </div>
    <div class="w-2/12">Getting Started</div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';
import { mapState } from 'vuex';
// import GenericHeader from '../headers/Generic';

export default {
  name: 'GenericTemplate',
  // components: { GenericHeader },
  props: { page: { type: Object, default: () => ({}) } },
  computed: {
    ...mapState('navigation', ['header']),
    pageContents() {
      return cloneDeep(this.page.contents);
    },
  },
};
</script>
