<template>
  <div class="px-2 pb-8">
    <div v-whppt-list="{ data: nav, addNew }" data-property="items" :class="{ 'py-4': inEditor }">
      <div v-if="nav.items.length">
        <div v-for="(item, index) in nav.items" :key="index" class="my-1">
          <NavLink v-if="item.link.href" :item="item" />
          <NavLinkGroup
            v-else
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
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import NavLink from './NavLink.vue';
import NavLinkGroup from './NavLinkGroup.vue';

export default {
  name: 'PageNavigation',
  components: { NavLink, NavLinkGroup },
  data: () => ({
    openItemIdx: undefined,
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
        path: 'items',
        value: {
          link: { type: 'page' },
          subItems: [],
        },
      });
    },
  },
};
</script>
