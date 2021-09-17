<template>
  <div class="h-full">
    <div class="block lg:hidden mt-24">
      <button @click="mobileShow = !mobileShow">
        <icon icon="Hamburger"></icon>
      </button>
      <div class="absolute inset-0 pb-4 z-2" :class="{ hidden: !mobileShow }">
        <div class="pt-2">
          <div class="flex justify-end items-center" @click="mobileShow = false">
            Close
            <icon icon="Close" class="ml-3"></icon>
          </div>

          <nav-content class="bg-white shadow-lg py-2 px-2"></nav-content>
        </div>
      </div>
    </div>
    <div v-sticky="stickyOptions" class="hidden lg:block">
      <nav-content></nav-content>
    </div>
  </div>
</template>

<script>
import NavContent from './Content';

export default {
  name: 'PageNavigation',
  components: { NavContent },
  data: () => ({
    mobileShow: false,
  }),
  created() {
    this.stickyOptions = {
      topSpacing: 96,
      resizeSensor: true,
    };
  },
};
</script>
