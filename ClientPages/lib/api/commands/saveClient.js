module.exports = {
  exec({ $mongo: { $db } }, { client, navId }) {
    return $db
      .collection('clients')
      .updateOne({ _id: client._id }, { $set: client }, { upsert: true })
      .then(() => {
        return $db.collection('site').updateOne(
          { _id: navId, 'clientMenus.clientId': client._id },
          {
            $set: {
              'clientMenus.$.username': client.username,
            },
          }
        );
      });
  },
};
