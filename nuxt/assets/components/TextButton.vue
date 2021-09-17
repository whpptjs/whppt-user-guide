<template>
  <button class="underline" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TextButton',
};
</script>
