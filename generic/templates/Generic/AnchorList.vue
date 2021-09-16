<template>
  <div v-sticky="stickyOptions">
    <div class="lg:border-l border-gray-300 lg:pl-4">
      <div v-for="anchor in anchors" :key="anchor.id" class="mb-2">
        <whppt-link
          :to="{ type: 'anchor', href: `#${anchor.id}` }"
          class="quick-transition text-gray-500 lg:text-gray-400 text-sm hover:text-black"
        >
          {{ anchor.id }}
        </whppt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { filter } from 'lodash';

export default {
  name: 'GenericTemplateAnchorList',
  props: {
    page: { type: Object, default: () => ({}) },
  },
  created() {
    this.stickyOptions = {
      topSpacing: 96,
    };
  },
  computed: {
    anchors() {
      return filter(this.page.contents, { componentType: 'wAnchor' });
    },
  },
};
</script>
