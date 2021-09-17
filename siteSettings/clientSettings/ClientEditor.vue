<template>
  <div>
    <div class="flex">
      <whppt-input
        :id="`client-${client.id}-name-input`"
        v-model="client.username"
        label="Client Name"
        class="mb-4 w-1/2 mr-4"
      />
    </div>
    <div class="flex justify-end">
      <whppt-button class="mr-4" @click="$emit('closeEditor')"> Ok </whppt-button>
    </div>
  </div>
</template>
<script>
import WhpptInput from '@whppt/nuxt/lib/components/ui/components/Input.vue';
import WhpptButton from '@whppt/nuxt/lib/components/ui/components/Button.vue';

export default {
  name: 'ClientEditor',
  components: {
    WhpptInput,
    WhpptButton,
  },
  props: { client: { type: Object, default: () => ({}) } },
  data() {
    return {};
  },
  methods: {},
};
</script>
