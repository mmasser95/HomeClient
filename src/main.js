import Vue from 'vue';
import cors from 'cors';
import App from './App.vue';
import vuetify from './style/vuetify';
import router from './router';
import store from './store/index';
import AsyncComputed from 'vue-async-computed';

Vue.config.productionTip = false;
Vue.use(cors);
Vue.use(AsyncComputed);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify,
  render: (h) => h(App),
});
