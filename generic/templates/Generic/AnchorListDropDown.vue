<template>
  <div v-if="showAnchors" class="bg-gray-100 rounded-lg border border-gray-200">
    <div class="flex justify-between items-center py-1 px-2" @click="hide = !hide">
      <div>On this page</div>
      <icon
        icon="ChevronDown"
        class="transition ease-in-out duration-200 transform"
        :class="{ 'rotate-180': !hide }"
      ></icon>
    </div>
    <div class="overflow-hidden noHeight" :class="{ addHeight: !hide }">
      <div class="border-t border-gray-200 pt-2">
        <anchor-list class="py-1 px-2" :page="page" />
      </div>
    </div>
  </div>
</template>

<script>
import { filter } from 'lodash';
import AnchorList from './AnchorList.vue';

export default {
  name: 'MobileAchorListDropdown',
  components: {
    AnchorList,
  },
  props: {
    page: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      hide: true,
    };
  },
  computed: {
    showAnchors() {
      return filter(this.page.contents, { componentType: 'wAnchor' }).length;
    },
  },
};
</script>
<style>
.noHeight {
  max-height: 0px;
  transition: max-height 0.15s ease-out;
}
.addHeight {
  max-height: 700px;
  transition: max-height 0.25s ease-in;
}

.rotate {
  transition: all;
  transform: rotate(0);
}
</style>
