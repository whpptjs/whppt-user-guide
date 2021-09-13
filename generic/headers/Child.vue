<template>
  <div>
    <div class="bg-white h-65vh">
      <div class="flex flex-col justify-between container h-full">
        <div class="flex relative items-end sm:items-center h-full sm:mb-8 mb-16 mt-4 lg:mt-12">
          <div class="w-1/12" />
          <div class="w-10/12 sm:w-9/12 z-1">
            <div
              v-whppt-formatted-text="header"
              data-property="title"
              class="text-lg lg:text-3xl font-light richText"
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
  name: 'ChildHeader',
  props: {
    header: { type: Object, default: () => ({}) },
    slug: { type: String, default: '' },
  },
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
