<template>
  <section :class="{ container }">
    <div class="border-l-8 bg-gray-100 px-6 py-4" :class="content.warning ? 'border-red-500' : 'border-primary'">
      <div v-whppt-text="content" data-property="title" class="font-bold">
        {{ content.title || content.warning ? 'Warning!' : 'Tip' }}
      </div>
      <div
        v-if="(content.text && content.text !== '<p></p>') || inEditor"
        v-whppt-rich-text="content"
        data-property="text"
        class="mt-4"
        v-html="content.text && content.text !== '<p></p>' ? content.text : 'Tip text'"
      />
      <button
        v-if="inEditor"
        v-checkbox="content"
        data-property="warning"
        label="Is a warning"
        class="mt-4 italic text-sm"
      >
        Toggle Warning
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TipComponent',
  props: {
    content: { type: Object, default: () => ({}) },
    container: { type: Boolean, default: true },
  },
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
