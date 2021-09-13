module.exports = {
  exec({ $mongo: { $db } }, { domainId, category }) {
    const query = {};
    if (category && category.length) query['category.value'] = category;
    if (domainId && domainId !== 'undefined') query.domainId = domainId;
    else query.$or = [{ domainId: { $exists: false } }, { domainId: { $eq: '' } }];

    return $db.collection('news').distinct('newsTags', query);
  },
};
