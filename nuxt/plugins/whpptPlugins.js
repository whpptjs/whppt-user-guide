import generic from '~~/generic/plugin';
import clientPages from '~~/ClientPages/plugin';

export default ({ app }) => {
  app.$whppt.addPlugin(generic);
  app.$whppt.addPlugin(clientPages);

  app.$whppt.initNav = ({ $set }, nav) => {
    if (!nav.top) $set(nav, 'top', []);
    if (!nav.side) $set(nav, 'side', []);
    if (!nav.clients) $set(nav, 'clients', []);
  };

  // clients: [
  //   {
  //     clientId: '',
  //     username: 'uc',
  //     items: [
  //       {
  //         link: { type: 'page' },
  //           subItems: [],
  //       }
  //     ]
  //   },
  // ]

  app.$whppt.initFooter = ({ $set }, footer) => {
    if (!footer.groups) $set(footer, 'groups', []);
  };
};
