export const state = () => ({
  currentVideoId: undefined,
});
export const actions = {};
export const mutations = {
  playVideo(state, videoId) {
    state.currentVideoId = videoId;
  },
  closeVideoPlayer(state) {
    state.currentVideoId = undefined;
  },
};

export const getters = {
  showVideoPlayer(state) {
    return state.currentVideoId;
  },
};
