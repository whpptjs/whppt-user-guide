<template>
  <div>
    <whppt-select
      id="clientSelector"
      v-model="page.clientId"
      :items="clients"
      label="Client"
      item-text="username"
      item-value="_id"
    >
    </whppt-select>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import WhpptSelect from '@whppt/nuxt/lib/components/ui/components/Select.vue';

export default {
  name: 'ClientSelector',
  components: { WhpptSelect },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      clients: [],
    };
  },
  computed: {
    ...mapState('whppt/config', ['domain']),
  },
  mounted() {
    this.loadClients();
  },
  methods: {
    loadClients() {
      return this.$axios.$get(`/api/client/loadClientsForSelector?domainId=${this.domain._id}`).then(clients => {
        this.clients = clients;
      });
    },
  },
};
</script>
