<template>
  <v-app>
    <v-banner icon="mdi-account" outlined single-line
      >Listado de usuarios</v-banner
    >
    <v-data-table
      :headers="headers"
      :items="usuarios"
      :hide-default-footer="true"
    ></v-data-table>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Usuarios",
  components: {},
  data() {
    return {
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Email", value: "email" },
        { text: "Teléfono", value: "phone" },
        { text: "Sitio Web", value: "website" },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchUsuarios"]),
  },
  computed: {
    ...mapGetters(["usuarios"]),
  },
  created() {
    this.fetchUsuarios();
  },
};
</script>
