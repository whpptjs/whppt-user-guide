<template>
  <div>
    <whppt-card :title="editingClient ? 'Edit a Client' : 'All Clients'">
      <client-editor v-if="editingClient" :client="editingClient" @closeEditor="editingClient = undefined" />
      <div v-else>
        <div class="flex justify-end mb-4">
          <whppt-button @click="addNewClient"> Add a New Client </whppt-button>
        </div>
        <whppt-table dense :items="clients" :headers="headers" hide-footer>
          <template v-slot:item.username="{ item }">
            <span>{{ item.username || 'No name yet' }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <div class="flex items-center justify-end">
              <whppt-button flat @click="editingClient = item">
                <edit />
              </whppt-button>
              <whppt-button flat @click="saveClient(item)">
                <save />
              </whppt-button>
              <whppt-button flat @click="publishClient(item)">
                <publish />
              </whppt-button>
              <whppt-button v-if="item.published" flat @click="unpublishClient(item._id)">
                <unpublish />
              </whppt-button>
              <whppt-button v-if="!item.published" flat @click="removeClient(item._id)">
                <trash />
              </whppt-button>
            </div>
          </template>
        </whppt-table>
      </div>
    </whppt-card>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import WhpptCard from '@whppt/nuxt/lib/components/ui/components/Card.vue';
import WhpptTable from '@whppt/nuxt/lib/components/ui/components/Table.vue';
import WhpptButton from '@whppt/nuxt/lib/components/ui/components/Button.vue';
import siteSettingsMixin from '@whppt/nuxt/lib/util/mixins/siteSettings';
import Edit from '@whppt/nuxt/lib/components/icons/Edit';
import Save from '@whppt/nuxt/lib/components/icons/Save';
import Publish from '@whppt/nuxt/lib/components/icons/Publish';
import Unpublish from '@whppt/nuxt/lib/components/icons/Unpublish';
import Trash from '@whppt/nuxt/lib/components/icons/Trash';

import ClientEditor from './ClientEditor';

export default {
  name: 'ClientSettings',
  components: {
    WhpptCard,
    WhpptTable,
    WhpptButton,
    Edit,
    Save,
    Publish,
    Unpublish,
    Trash,
    ClientEditor,
  },
  mixins: [siteSettingsMixin],
  data: () => ({
    clients: [],
    headers: [
      { text: 'Name', align: 'start', value: 'username' },
      { text: 'Actions', align: 'end', value: 'actions' },
    ],
    page: 1,
    perPage: 5,
    editingClient: undefined,
  }),
  computed: {
    ...mapState('whppt/site', ['nav']),
  },
  mounted() {
    this.loadClients();
  },
  methods: {
    loadClients() {
      return this.$axios.$get(`/api/client/loadClients`).then(clients => {
        this.clients = clients;
      });
    },
    addNewClient() {
      return this.$axios
        .$post(`/api/client/createClient`, {
          navId: this.nav._id,
        })
        .then(() => {
          this.$toast.global.editorSuccess('Client added');
          this.loadClients();
        });
    },
    saveClient(client) {
      return this.$axios
        .$post(`/api/client/saveClient`, {
          client,
          navId: this.nav._id,
        })
        .then(() => {
          this.$toast.global.editorSuccess('Client saved');
        });
    },
    publishClient(client) {
      return this.$axios
        .$post(`/api/client/publishClient`, {
          client,
        })
        .then(() => {
          this.$toast.global.editorSuccess('Client published');
          this.loadClients();
        });
    },
    unpublishClient(clientId) {
      return this.$axios
        .$post(`/api/client/unpublishClient`, {
          clientId,
        })
        .then(() => {
          this.$toast.global.editorSuccess('Client unpublished');
          this.loadClients();
        });
    },
    removeClient(clientId) {
      return this.$axios
        .$post(`/api/client/deleteClient`, {
          clientId,
          navId: this.nav._id,
        })
        .then(() => {
          this.$toast.global.editorSuccess('Client deleted');
          this.loadClients();
        });
    },
  },
};
</script>
