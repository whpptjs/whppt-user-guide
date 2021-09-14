export default {
  key: 'Youtube',
  name: 'Youtube Video',
  displayType: 'Youtube',
  componentType: 'Youtube',
  init: ({ $set }, content = {}) => {
    if (!content.videoId) {
      $set(content, 'videoId', '');
    }
    return content;
  },
};
