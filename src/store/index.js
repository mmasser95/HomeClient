import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    username: '',
    baseurl: '',
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getBaseUrl(state) {
      return state.baseurl;
    },
    getUsername(state) {
      return state.username;
    },
  },
  mutations: {
    setToken(state, token) {
      localStorage.setItem('token', token);
      state.token = token;
    },
    setBaseUrl(state, baseurl) {
      localStorage.setItem('baseUrl', baseurl);
      state.baseurl = baseurl;
    },
    setUsername(state, username) {
      state.username = username;
    },
  },
  actions: {
    authenticate: ({ commit }, token) => commit('setToken', token),
    usernameSetter: ({ commit }, username) => commit('setUsername', username),
    baseurlSetter: ({ commit }, baseurl) => commit('setBaseUrl', baseurl),
  },
});
