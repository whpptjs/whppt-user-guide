<template>
  <div
    class="z-40 inset-0 fixed flex quick-transition items-center bg-gray-900 bg-opacity-75"
    @keyup.esc="closeVideoPlayer"
    @click="closeVideoPlayer"
  >
    <div class="bg-white relative m-auto w-full md:w-4/5" @click.stop>
      <div class="aspect-ratio-16/9 relative w-full">
        <div class="w-full h-full absolute inset-0 bg-black">
          <iframe
            v-if="!!currentVideoId"
            :src="`https://www.youtube-nocookie.com/embed/${currentVideoId}?rel=0&color=white&modestbranding=1&origin=${$config.baseUrl}&autoplay=1`"
            class="w-full h-full absolute inset-0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
      <button
        aria-label="close video player"
        class="absolute right-0 top-0 mr-4 md:-mr-8 -mt-10"
        @click="closeVideoPlayer"
      >
        <icon icon="Close" class="text-white w-8 h-8" />
      </button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'VideoPlayer',
  computed: {
    ...mapGetters('videoPlayer', ['showVideoPlayer']),
    ...mapState('videoPlayer', ['currentVideoId', 'currentVideoType']),
  },
  methods: {
    ...mapMutations('videoPlayer', ['closeVideoPlayer', 'selectVideo']),
  },
};
</script>
