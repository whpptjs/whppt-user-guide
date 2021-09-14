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
              aspectRatio: 16 / 9,
            },
          })
        "
        class="aspect-ratio-16/9 relative"
        :class="{ 'bg-gray-200': !content.image.imageId }"
      >
        <img
          :key="content.image.imageId"
          v-lazy="$whppt.getImage(content.image.imageId, 1600, 900, content.image.desktop)"
          class="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    content: { type: Object, default: () => ({}) },
    container: { type: Boolean, default: true },
  },
};
</script>
