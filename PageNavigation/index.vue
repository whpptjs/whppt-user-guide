<template>
  <div class="z-2">
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
          </div>

          <nav-content></nav-content>
        </div>
      </div>
    </div>
    <div class="hidden lg:block">
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
