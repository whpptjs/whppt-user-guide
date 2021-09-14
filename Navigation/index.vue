<template>
  <nav class="fixed w-full z-20 top-0 h-16 py-2 px-4 flex">
    <div class="container">
      <NuxtLink to="/" class="inline-block h-full">
        <img src="/whpptLogo.png" class="h-full" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
import { throttle, find } from 'lodash';
import { mapState } from 'vuex';
export default {
  name: 'NavigationBar',
  props: {
    compact: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      navVisible: true,
      scrollPadding: 128,
      scrollPosition: 0,
      scrollDirection: 'down',
      scrollTransparent: true,
    };
  },
  computed: {
    ...mapState('whppt/site', ['siteSettings']),
    ...mapState('whppt/page', ['page']),
    subNav() {
      if (!this.page) return;
      return find(this.siteSettings.brands, { id: this.page.brandId });
    },
  },

  mounted() {
    window.addEventListener('scroll', throttle(this.onScroll, 200));
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const top = document.body.scrollTop;

      window.scrollY > this.scrollPosition ? (this.scrollDirection = 'down') : (this.scrollDirection = 'up');
      this.scrollPosition = window.pageYOffset;

      switch (true) {
        case this.scrollPosition < top + this.scrollPadding:
          this.scrollTransparent = true;
          this.navVisible = true;
          break;
        case this.scrollDirection === 'down' && this.scrollPosition > top + this.scrollPadding:
          this.navVisible = false;
          this.scrollTransparent = true;
          break;
        case this.scrollDirection === 'up' && this.scrollPosition > top + this.scrollPadding:
          this.navVisible = true;
          this.scrollTransparent = false;
          break;
      }
    },
  },
};
</script>
