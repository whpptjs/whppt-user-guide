import components from '../sharedComponents/components';

const loadPage = ({ $axios }, { slug, domainId }) => {
  return $axios.$get(`/api/client/loadPage?slug=${slug}&domainId=${domainId}`).then(page => {
    return page;
  });
};

const formatSlug = ({ slug }) => {
  return `client/${slug}`;
};

const stripSlug = ({ slug }) => {
  return slug.replace(`client/`, '');
};

export default {
  name: 'clientPage',
  label: 'Client Page',
  collection: { name: 'clientPages' },
  components,
  templates: [
    {
      key: 'clientPage',
      label: 'Client Page',
      init: ({ $set }, page) => {
        if (!page.header) $set(page, 'header', { title: '' });
        if (!page.pageActions) $set(page, 'pageActions', { previous: { type: 'page' }, next: { type: 'page' } });

        if (!page.contents) $set(page, 'contents', []);

        return page;
      },
    },
  ],
  loadPage,
  formatSlug,
  stripSlug,
};
