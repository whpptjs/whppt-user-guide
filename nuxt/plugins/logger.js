const logger = {
  info: console.log,
  error: console.log,
  warning: console.log,
  dev: console.log,
};

export default (__, inject) => {
  inject('logger', logger);
};
