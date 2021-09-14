<template>
  <div class="relative mt-16 flex w-full container">
    <div class="w-2/12 border-r border-gray-200 pt-8">Introduction</div>
    <div class="w-8/12 pt-8">
      <div v-whppt-text="page.header" data-property="title" class="font-extrabold text-3xl container mb-8">
        {{ page.header.title || 'Title' }}
      </div>
      <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents w-full" />
    </div>
    <anchor-list class="w-2/12 pt-8" :page="page" />
  </div>
</template>

<script>
import AnchorList from './AnchorList.vue';
export default {
  name: 'GenericTemplate',
  components: { AnchorList },
  props: {
    page: { type: Object, default: () => ({}) },
  },
};
</script>
