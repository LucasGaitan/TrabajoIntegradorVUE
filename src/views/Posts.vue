<template>
  <v-app>
    <v-row dense>
      <v-col  class="d-flex" cols="12" sm="11">
        <v-autocomplete
          v-model="usuario"
          label="Usuarios"
          clearable
          :items="usuarios"
          item-text="name"
          return-object
        ></v-autocomplete>
      </v-col>
      <v-btn 
      fab
      @click="setMostrarGrid()" ><v-icon>mdi-magnify</v-icon></v-btn>
    <v-container v-if="mostrarGrid">
      <v-banner icon="mdi-account" outlined single-line
        >Listado de posteos del usuario: {{ usuario.name }}</v-banner
      >
      <v-data-table :headers="headers" :items="posts"></v-data-table>
    </v-container>
    </v-row>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Posts",
  components: {},
  data() {
    return {
      usuario: null,
      mostrarGrid: false,
      headers: [
        { text: "Id.", value: "id" },
        { text: "Titulo", value: "title" },
        { text: "Cuerpo", value: "body" },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchPosts", "fetchUsuarios"]),
    setMostrarGrid()
    {
      if(!this.mostrarGrid){
        this.mostrarGrid = !this.mostrarGrid;
      }
      this.fetchPosts({selected: this.usuario});
    }
  },
  computed: {
    ...mapGetters(["posts", "usuarios"]),
  },
  created() {
    this.fetchUsuarios();
  },
};
</script>

<style>
</style>