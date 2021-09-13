<template>
  <div>
    <w-editor-app class="overflow-hidden">
      <div id="layout" class="relative">
        <Nuxt />
      </div>
    </w-editor-app>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState('whppt/page', ['page']),
  },
};
</script>
