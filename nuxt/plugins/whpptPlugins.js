import generic from '~~/generic/plugin';
import news from '~~/news/plugin';

export default ({ app }) => {
  app.$whppt.addPlugin(generic);
  app.$whppt.addPlugin(news);

  app.$whppt.initNav = ({ $set }, nav) => {
    if (!nav.items) $set(nav, 'items', []);
  };

  app.$whppt.initFooter = ({ $set }, footer) => {
    if (!footer.groups) $set(footer, 'groups', []);
  };
};
