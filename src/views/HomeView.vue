<template>
    <div>
        <v-navigation-drawer app clipped>
            <SideBar/>
        </v-navigation-drawer>

        <v-app-bar app clipped-left clipped-right>
            <NavBar />
        </v-app-bar>

        <v-main class="ma-0 pa-8">
            <Currency/>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>

        <v-layout row>
        </v-layout>
    </div>
</template>

<script>
  import NavBar from "../components/NavBar";
  import SideBar from "../components/SideBar";
  import Currency from "../components/Currency";

  export default {
    name: 'Home',
    components: {
        Currency,
        SideBar,
        NavBar
    },
  }
</script>

<style scoped>

</style>
