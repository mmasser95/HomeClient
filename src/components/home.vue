<template>
  <div id="home">
    <v-layout>
      <v-flex xs12>
        <h1 class="text-center">Home</h1>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md3></v-flex>
      <v-flex md6>
        <template>
          <v-data-table :items="tabledata" :headers="tableHeaders">
            <template v-slot:item="{item}">
              <tr>
                <td>{{item.id}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.pin}}</td>
                <td>
                  <v-btn color="secondary" :id="item.id">
                    <v-icon>lock</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn color="accent" :id="item.id" :to="`/editarPuerta/${item.id}`">
                    <v-icon>edit</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </template>
      </v-flex>
      <v-flex md3></v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import APIService from "@/APIService";
const apiserv = new APIService();
export default {
  name: "Home",
  asyncComputed: {
    recursos: function() {
      return apiserv
        .getRecursos()
        .then(res => {
          return res.data.data;
        })
        .catch(err => {
          alert(`Error: ${err.response.status}`);
          return false;
        });
    }
  },
  computed: {
    ...mapGetters(["getToken", "getBaseUrl"])
  },
  watch: {
    recursos: function(val) {
      this.tabledata = val;
    }
  },

  data: function() {
    return {
      tableHeaders: [
        { text: "#", value: "id" },
        { text: "Nombre", value: "nombre" },
        { text: "Pin", value: "pin" },
        { text: "Actions", value: "id" },
        { text: "Edit", value: "id" }
      ],
      selected: null,
      tabledata: []
    };
  },
  created: function() {
    console.log("this.getBaseUrl :", this.getBaseUrl);
    if (!this.getToken) {
      this.$router.push("/login");
      return false;
    }
  }
};
</script>
