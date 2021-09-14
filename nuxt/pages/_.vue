<template>
  <div class="relative">
    <site-nav />
    <component :is="page.template" v-if="page" :page="page"></component>
    <site-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import meta from '~/meta';

import Home from '~~/generic/templates/Home';
import Generic from '~~/generic/templates/Generic';
import Child from '~~/generic/templates/Child';
import Contact from '~~/generic/templates/Contact';
import SiteNav from '~~/Navigation';
import SiteFooter from '~~/Footer';

export default {
  name: 'MainPage',
  components: { Generic, Child, Home, Contact, SiteNav, SiteFooter },
  mixins: [meta],
  scrollToTop: true,
  transition: {
    name: 'page',
  },
  asyncData({ params, store, error }) {
    if (params.pathMatch === 'page/loadPage') return;
    return Promise.all([
      store.dispatch('whppt/page/loadPage', { slug: params.pathMatch, pageType: 'page', collection: 'pages' }),
      store.dispatch('whppt/site/loadSiteSettings'),
    ]).catch(err => {
      error({
        statusCode: (err.response && err.response.status) || 500,
        message: (err.response && err.response.statusText) || 'Unknown Error',
        stack: err.stack,
      });
    });
  },
  computed: {
    ...mapState('whppt/page', ['page']),
    ...mapState('whppt/site', ['siteSettings']),
  },
};
</script>
