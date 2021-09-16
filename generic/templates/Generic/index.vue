<template>
  <div class="relative lg:flex justify-between w-full container">
    <div class="block lg:w-3/12 lg:border-r border-gray-200 lg:pt-24">
      <PageNavigation />
    </div>
    <div class="lg:w-7/12 pt-4 lg:pt-24 lg:px-10">
      <anchor-list-drop-down class="block lg:hidden" :page="page" />
      <div v-whppt-text="page.header" data-property="title" class="font-extrabold text-3xl mb-8">
        {{ page.header.title || 'Title' }}
      </div>
      <w-content
        :container="false"
        :content-items="page.contents"
        style="min-height: 200px"
        class="page-contents w-full"
      />
    </div>
    <anchor-list class="hidden lg:block w-2/12 pt-4 nav-spacer" :page="page" />
  </div>
</template>

<script>
import AnchorList from './AnchorList.vue';
import AnchorListDropDown from './AnchorListDropDown.vue';
import PageNavigation from '~~/PageNavigation';

export default {
  name: 'GenericTemplate',
  components: { AnchorList, PageNavigation, AnchorListDropDown },
  props: {
    page: { type: Object, default: () => ({}) },
  },
};
</script>
