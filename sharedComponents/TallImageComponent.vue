<template>
  <section :class="{ container }">
    <div class="flex">
      <div class="xl:w-1/3 w-full flex-shrink-0">
        <div
          v-whppt-image="content"
          :data-sizes="
            JSON.stringify({
              desktop: {
                width: 768,
                height: 1024,
                quality: 2,
              },
            })
          "
          :class="{ 'bg-gray-200 aspect-ratio-3/4': !content.image.imageId }"
        >
          <img
            v-if="content.image.imageId"
            :key="content.image.imageId"
            v-lazy="$whppt.getImage(content.image.imageId, '', '', { crop: content.image.desktop })"
            class="w-full"
          />
        </div>
      </div>
      <div v-if="content.caption || inEditor" v-whppt-text="content" data-property="caption" class="italic ml-4">
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
