<template>
  <component :is="icon" v-bind="$attrs" class="inline" />
</template>

<script>
import Check from '~/assets/icons/Check';
import ChevronLeft from '~/assets/icons/ChevronLeft';
import ChevronRight from '~/assets/icons/ChevronRight';
import ChevronDown from '~/assets/icons/ChevronDown';
import Close from '~/assets/icons/Close';
import Hamburger from '~/assets/icons/Hamburger';
import Play from '~/assets/icons/Play';

export default {
  name: 'Icon',
  components: {
    Check,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Close,
    Hamburger,
    Play,
  },
  props: {
    icon: { type: String, required: true },
  },
};
</script>
