<template>
  <section :class="{ container }">
    <div class="flex">
      <div class="w-1/3 flex-shrink-0">
        <div
          v-whppt-image="content"
          :data-sizes="
            JSON.stringify({
              desktop: {
                width: 768,
                height: 1024,
                quality: 2,
                aspectRatio: 768 / 1024,
              },
            })
          "
          class="aspect-ratio-3/4 relative"
          :class="{ 'bg-gray-200': !content.image.imageId || inEditor }"
        >
          <img
            v-if="content.image.imageId"
            :key="content.image.imageId"
            v-lazy="$whppt.getImage(content.image.imageId, '', '', { crop: content.image.desktop })"
            class="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      <div
        v-if="content.caption || inEditor"
        v-whppt-text="content"
        data-property="caption"
        class="italic ml-4 text-sm"
      >
        {{ content.caption || 'Caption' }}
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TallImageComponent',
  props: {
    content: { type: Object, default: () => ({}) },
    container: { type: Boolean, default: true },
  },
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
