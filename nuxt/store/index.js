export const state = () => ({});
export const actions = {
  nuxtServerInit({ dispatch, commit }, { $axios, redirect, req }) {
    // return dispatch('whppt/config/loadDomain', req.hostname)
    //   .then(() => {
    //     return Promise.all([dispatch('whppt/site/loadNav'), dispatch('whppt/site/loadFooter')]);
    //   })
    //   .catch(err => {
    //     console.log('🚀 ~ file: index.js ~ line 10 ~ returndispatch ~ err', err);
    //     return new Error(err.message);
    //   });
  },
};
export const getters = {
  inEditor(_, __, rootState) {
    return rootState['whppt/editor'].activeMenuItem === 'select';
  },
};
export const mutations = {};
