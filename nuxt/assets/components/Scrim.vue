<template>
  <div :style="`background: ${gradient};`" class="absolute inset-0"></div>
</template>

<script>
export default {
  name: 'Scrim',
  props: {
    gradient: {
      type: String,
      default: () => 'rgba(16,16,16,.50)',
    },
  },
};
</script>
