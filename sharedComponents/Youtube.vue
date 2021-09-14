<template>
  <section :class="{ container }">
    <div class="w-full">
      <div
        class="aspect-ratio-16/9 relative"
        :class="{
          'cursor-pointer': content.videoId,
          'bg-gray-300': !content.videoId,
        }"
        @click="openVideo"
      >
        <img
          v-if="content.videoId"
          v-lazy="`https://img.youtube.com/vi/${content.videoId}/maxresdefault.jpg`"
          class="absolute inset-0 w-full h-full"
        />
        <scrim v-if="content.videoId" />
        <button
          v-if="content.videoId"
          aria-label="Play Video"
          class="absolute inset-0 flex items-center justify-center w-full"
        >
          <icon icon="Play" class="text-white w-8 h-8 md:w-12 md:h-12" />
        </button>
        <div
          v-if="inEditor"
          v-whppt-text="content"
          data-property="videoId"
          class="absolute top-0 italic p-4 text-white bg-gray-900"
        >
          Setup a video
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'YoutubeVideo',
  props: {
    content: { type: Object, default: () => ({}) },
    container: { type: Boolean, default: true },
  },
  computed: {
    ...mapGetters(['inEditor']),
    ...mapGetters('videoPlayer', ['showVideoPlayer']),
  },
  methods: {
    ...mapMutations('videoPlayer', ['playVideo']),
    openVideo() {
      if (this.content.videoId && !this.inEditor) this.playVideo(this.content.videoId);
    },
  },
};
</script>
