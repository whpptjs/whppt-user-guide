// const debug = require('debug')
// const logger = {
//   info: debug('novagroup:info'),
//   error: debug('novagroup:error'),
//   warning: debug('novagroup:warning'),
//   dev: debug('novagroup:dev'),
// }
const logger = {
  info: console.log,
  error: console.log,
  warning: console.log,
  dev: console.log,
};

export default (__, inject) => {
  inject('logger', logger);
};
