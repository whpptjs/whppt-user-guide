<template>
  <div class="relative mt-16 lg:mt-20" :style="`background: ${theme.background}`">
    <news-article-header :header="page.header" :slug="page.slug" :page="page" @read-page="readPage" />
    <div v-if="inEditor" class="container flex">
      <div class="w-1/12" />
      <div v-sg-tags="page" data-property="serviceGroupTags" class="italic w-10/12">Edit Service Group Tags</div>
      <div class="w-1/12" />
    </div>
    <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents" />
    <news-contact :content="page.contactInfo" />
    <!-- <div class="py-16 lg:py-32">
      <news-carousel :content="page.newsCarousel" />
    </div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import NewsArticleHeader from '../headers/NewsArticle';
import NewsContact from '../components/NewsContact';
import ttsMixin from '~~/mixins/ttsMixin';

export default {
  name: 'GenericTemplate',
  components: { NewsArticleHeader, NewsContact },
  mixins: [ttsMixin],
  props: { page: { type: Object, default: () => ({}) } },

  computed: {
    ...mapGetters(['inEditor', 'theme']),
    ...mapState('navigation', ['header']),
  },
  methods: {
    readPage() {
      return this.speak({
        headerText: this.page.header.title,
        descriptionText: this.page.header.description,
        contents: this.page.contents,
      });
    },
  },
};
</script>
