import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Login from "@/components/login";
import nuevoRecurso from "@/components/recurso/nuevoRecurso"
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
      path:'/nuevoRecurso',
      component:nuevoRecurso
    }
  ],
  linkActiveClass: "active",
  mode: "history"
});
