<template>
  <div>
    <div v-for="clientMenu in shownClientsWithNavItems" :key="clientMenu.clientId" class="mt-4">
      <div v-if="clientMenu.items.length || inEditor">
        <div class="font-bold text-lg pl-2 mb-4">
          {{ clientMenu.username || 'Client Name' }}
        </div>
        <div
          v-whppt-list="{ data: clientMenu, addNew: addNewClientItem }"
          data-property="items"
          :class="{ 'py-4': inEditor }"
        >
          <div v-if="clientMenu.items.length">
            <div v-for="(item, index) in clientMenu.items" :key="index" class="my-1">
              <NavLinkGroup
                :item="item"
                :item-idx="index"
                :sub-items-open="openItemIdx === index"
                @openItem="setOpenItem"
              />
            </div>
          </div>
          <div v-if="clientMenu.items.length === 0 && inEditor" class="text-gray-400">Add Client Items Here</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { filter } from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';

import NavLinkGroup from './NavLinkGroup';

export default {
  name: 'PageNavigationClientContent',
  components: { NavLinkGroup },
  data: () => ({
    openItemIdx: undefined,
  }),
  computed: {
    ...mapState('whppt/site', ['nav']),
    ...mapState('whppt/config', ['domain']),
    ...mapState('whppt/security', ['authUser']),
    ...mapState('client', ['client']),
    ...mapGetters(['inEditor']),
    shownClientsWithNavItems() {
      console.log(
        '🚀 ~ file: ClientContent.vue ~ line 61 ~ shownClientsWithNavItems ~ this.nav.clientMenus',
        this.nav.clientMenus
      );

      if (this.authUser) return this.nav.clientMenus;
      if (this.client) return filter(this.nav.clientMenus, { clientId: this.client._id });
      return [];
    },
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState', 'setSelectedComponentState']),
    setOpenItem(itemIdx) {
      this.openItemIdx = this.openItemIdx === itemIdx ? undefined : itemIdx;
    },
    addNewClientItem() {
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
