import NewsTagEditor from './NewsTagEditor';
import CategoryEditor from './CategoryEditor';
import pageType from './pageType';

export default {
  name: 'News',
  pageSettings: {},
  pageType,
  editors: [
    {
      name: 'news-tags',
      label: 'News Article Tags',
      component: NewsTagEditor,
    },
    {
      name: 'news-category',
      label: 'News Category',
      component: CategoryEditor,
    },
  ],
};
