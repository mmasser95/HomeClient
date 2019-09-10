import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Login from "@/components/login";
import nuevaPuerta from "@/components/puerta/nuevaPuerta"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path:'/nuevaPuerta',
      component:nuevaPuerta
    }
  ],
  linkActiveClass: "active",
  mode: "history"
});
