<template>
  <div>
    <div v-for="clientItem in shownClientsWithNavItems" :key="clientItem.clientId" class="mt-4">
      <div v-if="clientItem.items.length || inEditor">
        <div class="border-t border-gray-100 pt-4 pl-2">
          {{ clientItem.username }}
        </div>
        <div
          v-whppt-list="{ data: clientItem, addNew: addNewClientItem }"
          data-property="items"
          :class="{ 'py-4': inEditor }"
        >
          <div v-if="clientItem.items.length">
            <div v-for="(item, index) in clientItem.items" :key="index" class="my-1">
              <NavLinkGroup
                :item="item"
                :item-idx="index"
                :sub-items-open="openItemIdx === index"
                @openItem="setOpenItem"
              />
            </div>
          </div>
          <div v-if="clientItem.items.length === 0 && inEditor" class="text-gray-400">Add Client Items Here</div>
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
    clients: [],
    nav: {
      clients: [
        {
          clientId: '614283b8ff47f15d19146b77',
          username: 'uc',
          items: [
            {
              link: { type: 'page' },
              subItems: [],
            },
          ],
        },
      ],
    },
  }),
  computed: {
    // ...mapState('whppt/site', ['nav']),
    ...mapState('whppt/config', ['domain']),
    ...mapState('whppt/security', ['authUser']),
    ...mapState('client', ['client']),
    ...mapGetters(['inEditor']),
    shownClientsWithNavItems() {
      if (this.authUser) return this.nav.clients;
      if (this.client) return filter(this.nav.clients, { clientId: this.client._id });
      return [];
    },
  },
  created() {
    this.loadClients();
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState', 'setSelectedComponentState']),
    setOpenItem(itemIdx) {
      this.openItemIdx = this.openItemIdx === itemIdx ? undefined : itemIdx;
    },
    loadClients() {
      return this.$axios.$get(`/api/client/loadClientsForSelector?domainId=${this.domain._id}`).then(clients => {
        this.clients = clients;
      });
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
