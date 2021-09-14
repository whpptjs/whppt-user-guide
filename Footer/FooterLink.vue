<template>
  <div class="py-1 hover:underline hover:text-primary transition duration-200 ease-in-out rounded-sm">
    <whppt-link v-whppt-link="link" :to="link">
      <div>
        {{ link.text || 'Link text' }}
      </div>
    </whppt-link>
  </div>
</template>

<script>
export default {
  name: 'FooterLink',
  props: {
    link: { type: Object, required: true },
  },
};
</script>
