<template>
  <nav
    class="fixed w-full z-20 top-0 h-16 py-2 px-4 flex bg-white shadow"
    :class="[!navVisible ? 'nav-hidden' : 'nav-visible']"
  >
    <div class="container">
      <NuxtLink to="/" class="inline-block h-full">
        <img src="/whpptLogo.png" class="h-full" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
import { throttle } from 'lodash';
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
      scrollPadding: 56,
      scrollPosition: 0,
      scrollDirection: 'down',
      scrollTransparent: true,
    };
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

<style scoped>
.nav-visible {
  transition: 0.2s ease;
  opacity: 1;
}

.nav-hidden {
  transition-delay: 1s, 0s;
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  opacity: 0;
  transform: translateY(-100%);
}
</style>
