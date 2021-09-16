const extractClient = require('../sharedFunctions/extractClient');

module.exports = {
  authorise({ $mongo: { $db } }, { slug, domainId, user }, { cookies }) {
    return extractClient(cookies).then(client => {
      if (user._id !== 'guest') return;
      return $db
        .collection('clientPages')
        .findOne(
          {
            slug,
            domainId,
            clientId: client?._id,
          },
          { projection: { _id: 1 } }
        )
        .then(page => {
          if (!page) throw new Error('Not authorised to load page');
        })
        .catch(() => {
          throw new Error('Not authorised to load page');
        });
    });
  },
  exec({ $mongo: { $db } }, { slug, domainId }) {
    return $db
      .collection('clientPages')
      .findOne({
        slug,
        domainId,
      })
      .then(page => {
        if (!page) return { status: 404, message: 'Page not found' };
        return page;
      });
  },
};
