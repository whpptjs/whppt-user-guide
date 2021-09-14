<template>
  <div class="relative">
    <site-nav />
    <div class="flex mt-16">
      <div class="w-3/12 border-r border-gray-200">
        <page-navigation />
      </div>
      <div class="w-9/12 container">
        <component :is="page.template" v-if="page" :page="page"></component>
      </div>
    </div>
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
import PageNavigation from '~~/PageNavigation';
import SiteFooter from '~~/Footer';

export default {
  name: 'MainPage',
  components: { Generic, Child, Home, Contact, SiteNav, PageNavigation, SiteFooter },
  mixins: [meta],
  scrollToTop: true,
  transition: {
    name: 'page',
  },
  asyncData({ params, store, error, app: { $whppt } }) {
    if (params.pathMatch === 'page/loadPage') return;
    return (
      Promise.all([
        store.dispatch('whppt/page/loadPage', { slug: params.pathMatch, pageType: 'page', collection: 'pages' }),
        store.dispatch('whppt/site/loadSiteSettings'),
      ])
        // .then(([page, siteSettings]) => {
        //   return { page, siteSettings };
        // })
        .catch(err => {
          error({
            statusCode: (err.response && err.response.status) || 500,
            message: (err.response && err.response.statusText) || 'Unknown Error',
            stack: err.stack,
          });
        })
    );
  },
  computed: {
    ...mapState('whppt/page', ['page']),
    ...mapState('whppt/site', ['siteSettings']),
  },
};
</script>
