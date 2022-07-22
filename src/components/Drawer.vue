<template>
  <v-navigation-drawer clipped app color="blue lighten-2">
      <v-divider></v-divider>
      <v-list dense nav >

        <v-list-item link to="/Usuarios">
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-title>Usuarios</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/Posts" >
          <v-list-item-icon
            ><v-icon>mdi-laptop-account</v-icon></v-list-item-icon>
          <v-list-item-title>Posts</v-list-item-title>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Drawer",
}
</script>

<style>

</style>