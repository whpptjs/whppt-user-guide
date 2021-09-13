import generic from '~~/generic/plugin';
import news from '~~/news/plugin';

export default ({ app }) => {
  app.$whppt.addPlugin(generic);
  app.$whppt.addPlugin(news);
};
