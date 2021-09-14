<template>
  <component :is="icon" v-bind="$attrs" class="inline" />
</template>

<script>
import ChevronDown from '~/assets/icons/ChevronDown';

export default {
  name: 'Icon',
  components: {
    ChevronDown,
  },
  props: {
    icon: { type: String, required: true },
  },
};
</script>
