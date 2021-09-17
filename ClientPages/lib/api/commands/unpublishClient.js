module.exports = {
  exec({ $mongo: { $unpublish } }, { clientId }) {
    return $unpublish('clients', clientId);
  },
};
