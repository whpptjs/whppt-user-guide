<template>
  <div>
    <div class="relative bg-white">
      <div class="h-12">
        <!-- Banner spacer -->
      </div>
      <div class="flex flex-col justify-center container relative my-12">
        <div class="flex z-1">
          <div class="w-1/12 lg:w-2/12" />
          <div class="w-10/12 lg:w-8/12 lg:text-center">
            <div
              v-if="newsTags || inEditor"
              :key="`news-tags-${inEditor}`"
              v-news-tags="page"
              data-property="newsTags"
              class="text-sm text-gray-900 uppercase tracking-label"
              :class="{ 'py-4': inEditor }"
            >
              {{ newsTags || 'Add News Tags' }}
            </div>
            <div
              v-whppt-formatted-text="header"
              data-property="title"
              class="text-3xl lg:text-5xl mt-4 lg:mt-8 newsHeader tracking-tight richText"
              v-html="header.title && header.title !== '<p></p>' ? header.title : 'News Title'"
            ></div>
            <div
              v-if="formattedDate || inEditor"
              v-publish-date="header"
              data-property="datePublished"
              class="text-sm text-gray-900 uppercase tracking-label my-4 lg:my-8"
            >
              {{ formattedDate || 'Date Published' }}
            </div>
            <div v-if="inEditor" v-illustration="header" data-property="illustration" class="italic text-gray-500 mt-8">
              Edit Illustration
            </div>
            <div v-if="inEditor" v-news-category="page" data-property="category" class="italic text-gray-500 mt-2">
              Change Category
            </div>
          </div>
          <div class="w-1/12 lg:w-2/12" />
        </div>
      </div>
      <div class="lg:hidden absolute w-full z-1 top-0 right-0 container">
        <div class="w-full flex justify-end items-center py-2">
          <text-to-speech-button class="flex items-center" color="#0DB02B" @click="$emit('read-page')" />
        </div>
      </div>
      <div class="w-full z-1 bottom-0">
        <div class="container flex lg:mb-8 pb-8">
          <div class="w-1/12 lg:hidden" />
          <div class="w-10/12 lg:w-11/12 flex items-center">
            <breadcrumb :breadcrumb="breadcrumb" class="text-sm lg:text-base"></breadcrumb>
          </div>
          <div class="w-1/12 lg:hidden" />
          <text-to-speech-button
            class="hidden lg:flex items-center"
            @click="$emit('read-page')"
          ></text-to-speech-button>
        </div>
      </div>
    </div>
    <div class="flex pt-12 pb-16 border-b-4 border-white container">
      <div class="w-1/12" />
      <div class="w-10/12 font-medium lg:font-normal lg:text-gray-600 text-lg lg:text-2xl">
        <div
          v-whppt-formatted-text="header"
          data-property="description"
          class="richText"
          v-html="header.description && header.description !== '<p></p>' ? header.description : 'Page Description'"
        ></div>
        <client-only>
          <social-shares class="mt-8" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { find, get } from 'lodash';
import { mapGetters } from 'vuex';
import htmlToText from 'html-to-text';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import SocialShares from '../components/SocialShares';
import categoriesMixin from '../categoriesMixin';

dayjs.extend(utc);

export default {
  name: 'NewsArticleHeader',
  components: { SocialShares },
  mixins: [categoriesMixin],
  props: {
    page: { type: Object, default: () => ({}) },
    header: { type: Object, default: () => ({}) },
    slug: { type: String, default: '' },
    datePublished: { type: String, default: '' },
  },
  computed: {
    ...mapGetters(['inEditor']),
    breadcrumb() {
      const category = find(this.categories, cat => cat.value === get(this.page, 'category.value'));
      const breadcrumb = [
        {
          href: `/news?category=${get(this, 'page.category.value', 'news')}`,
          text: category ? category.name : 'In the news',
        },
        {
          href: `/${this.slug}`,
          text: this.header.title ? htmlToText.fromString(this.header.title) : 'News Article',
        },
      ];

      return breadcrumb;
    },
    formattedDate() {
      if (!this.header.datePublished) return '';
      return dayjs.utc(this.header.datePublished).format('DD/MM/YY');
    },
    newsTags() {
      if (!this.page.newsTags) return;
      return this.page.newsTags.join(', ');
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.newsHeader {
  strong {
    @apply text-green-500;
  }

  p {
    @apply leading-tight;
  }
}
</style>

<style lang="scss" scoped>
.illustration {
  height: 70%;
  width: 70%;
  @apply text-gray-200;
}
</style>
