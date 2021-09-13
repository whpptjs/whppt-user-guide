<template>
  <div>
    <div class="relative bg-white h-65vh">
      <div class="absolute inset-0 flex flex-col justify-end sm:justify-center container z-1 mb-24 lg:mb-16">
        <div class="flex mb-8 sm:mb-0 mt-4 lg:mt-12">
          <div class="w-1/12" />
          <div class="w-10/12 sm:w-9/12">
            <div
              v-whppt-formatted-text="header"
              data-property="title"
              class="text-2xl lg:text-3xl text-green-500 tracking-tight font-light richText"
              v-html="header.title && header.title !== '<p></p>' ? header.title : 'Page Header'"
            ></div>
            <div
              v-if="(header.description && header.description !== '<p></p>') || inEditor"
              v-whppt-formatted-text="header"
              data-property="description"
              class="
                text-base
                lg:text-xl
                xl:text-2xl
                text-gray-600
                mt-4
                lg:mt-8
                font-light
                tracking-tight
                header-rich-text
              "
              v-html="header.description && header.description !== '<p></p>' ? header.description : 'Page Description'"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ContactHeader',
  props: {
    header: { type: Object, default: () => ({}) },
    slug: { type: String, default: '' },
  },
  data: () => ({ synth: {}, msSpeechConfig: {}, msAudioConfig: {}, msSynth: {}, browser: {} }),
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
