export default {
  key: 'BlockContent',
  name: 'Block Content',
  componentType: 'BlockContent',
  init: ({ $set }, content = {}) => {
    if (!content.items) $set(content, 'items', []);
    return content;
  },
  extractImages: content => {
    return content.items.map(item => item.image.imageId);
  },
};
