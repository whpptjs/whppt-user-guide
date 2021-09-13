import components from '../components/components';

const formatSlug = ({ slug }) => {
  return `news/${slug}`;
};

const stripSlug = ({ slug }) => {
  return slug.replace(`news/`, '');
};

export default {
  name: 'news',
  label: 'News',
  collection: { name: 'news' },
  components,
  templates: [
    {
      key: 'newsItem',
      label: 'News Item',
      init: ({ $set }, page) => {
        if (!page.header) $set(page, 'header', {});
        if (!page.contents) $set(page, 'contents', []);
        if (!page.newsTags) $set(page, 'newsTags', []);
        if (!page.category) $set(page, 'category', { name: 'News', value: 'news' });
        return page;
      },
    },
  ],
  formatSlug,
  stripSlug,
};
