<template>
  <div class="relative mt-16 xl:mt-20 flex w-full container">
    <div class="w-2/12 border-r border-gray-200">Introduction</div>
    <div class="w-8/12">
      <div v-whppt-text="page.header" data-property="title" class="font-bold text-3xl container mb-8">
        {{ page.header.title || 'Title' }}
      </div>
      <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents w-full" />
    </div>
    <div class="w-2/12">Getting Started</div>
  </div>
</template>

<script>
export default {
  name: 'GenericTemplate',
  props: {
    page: { type: Object, default: () => ({}) },
  },
};
</script>
