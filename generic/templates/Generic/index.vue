<template>
  <div class="relative flex justify-between w-full">
    <div class="w-80 border-r border-gray-200 px-4 max-w-lg">
      <PageNavigation class="nav-spacer" />
    </div>
    <div class="container nav-spacer flex flex-1">
      <div class="w-3/4">
        <div v-whppt-text="page.header" data-property="title" class="font-extrabold text-3xl mb-8 container">
          {{ page.header.title || 'Title' }}
        </div>
        <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents w-full" />
      </div>
      <div class="w-1/4 pl-4">
        <anchor-list :page="page" />
      </div>
    </div>
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
