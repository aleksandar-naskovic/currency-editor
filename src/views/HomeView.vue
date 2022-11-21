<template>
    <div >
        <NavBar/>
        <SideBar/>
    </div>
</template>

<script>
  import NavBar from "../components/NavBar";
  import SideBar from "../components/SideBar";

  export default {
    name: 'Home',
    components: {
        SideBar,
        NavBar
    },
  }
</script>

<style scoped>

</style>
