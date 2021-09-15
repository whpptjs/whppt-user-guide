<template>
  <div>
    <div class="mx-12">
      <div
        v-whppt-image="item"
        :data-sizes="
          JSON.stringify({
            desktop: {
              width: 900,
              height: 900,
              quality: 2,
            },
          })
        "
        class="aspect-ratio-square relative"
        :class="{ 'bg-gray-200': !item.image.imageId || inEditor }"
      >
        <img
          v-if="item.image.imageId"
          v-lazy="$whppt.getImage(item.image.imageId, '', '', { crop: item.image.desktop })"
          class="absolute inset-0 w-full h-full"
        />
      </div>
      <div v-whppt-text="item" data-property="title" class="mt-4 text-lg font-bold text-center">
        {{ item.title || 'Item Title' }}
      </div>
    </div>
    <div
      v-if="(item.text && item.text !== '<p></p>') || inEditor"
      v-whppt-formatted-text="item"
      data-property="text"
      class="mt-4 text-center"
      v-html="item.text && item.text !== '<p></p>' ? item.text : 'Item text'"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Block',
  props: { item: { type: Object, required: true } },
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
