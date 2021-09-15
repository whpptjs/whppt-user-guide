import components from '../sharedComponents/components';

export default {
  name: 'page',
  label: 'Generic',
  collection: { name: 'pages' },
  components,
  templates: [
    {
      key: 'generic',
      label: 'Generic',
      init: ({ $set }, page) => {
        if (!page.header) $set(page, 'header', { title: '' });
        if (!page.contents) $set(page, 'contents', []);

        return page;
      },
    },
    {
      key: 'home',
      label: 'Home',
      init: ({ $set }, page) => {
        if (!page.header) $set(page, 'header', {});
        if (!page.header.primaryLink) $set(page.header, 'primaryLink', { type: 'page', href: '' });
        if (!page.header.image) $set(page.header, 'image', { imageId: '' });

        if (!page.contents) $set(page, 'contents', []);

        return page;
      },
    },
  ],
};
