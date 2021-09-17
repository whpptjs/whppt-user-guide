module.exports = {
  exec({ $mongo: { $db } }, { clientId, navId }) {
    return $db
      .collection('clients')
      .deleteOne({ _id: clientId })
      .then(() => {
        return $db.collection('site').updateOne({ _id: navId }, { $pull: { clientMenus: { clientId } } });
      });
  },
};
