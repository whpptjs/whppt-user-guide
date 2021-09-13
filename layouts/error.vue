<template>
  <div class="h-screen">
    <div class="relative h-80vh">
      <div class="absolute inset-0 flex flex-col justify-end sm:justify-center container z-1 mb-24 lg:mb-16">
        <div class="flex mb-8 sm:mb-0">
          <div class="w-1/12" />
          <div class="w-10/12 sm:w-9/12">
            <div
              class="
                text-center
                lg:text-left
                text-2xl
                lg:text-3xl
                xl:text-4xl
                tracking-tight
                leading-tight
                lg:leading-none
                richText
                font-bold
              "
            >
              {{ statusCode }} {{ title }}
            </div>
            <div
              class="
                text-center
                lg:text-left
                text-base
                lg:text-xl
                xl:text-3xl
                text-gray-500
                mt-4
                lg:mt-8
                xl:leading-tight
                font-light
                tracking-tight
              "
            >
              {{ content }}
            </div>
            <div class="mt-8 lg:mt-16 flex justify-center lg:justify-start">
              <whppt-link :to="homepageLink">
                <div
                  class="
                    font-bold
                    py-2
                    px-4
                    md:py-4 md:px-8
                    lg:px-12
                    rounded
                    inline-flex
                    justify-center
                    items-center
                    text-white
                  "
                >
                  {{ homepageLink.text }}
                </div>
              </whppt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from 'lodash';

export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
    };
  },
  computed: {
    breadcrumb() {
      return [];
    },
    homepageLink() {
      return { type: 'page', text: 'Homepage', href: '/' };
    },
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    title() {
      const unknownClientError = this.statusCode !== 404 && process.env.NODE_ENV !== 'development';
      if (unknownClientError) return 'An Unknown Error Occurred';
      if (this.statusCode === 404) return 'Page not found';
      return get(this, 'error.message'); // developer error message
    },
    content() {
      if (this.statusCode === 404) return 'The requested URL was not found.';
      if (process.env.NODE_ENV !== 'development') return '';

      const axiosStack = get(this, 'error.request.response');
      if (axiosStack) return JSON.parse(axiosStack);
      return get(this, 'error.stack');
    },
    configUrl() {
      if (process.env.NODE_ENV !== 'development') return '';
      return get(this, 'error.config.url');
    },
  },
};
</script>
