<template>
    <div class="homeView">
        <v-layout align-center justify-center fill-height style="height: 100vh">
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12 pa-10">
                            <img width="40" height="40" class="mb-6" src="../assets/MENU Icon.png" >
                            <p class="text-lg-h4 font-weight-black">Sign in</p>
                            <p class="text-sm-body-4">Please enter your email and password</p>
                            <v-text-field
                                label="Your email address"
                                single-line
                                outlined
                            ></v-text-field>
                            <v-text-field
                                label="Password"
                                single-line
                                outlined
                            ></v-text-field>
                        <v-btn color="primary" style="width: 100%; text-transform:none" to="/home">Sign in</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
  export default {
    name: 'Login',
  }
</script>
<style scoped>
.homeView {
    background:  #0A545F url("../assets/Background.png")  no-repeat center center fixed ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 1;
    min-height: 100vh;
}
</style>

