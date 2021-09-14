<template>
  <div class="relative mt-16 flex justify-between w-full container">
    <div class="w-3/12 border-r border-gray-200 pt-4">
      <PageNavigation />
    </div>
    <div class="w-6/12 pt-8">
      <div v-whppt-text="page.header" data-property="title" class="font-extrabold text-3xl mb-8">
        {{ page.header.title || 'Title' }}
      </div>
      <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents w-full" />
    </div>
    <anchor-list class="w-2/12 pt-8" :page="page" />
  </div>
</template>

<script>
import AnchorList from './AnchorList.vue';
import PageNavigation from '~~/PageNavigation';

export default {
  name: 'GenericTemplate',
  components: { AnchorList, PageNavigation },
  props: {
    page: { type: Object, default: () => ({}) },
  },
};
</script>
