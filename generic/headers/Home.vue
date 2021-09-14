<template>
  <div>
    <div class="bg-gray-800">
      <div class="container py-12 text-white flex">
        <div class="w-1/12" />
        <div class="w-8/12">
          <div v-whppt-text="header" data-property="title" class="text-3xl font-bold">
            {{ header.title || 'Title' }}
          </div>
          <button class="bg-primary rounded-lg text-center font-bold px-8 py-2 text-lg mt-8">Get Started</button>
        </div>
        <div class="w-2/12"><img src="/whpptLogo.png" class="h-32" /></div>
        <div class="w-1/12" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeHeader',
  props: {
    header: { type: Object, default: () => ({}) },
  },
  data: () => ({ innerWidth: 1025 }),
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
