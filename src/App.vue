<template>
  <v-app>
    <div id="loader">
      <div></div>
    </div>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer=!drawer">
        <v-icon>menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Iik</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-menu offset-y :close-on-click="false" :close-on-content-click="false" v-if="!getToken">
        <template v-slot:activator="{on}">
          <v-btn icon v-on="on">
            <v-icon>build</v-icon>
          </v-btn>
        </template>
        <v-list class="m-2">
          <v-form id="formConf" @submit.prevent="setServer">
            <v-flex xs12>
              <v-text-field
                label="URL"
                v-model="conf.baseurl"
                :value="getBaseUrl"
                :rules="rules.baseurl"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-btn type="submit" block dark color="primary">Cambiar Server</v-btn>
            </v-flex>
          </v-form>
        </v-list>
      </v-menu>

      <v-btn icon v-if="getToken" to="/nuevaPuerta">
        <v-icon>add</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" id="navi" absolute temporary>
      <v-img
        id="imagenMenu"
        :aspect-ratio="16 / 9"
        src="https://lh3.googleusercontent.com/13tPG3fyy6c5i1Ncka8Qi0aGPDOItrhaES0YQSs52-D8bQbiC0nGtZ1ISZYo7Ngg3MiB=w1000-h560"
      >
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading"></div>
            <div class="body-1"></div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-list class="pt-0" dense>
        <v-list-item v-for="(i,k) in menuses" :key="k" :to="i.href">
          <v-list-item-icon>
            <v-icon>{{i.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="i.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app height="auto">
      <v-container>
        <div class="text-center">
          &copy;2019 -
          <strong>Martí Masot</strong>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["getToken", "getBaseUrl"]),
    menuses: function() {
      if (this.getToken) {
        return [
          {
            text: "Home",
            icon: "home",
            href: "/home"
          },
          {
            text: "Nueva Puerta",
            icon: "meeting_room",
            href: "/nuevaPuerta"
          }
        ];
      } else {
        return [
          {
            text: "Home",
            icon: "home",
            href: "/home"
          }
        ];
      }
    }
  },
  data: () => ({
    drawer: false,
    rules: {
      baseurl: [
        v => !!v || "Campo requerido",
        v => !!v.match(/http(s)?:\/\/(\S).+\/(\w){0,}/g) || "URL Incorrecta"
      ]
    },
    conf: { baseurl: "" }
  }),
  methods: {
    setServer() {
      this.baseurlSetter(this.conf.baseurl);
    },
    ...mapActions(["baseurlSetter"])
  },
  created: function() {
    if (!this.getToken) {
      this.$router.push("/login");
      return false;
    }
  }
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>