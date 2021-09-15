<template>
  <section :class="{ container }">
    <div class="xl:w-2/3 w-full">
      <div
        v-whppt-image="content"
        :data-sizes="
          JSON.stringify({
            desktop: {
              width: 1600,
              height: 900,
              quality: 2,
            },
          })
        "
        :class="{ 'bg-gray-200 aspect-ratio-16/9': !content.image.imageId }"
      >
        <img
          v-if="content.image.imageId"
          :key="content.image.imageId"
          v-lazy="$whppt.getImage(content.image.imageId, '', '', { crop: content.image.desktop })"
          class="w-full"
        />
      </div>
      <div
        v-if="content.caption || inEditor"
        v-whppt-text="content"
        data-property="caption"
        class="italic mt-2 text-sm"
      >
        {{ content.caption || 'Caption' }}
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ImageComponent',
  props: {
    content: { type: Object, default: () => ({}) },
    container: { type: Boolean, default: true },
  },
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
