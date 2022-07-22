<template>
  <v-app>
    <Drawer></Drawer>
    <Navbar></Navbar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Drawer from './components/Drawer.vue';
import Footer from './components/Footer.vue';
export default {
  name: "App",
  components: { Navbar, Drawer, Footer },
  data: () => ({
    //
  }),
};
</script>
<style>
.v-application--wrap {
  min-height: unset;
}
</style>
