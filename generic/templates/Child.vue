<template>
  <div class="relative mt-16 xl:mt-20 bg-green-100">
    <child-header :header="page.header" :slug="page.slug" />
    <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ChildHeader from '../headers/Child';

export default {
  name: 'ChildTemplate',
  components: { ChildHeader },
  props: { page: { type: Object, default: () => ({}) } },
  computed: {
    ...mapState('navigation', ['header']),
  },
};
</script>
