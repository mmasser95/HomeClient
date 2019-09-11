<template>
  <div id="login">
    <v-layout row wrap>
      <v-flex xs12 class="text-center">
        <h1>Login</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm3></v-flex>
      <v-flex xs12 sm6>
        <v-form v-model="form.valid" ref="form1" id="form1" @submit.prevent="doLogin()">
          <v-flex xs12>
            <v-text-field type="text" label="Username" v-model="email" :rules="form.r.username"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field type="password" label="Password" v-model="passw" :rules="form.r.pass"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn type="submit" form="form1" dark block color="primary"></v-btn>
          </v-flex>
        </v-form>
      </v-flex>
      <v-flex xs12 sm3></v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import APIService from "@/APIService";
import catchErr from "@/services";
const apiserv = new APIService();
export default {
  name: "Login",
  computed: {
    ...mapGetters(["getToken", "getBaseUrl"])
  },
  data: function() {
    return {
      email: "",
      passw: "",
      form: {
        valid: false,
        r: {
          username: [
            v => !!v || "Campo necesario",
            v => v.length >= 6 || "Mínimo 6 caracteres"
          ],
          pass: [
            v => !!v || "Campo necesario",
            v => v.length >= 8 || "Mínimo 8 caracteres"
          ]
        }
      }
    };
  },
  methods: {
    ...mapActions(["authenticate", "baseurlSetter"]),
    doLogin() {
      let vth = this;
      apiserv
        .login({ email: this.email, passw: this.passw })
        .then(function(res) {
          vth.authenticate(res.data.token);
          vth.$router.push("/home");
        })
        .catch(function(err) {
          return catchErr(err);
        });
    }
  },
  created: function() {
    if (this.getToken) {
      this.$router.push("/home");
      return false;
    } else {
      let lcltoken = localStorage.getItem("token");
      let lclbaseUrl = localStorage.getItem("baseUrl");
      let vth = this;
      if (lcltoken && lclbaseUrl) {
        this.baseurlSetter(lclbaseUrl);
        apiserv.validateLogin(lcltoken).then(function(res) {
          vth.authenticate(res.data.token);
          vth.$router.push("/home");
        });
      }
    }
  }
};
</script>

