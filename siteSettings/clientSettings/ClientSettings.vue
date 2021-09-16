<template>
  <div>
    <client-editor v-if="editingClient" :client="editingClient" />
    <whppt-card title="All Clients" v-else>
      <div class="flex justify-end mb-4">
        <whppt-button @click="addNewClient"> Add a New Client </whppt-button>
      </div>
      <whppt-table dense :items="siteSettings.clients" :headers="headers" hide-footer>
        <template v-slot:item.name="{ item }">
          <span>{{ item.name || 'No name yet' }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <div class="flex items-center justify-end">
            <whppt-button flat @click="editingClient = item">
              <edit />
            </whppt-button>
            <whppt-button flat @click="removeClient(item)">
              <trash />
            </whppt-button>
          </div>
        </template>
      </whppt-table>
    </whppt-card>
    <whppt-card>
      <div class="flex justify-between">
        <whppt-button v-if="editingClient" class="mr-4" @click="editingClient = undefined"> Back </whppt-button>
        <whppt-button @click="saveSettings(siteSettings)"> Save </whppt-button>
      </div>
    </whppt-card>
  </div>
</template>
<script>
import { filter } from 'lodash';
import WhpptCard from '@whppt/nuxt/lib/components/ui/components/Card.vue';
import WhpptTable from '@whppt/nuxt/lib/components/ui/components/Table.vue';
import WhpptButton from '@whppt/nuxt/lib/components/ui/components/Button.vue';
import siteSettingsMixin from '@whppt/nuxt/lib/util/mixins/siteSettings';
import Edit from '@whppt/nuxt/lib/components/icons/Edit';
import Trash from '@whppt/nuxt/lib/components/icons/Trash';
import uniqid from 'uniqid';

import ClientEditor from './ClientEditor';

export default {
  name: 'ClientSettings',
  components: {
    WhpptCard,
    WhpptTable,
    WhpptButton,
    Edit,
    Trash,
    ClientEditor,
  },
  mixins: [siteSettingsMixin],
  data: () => ({
    siteSettings: {
      clients: [],
    },
    page: 1,
    perPage: 5,
    editingClient: undefined,
  }),
  created() {
    if (this.settings && this.settings.clients) this.siteSettings.clients = this.settings.clients;

    this.headers = [
      { text: 'Name', align: 'start', value: 'name' },
      { text: 'Actions', align: 'end', value: 'actions' },
    ];
  },
  methods: {
    addNewClient() {
      const id = uniqid.process();
      this.siteSettings.clients.unshift({
        id,
        username: '',
      });
    },
    removeClient(item) {
      this.siteSettings.clients = filter(this.siteSettings.clients, b => b.id !== item.id);
    },
  },
};
</script>
