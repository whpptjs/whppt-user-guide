<template>
  <div class="nav-spacer relative lg:flex w-full">
    <div class="lg:border-r border-gray-200">
      <page-navigation class="lg:mx-0 lg:w-64 block overflow-auto" :style="pageNavHeightStyle" />
      <!-- <page-navigation class="lg:mx-0 lg:w-64 block overflow-auto" style="height: min(calc(90vh - 4rem), 100%)" /> -->
    </div>
    <div ref="content" class="container lg:py-10 flex-1">
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
          <GenericPageActions :page-actions="page.pageActions" />
        </div>
        <div class="hidden lg:flex fixed inset-0 mt-24 pointer-events-none">
          <div class="flex w-full justify-end pl-64">
            <div class="w-1/4 pl-4 pointer-events-auto">
              <anchor-list :page="page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import AnchorList from './AnchorList.vue';
import AnchorListDropDown from './AnchorListDropDown.vue';
import GenericPageActions from './Actions.vue';
import PageNavigation from '~~/PageNavigation';

export default {
  name: 'GenericTemplate',
  components: { AnchorList, PageNavigation, AnchorListDropDown, GenericPageActions },
  props: {
    page: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      contentHeight: 0,
    };
  },
  mounted() {
    if (this.$refs.content) this.contentHeight = this.$refs.content.clientHeight;
  },
  computed: {
    updatedAt() {
      return dayjs(this.page.updatedAt || this.page.createdAt).format('DD-MM-YYYY');
    },
    pageNavHeightStyle() {
      return `height: max(calc(90vh - 4rem), ${this.contentHeight}px)`;
    },
  },
};
</script>
