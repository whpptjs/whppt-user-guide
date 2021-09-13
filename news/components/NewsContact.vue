<template>
  <div>
    <div class="container flex">
      <div class="w-1/12" />
      <div class="w-10/12 border-white border-t-4 text-xs lg:text-lg">
        <div v-if="(content.text && content.text !== '<p></p>') || inEditor" class="w-full lg:flex py-8 lg:py-16">
          <div class="w-full lg:w-3/10">
            <div v-whppt-text="content" data-property="label" class="font-medium mr-8 mb-4 lg:mb-0">
              {{ content.label || 'For media comment' }}
            </div>
          </div>
          <div class="hidden lg:block w-1/10" />
          <div class="w-full lg:w-5/10">
            <div
              v-whppt-formatted-text="content"
              data-property="text"
              class="richText"
              v-html="content.text && content.text !== '<p></p>' ? content.text : 'Contact info...'"
            ></div>
          </div>
        </div>
      </div>

      <div class="w-1/12" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NewsContact',
  props: { content: { type: Object, default: () => ({}) } },
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
