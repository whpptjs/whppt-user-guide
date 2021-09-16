<template>
  <component :is="icon" v-bind="$attrs" class="inline" />
</template>

<script>
import Play from '~/assets/icons/Play';
import ChevronDown from '~/assets/icons/ChevronDown';
import Close from '~/assets/icons/Close';
import Hamburger from '~/assets/icons/Hamburger';

export default {
  name: 'Icon',
  components: {
    Play,
    ChevronDown,
    Hamburger,
    Close,
  },
  props: {
    icon: { type: String, required: true },
  },
};
</script>
