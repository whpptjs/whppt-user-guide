<template>
  <component :is="icon" v-bind="$attrs" class="inline" />
</template>

<script>
import Play from '~/assets/icons/Play';
import ChevronDown from '~/assets/icons/ChevronDown';

export default {
  name: 'Icon',
  components: {
    Play,
    ChevronDown,
  },
  props: {
    icon: { type: String, required: true },
  },
};
</script>
