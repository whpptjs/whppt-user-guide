export default {
  key: 'TallImageComponent',
  name: 'Tall Image',
  componentType: 'TallImageComponent',
  init: ({ $set }, content = {}) => {
    if (!content.image) {
      $set(content, 'image', { imageId: '' });
    }
    return content;
  },
  extractImages: content => {
    return [content.image.imageId];
  },
};
