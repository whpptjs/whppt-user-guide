module.exports = {
  exec({ $mongo: { $db } }, { type, serviceGroupIds, limit, currentPage, currentPageId, domainId, category }) {
    const hasCategory = category && category !== 'undefined';
    const query = {
      _id: { $ne: currentPageId },
      domainId,
    };

    if (hasCategory) query['category.value'] = category;

    if (type) query.newsTags = { $in: type.split(',') };
    if (serviceGroupIds) query.serviceGroupTags = { $in: serviceGroupIds.split(',') };

    const agg = [{ $match: query }, { $sort: { 'header.datePublished': -1 } }];

    if (currentPage > 0 && limit !== undefined) agg.push({ $skip: parseInt(limit) * parseInt(currentPage) });
    if (limit !== undefined) agg.push({ $limit: parseInt(limit) });

    agg.push({
      $project: {
        _id: 1,
        slug: 1,
        name: '$header.title',
        description: '$header.description',
        datePublished: '$header.datePublished',
      },
    });

    return Promise.all([
      $db.collection('news').aggregate(agg).toArray(),
      $db.collection('news').find(query).count(),
    ]).then(([articles, total]) => {
      return { articles, total };
    });
  },
};
