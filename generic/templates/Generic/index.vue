<template>
  <div class="relative lg:flex w-full">
    <div class="container lg:w-64 block lg:border-r border-gray-200 mb-8">
      <PageNavigation />
    </div>
    <div class="container lg:nav-spacer flex-1">
      <anchor-list-drop-down class="block lg:hidden mb-8" :page="page" />
      <div class="flex">
        <div class="w-full lg:w-3/4 pb-12">
          <div v-whppt-text="page.header" data-property="title" class="font-extrabold text-3xl mb-8">
            {{ page.header.title || 'Title' }}
          </div>
          <w-content
            :container="false"
            :content-items="page.contents"
            style="min-height: 200px"
            class="page-contents w-full"
          />
          <div class="flex justify-end container italic text-sm">
            <span>Last updated on&nbsp;</span>
            <span class="font-bold">{{ updatedAt }}</span>
          </div>
        </div>
        <div class="w-1/4 pl-4 hidden lg:block">
          <anchor-list :page="page" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import AnchorList from './AnchorList.vue';
import AnchorListDropDown from './AnchorListDropDown.vue';
import PageNavigation from '~~/PageNavigation';

export default {
  name: 'GenericTemplate',
  components: { AnchorList, PageNavigation, AnchorListDropDown },
  props: {
    page: { type: Object, default: () => ({}) },
  },
  computed: {
    updatedAt() {
      return dayjs(this.page.updatedAt || this.page.createdAt).format('DD-MM-YYYY');
    },
  },
};
</script>
