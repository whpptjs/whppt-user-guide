<template>
  <nav
    class="fixed w-full z-20 top-0 h-16 py-2 flex bg-white shadow"
    :class="[!navVisible ? 'nav-hidden' : 'nav-visible']"
  >
    <div class="px-6 flex items-center w-full">
      <nuxt-link to="/" class="inline-flex h-full items-center">
        <img src="/whpptLogo.png" class="h-full" />
        <span class="ml-2 font-bold text-lg">Whppt</span>
      </nuxt-link>
      <div
        v-whppt-list="{ data: nav, addNew }"
        data-property="top"
        class="ml-12 font-bold"
        :class="{ 'p-2': inEditor }"
      >
        <div v-if="nav.top.length > 0" class="flex items-center">
          <whppt-link
            v-whppt-link="item"
            v-for="(item, index) in nav.top"
            :key="index"
            :to="item"
            class="mr-8 quick-transition text-gray-800 hover:text-black"
          >
            {{ item.text || 'Link Text' }}
          </whppt-link>
        </div>
        <div v-if="nav.top.length === 0 && inEditor">Add Nav Items Here</div>
      </div>
      <div v-if="loadedClient" class="ml-auto">
        <div v-if="client" class="flex items-center">
          <User />
          <TextButton v-if="!authUser" class="ml-4" @click="logout()">Logout</TextButton>
        </div>
        <PrimaryButton v-else @click="$router.push('/login')">Login</PrimaryButton>
      </div>
    </div>
  </nav>
</template>

<script>
import { throttle } from 'lodash';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';

import User from '~/assets/components/User';

export default {
  name: 'NavigationBar',
  components: { User },
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
  computed: {
    ...mapState('whppt/site', ['nav']),
    ...mapState('whppt/security', ['authUser']),
    ...mapGetters(['inEditor']),
    ...mapState('client', ['client', 'loadedClient']),
  },
  mounted() {
    window.addEventListener('scroll', throttle(this.onScroll, 200));
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    ...mapMutations('client', ['logout_user']),
    addNew() {
      this.pushSelectedComponentState({
        path: 'top',
        value: {
          type: 'page',
          href: '',
          text: '',
        },
      });
    },
    logout() {
      this.$router.push('/');
      this.logout_user();
    },
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
