import Cookies from 'js-cookie';

export const state = () => ({
  client: undefined,
});

export const getters = {};

export const actions = {
  loadMe({ commit }) {
    this.$axios.$get(`api/client/me`).then(user => {
      commit('login_user', user);
    });
  },
};

export const mutations = {
  login_user(state, user) {
    state.client = user;
  },
  logout_user(state) {
    state.client = undefined;
    Cookies.remove('authToken');
  },
};
