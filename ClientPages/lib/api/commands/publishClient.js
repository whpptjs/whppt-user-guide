module.exports = {
  exec({ $mongo: { $publish } }, { client }) {
    return $publish('clients', client);
  },
};
