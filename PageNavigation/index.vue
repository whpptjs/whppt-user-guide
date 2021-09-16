<template>
  <div v-sticky="stickyOptions">
    <div class="pr-2 pb-4 mt-24 relative">
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
          </div>
        </div>
        <div v-else>Add Items Here</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import NavLinkGroup from './NavLinkGroup';

export default {
  name: 'PageNavigation',
  components: { NavLinkGroup },
  data: () => ({
    openItemIdx: undefined,
  }),
  computed: {
    ...mapState('whppt/site', ['nav']),
    ...mapGetters(['inEditor']),
  },
  created() {
    this.stickyOptions = {
      topSpacing: 0,
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
