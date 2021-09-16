<template>
<<<<<<< HEAD
  <div>
    <div class="block lg:hidden">
      <div class="block mt-24">
        <div @click="mobileShow = true">
          <icon icon="Hamburger"></icon>
        </div>
      </div>
      <div class="absolute inset-0 px-10 pb-4 bg-white z-2" :class="{ hidden: !mobileShow }">
        <div class="pt-2">
          <div class="pb-5 flex justify-end items-center" @click="mobileShow = false">
            Close
            <icon icon="Close" class="ml-3"></icon>
=======
  <div v-sticky="stickyOptions" class="w-full">
    <div class="relative">
      <div class="font-bold text-lg pl-2 mb-4">Guide</div>
      <div v-whppt-list="{ data: nav, addNew }" data-property="side" :class="{ 'py-4': inEditor }">
        <div v-if="nav.side.length">
          <div v-for="(item, index) in nav.side" :key="index" class="my-1">
            <NavLinkGroup
              :item="item"
              :item-idx="index"
              :sub-items-open="openItemIdx === index"
              @openItem="setOpenItem"
            />
>>>>>>> 0acf97f626771ac241cf4e73e215e0388a90c86d
          </div>

          <nav-content></nav-content>
        </div>
      </div>
    </div>
    <div v-sticky="stickyOptions" class="hidden lg:block">
      <nav-content></nav-content>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import NavContent from './Content';

export default {
  name: 'PageNavigation',
  components: { NavContent },
  data: () => ({
    openItemIdx: undefined,
    mobileShow: false,
  }),
  computed: {
    ...mapState('whppt/site', ['nav']),
    ...mapGetters(['inEditor']),
  },
  created() {
    this.stickyOptions = {
      topSpacing: 96,
      resizeSensor: true,
    };
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    setOpenItem(itemIdx) {
      this.openItemIdx = this.openItemIdx === itemIdx ? undefined : itemIdx;
    },
    addNew() {
      this.pushSelectedComponentState({
        path: 'side',
        value: {
          link: { type: 'page' },
          subItems: [],
        },
      });
    },
  },
};
</script>
