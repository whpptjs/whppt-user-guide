<template>
  <div>
    <div class="block lg:hidden my-8 container">
      <button @click="mobileShow = !mobileShow">
        <icon icon="Hamburger"></icon>
      </button>
      <div v-if="mobileShow" class="absolute inset-0 z-2 container">
        <div class="pt-2">
          <button class="ml-auto flex justify-end items-center" @click="mobileShow = false">
            Close
            <icon icon="Close" class="ml-3"></icon>
          </button>
          <nav-content
            class="bg-white shadow-lg overflow-auto h-50vh p-4"
            v-on-clickaway="() => (mobileShow = false)"
          />
        </div>
      </div>
    </div>
    <div class="hidden lg:block overflow-auto h-90vh px-4 py-12">
      <nav-content />
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

import NavContent from './Content';

export default {
  name: 'PageNavigation',
  mixins: [clickaway],
  components: { NavContent },
  data: () => ({
    mobileShow: false,
  }),
};
</script>
