const findUser = ({ $mongo: { $db } }, args, projection = {}) => {
  return Promise.all([
    getUserFromCollection($db, 'clients', args, projection),
    getUserFromCollection($db, 'users', args, projection),
  ]).then(([clientUser, userFromWebsite]) => {
    return clientUser || userFromWebsite;
  });
};

const getUserFromCollection = (db, collection, args, projection) => {
  return db.collection(collection).findOne(args, { projection });
};

module.exports = findUser;
