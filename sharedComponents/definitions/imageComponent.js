export default {
  key: 'ImageComponent',
  name: 'Image',
  componentType: 'ImageComponent',
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
