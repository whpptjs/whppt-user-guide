<template>
  <div
    class="py-1 px-2 text-gray-500 hover:bg-gray-100 transition duration-200 ease-in-out rounded-sm"
    :class="{ 'bg-gray-100 text-primary': isActive }"
  >
    {{ item.link.text || 'Link text' }}
  </div>
</template>

<script>
export default {
  name: 'NavigationButton',
  props: {
    item: { type: Object, required: true },
  },
  computed: {
    isActive() {
      return this.item.link.href && this.$route.path === this.item.link.href;
    },
  },
};
</script>
