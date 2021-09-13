import { Components } from '@whppt/nuxt/lib/plugins/Components';

// import components from '../components/components';

export default {
  name: 'page',
  label: 'Generic',
  collection: { name: 'pages' },
  components: Components,
  templates: [
    {
      key: 'generic',
      label: 'Generic',
      init: ({ $set }, page) => {
        if (!page.header) $set(page, 'header', { breadcrumb: [] });
        if (!page.contents) $set(page, 'contents', []);

        return page;
      },
    },
    {
      key: 'contact',
      label: 'Contact',
      init: ({ $set }, page) => {
        if (!page.header) $set(page, 'header', { breadcrumb: [] });

        if (!page.contacts)
          $set(page, 'contacts', {
            items: [],
          });

        if (!page.contents) $set(page, 'contents', []);

        return page;
      },
    },
    {
      key: 'child',
      label: 'Child',
      init: ({ $set }, page) => {
        if (!page.header) $set(page, 'header', { breadcrumb: [] });
        if (!page.contents) $set(page, 'contents', []);

        return page;
      },
    },
    {
      key: 'home',
      label: 'Home',
      init: ({ $set }, page) => {
        if (!page.header) $set(page, 'header', { image: { imageId: '', alt: '' } });
        if (!page.contents) $set(page, 'contents', []);

        return page;
      },
    },
  ],
};
