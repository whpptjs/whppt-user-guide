<template>
  <div>
    <div class="font-bold text-lg pl-2 mb-4">Guide</div>
    <div v-whppt-list="{ data: nav, addNew: addNewSideItem }" data-property="side" :class="{ 'py-4': inEditor }">
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
      <div v-if="nav.side.length === 0 && inEditor">Add Items Here</div>
    </div>
    <client-content />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import NavLinkGroup from './NavLinkGroup';
import ClientContent from './ClientContent';

export default {
  name: 'PageNavigationContent',
  components: { NavLinkGroup, ClientContent },
  data: () => ({
    openItemIdx: undefined,
    clients: [],
  }),
  computed: {
    ...mapState('whppt/site', ['nav']),
    ...mapGetters(['inEditor']),
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState', 'setSelectedComponentState']),
    setOpenItem(itemIdx) {
      this.openItemIdx = this.openItemIdx === itemIdx ? undefined : itemIdx;
    },
    addNewSideItem() {
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
