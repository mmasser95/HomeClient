import axios from 'axios';
import store from '@/store';

function getHeaders() {
  return { headers: { authorization: `Bearer ${store.getters.getToken}` } };
}
export default class APIService {
  login(data) {
    return axios
      .post(`${store.getters.getBaseUrl}login`, data)
      .then((res) => res)
      .catch((err) => err);
  }
  validateLogin(token) {
    return axios
      .get(`${store.getters.getBaseUrl}login`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => res)
      .catch((err) => err);
  }
  getRecursos() {
    return axios
      .get(`${store.getters.getBaseUrl}recurso`, getHeaders())
      .then((res) => res)
      .catch((err) => err);
  }
  postRecurso(data) {
    return axios
      .post(`${store.getters.getBaseUrl}recurso`, data, getHeaders())
      .then((res) => res)
      .catch((err) => err);
  }
}
