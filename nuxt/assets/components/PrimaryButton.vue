<template>
  <button class="bg-primary rounded-lg text-center font-bold px-8 py-2 text-lg text-white" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
};
</script>
