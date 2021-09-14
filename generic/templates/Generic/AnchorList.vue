<template>
  <div>
    <div class="border-l border-gray-400 pl-4">
      <div v-for="anchor in anchors" :key="anchor.id" class="mb-2 text-gray-400">
        <whppt-link
          :to="{ type: 'anchor', href: `#${anchor.id}` }"
          class="mr-4 quick-transition hover:text-primary-200"
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
  computed: {
    anchors() {
      return filter(this.page.contents, { componentType: 'wAnchor' });
    },
  },
};
</script>
