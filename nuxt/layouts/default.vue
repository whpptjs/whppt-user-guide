<template>
  <div>
    <w-editor-app class="overflow-hidden">
      <div id="layout" class="relative">
        <video-player v-if="showVideoPlayer" />
        <Nuxt />
      </div>
    </w-editor-app>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import VideoPlayer from '~~/VideoPlayer';

export default {
  name: 'DefaultLayout',
  components: { VideoPlayer },
  computed: {
    ...mapState('whppt/page', ['page']),
    ...mapGetters('videoPlayer', ['showVideoPlayer']),
  },
  mounted() {
    this.loadMe();
  },
  methods: {
    ...mapActions('client', ['loadMe']),
  },
};
</script>
