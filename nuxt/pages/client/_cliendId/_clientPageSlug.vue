<template>
  <div class="relative text-text">
    <site-nav />
    <div class="min-h-screen flex flex-col justify-between">
      <Generic v-if="page" :page="page" />
      <site-footer />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import meta from '~/meta';

import Generic from '~~/generic/templates/Generic';
import SiteNav from '~~/Navigation';
import SiteFooter from '~~/Footer';

export default {
  name: 'MainPage',
  components: { Generic, SiteNav, SiteFooter },
  mixins: [meta],
  scrollToTop: true,
  transition: {
    name: 'page',
  },
  asyncData({ params, store, error }) {
    if (params.pathMatch === 'page/loadPage') return;
    return Promise.all([
      store.dispatch('whppt/page/loadPage', {
        slug: `client/${params.cliendId}/${params.clientPageSlug}`,
        pageType: 'clientPage',
      }),
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
