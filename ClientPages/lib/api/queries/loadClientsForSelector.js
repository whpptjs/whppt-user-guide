module.exports = {
  exec({ $mongo: { $db } }) {
    return $db.collection('clients').find().toArray();
  },
};
