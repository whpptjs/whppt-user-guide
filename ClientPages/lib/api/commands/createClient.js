module.exports = {
  exec({ $mongo: { $db }, $id }, { navId }) {
    const _id = $id();
    return $db
      .collection('clients')
      .updateOne({ _id }, { $set: { username: '', password: '' } }, { upsert: true })
      .then(() => {
        return $db
          .collection('site')
          .updateOne({ _id: navId }, { $push: { clientMenus: { clientId: _id, username: '', items: [] } } });
      });
  },
};
