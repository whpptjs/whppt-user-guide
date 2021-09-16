<template>
  <div>
    <whppt-card title="General Infomation">
      <div class="flex">
        <whppt-input
          :id="`client-${client.id}-name-input`"
          v-model="client.name"
          label="Client Name"
          class="mb-4 w-1/2 mr-4"
        />
      </div>
    </whppt-card>
  </div>
</template>
<script>
import WhpptInput from '@whppt/nuxt/lib/components/ui/components/Input.vue';
import WhpptCard from '@whppt/nuxt/lib/components/ui/components/Card.vue';
export default {
  name: 'ClientEditor',
  components: {
    WhpptInput,
    WhpptCard,
  },
  props: { client: { type: Object, default: () => ({}) } },
  data() {
    return {};
  },
  methods: {},
};
</script>
