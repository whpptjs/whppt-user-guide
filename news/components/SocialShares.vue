<template>
  <div>
    <div class="flex items-center">
      <div class="mr-8 uppercase text-xs tracking-label">Share</div>
      <div
        v-for="(social, index) in socials"
        :key="index"
        class="mr-4"
        @mouseover="hover = index"
        @mouseleave="hover = false"
      >
        <a
          :href="social.link + shareLocation"
          onclick="window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=550');return false;"
          target="_blank"
        >
          <!-- <icon
            :icon="social.icon"
            class="h-6 w-6 transition ease-in-out duration-300"
            :style="{ color: hover === index ? theme.secondary : '' }"
          /> -->
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SocialShares',
  data: () => ({
    hover: false,
    socials: [
      { label: 'Facebook', icon: 'Facebook', link: 'https://www.facebook.com/sharer/sharer.php?u=' },
      { label: 'Twitter', icon: 'Twitter', link: 'https://twitter.com/intent/tweet?url=' },
      { label: 'Email', icon: 'Email', link: 'mailto:' },
      { label: 'LinkedIn', icon: 'Linkedin', link: 'https://www.linkedin.com/shareArticle?mini=true&url=' },
    ],
  }),
  computed: {
    ...mapGetters(['theme']),
    shareLocation() {
      return window.location.href;
    },
  },
};
</script>
