import Cookies from 'js-cookie';

export const state = () => ({
  client: undefined,
  loadedClient: false,
});

export const getters = {};

export const actions = {
  loadMe({ commit }) {
    this.$axios.$get(`api/client/me`).then(user => {
      commit('login_user', user);
      commit('set_loaded_client', true);
    });
  },
};

export const mutations = {
  set_loaded_client(state, loadedClient) {
    state.loadedClient = loadedClient;
  },
  login_user(state, user) {
    state.client = user;
  },
  logout_user(state) {
    state.client = undefined;
    Cookies.remove('docsAuthToken');
  },
};
