<template>
  <div id="nuevoRecurso">
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="text-center">Nuevo Recurso</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs3></v-flex>
      <v-flex xs6>
        <v-form v-model="form.valid" ref="form1" id="form1" @submit.prevent="doSubmit()">
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                type="text"
                label="Nombre"
                v-model="form.d.nombre"
                :rules="form.r.nombre"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                type="password"
                label="Password"
                v-model="form.d.passw"
                :rules="form.r.passw"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field type="text" label="Tipo" v-model="form.d.tipo" :rules="form.r.tipo"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field type="number" label="Pin" v-model="form.d.pin" :rules="form.r.pin"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                type="number"
                label="Tiempo activo (ms)"
                v-model="form.d.tActivo"
                :rules="form.r.tActivo"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn type="submit" form="form1" dark block color="primary"></v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
      <v-flex xs3></v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import APIService from "@/APIService";
const apiserv = new APIService();
export default {
  name: "nuevoRecurso",
  methods: {
    doSubmit() {
      let vth = this;
      apiserv
        .postRecurso(vth.form.d)
        .then(res => {})
        .catch(err => {});
    }
  },
  data: function() {
    return {
      form: {
          valid:null,
        r: {
          nombre: [
            v => !!v || "Campo requerido",
            v => v.length > 5 || "6 Caracteres como mínimo"
          ],
          passw: [
              v=>!!v||'Campo requerido',
              v=>!!v.match(/^\d{4}$/g)||'4 Digitos'
          ],
          tipo: [v=>!!v||'Campo requerido',],
          pin: [v=>!!v||'Campo requerido',],
          tActivo: [v=>!!v||'Campo requerido',]
        },
        d: { nombre: "", passw: "", tipo: "", pin: "", tActivo: "" }
      }
    };
  },
  computed: {},
  asyncComputed: {},
  watch: {}
};
</script>

<style>
</style>