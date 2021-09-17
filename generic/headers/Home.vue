<template>
  <div>
    <div class="bg-gray-800">
      <div class="container py-12 text-white flex">
        <div class="w-1/12" />
        <div class="w-8/12">
          <div class="mr-4">
            <div v-whppt-text="header" data-property="title" class="text-3xl font-bold">
              {{ header.title || 'Title' }}
            </div>
            <div
              v-if="(header.description && header.description !== '<p></p>') || inEditor"
              v-whppt-rich-text="header"
              data-property="description"
              class="text-xl mt-4"
              v-html="header.description && header.description !== '<p></p>' ? header.description : 'Item text'"
            />
            <div class="flex mt-8">
              <whppt-link
                v-if="header.primaryLink.href || inEditor"
                v-whppt-link="header.primaryLink"
                :to="header.primaryLink"
              >
                <div class="bg-primary rounded-lg text-center font-bold px-8 py-2 text-lg">
                  {{ header.primaryLink.text || 'Primary button' }}
                </div>
              </whppt-link>
            </div>
          </div>
        </div>
        <div class="w-2/12">
          <div
            v-whppt-image="header"
            :data-sizes="
              JSON.stringify({
                desktop: {
                  width: 1024,
                  height: 768,
                  quality: 2,
                },
              })
            "
            class="aspect-ratio-4/3 relative"
            :class="{ 'bg-gray-200': !header.image.imageId || inEditor }"
          >
            <img
              v-if="header.image.imageId"
              v-lazy="$whppt.getImage(header.image.imageId, 1024, 900, { crop: header.image.desktop })"
              class="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
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
