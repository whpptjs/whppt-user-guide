<template>
  <component :is="icon" v-bind="$attrs" class="inline" />
</template>

<script>
import Play from '~/assets/icons/Play';

export default {
  name: 'Icon',
  components: {
    Play,
  },
  props: {
    icon: { type: String, required: true },
  },
};
</script>
