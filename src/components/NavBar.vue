<template>
        <v-layout>
            <img width="40" height="40" src="../assets/Generic.png" >
            <v-layout column ml-4>
                <p class=" text-sm-body-1 text-uppercase ma-0 pa-0">
                    Brand name
                </p>
                <p class="font-weight-black ma-0 pa-0">
                    All Stores
                </p>
            </v-layout>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>far fa-bell</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>far fa-user</v-icon>
            </v-btn>
        </v-layout>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

</style>
