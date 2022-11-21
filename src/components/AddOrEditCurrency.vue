<template>
    <v-navigation-drawer enable-resize-watcher right clipped fixed app width="30%" v-model="drawer">
            <v-layout align-center justify-space-between py-3 px-6>
                <div>
                    <v-btn icon @click="closeDrawer" >
                        <v-icon>fas fa-times</v-icon>
                    </v-btn>
                    <label class="sectionTitle">Edit Currency</label>
                </div>
                <div>
                    <v-btn
                        @click="closeDrawer"
                        class="ma-2 red--text"
                        outlined
                        color="grey"
                        style="text-transform:none"
                    >
                        Cancel
                    </v-btn>
                    <v-btn color="primary" style="text-transform:none" to="/home">Save</v-btn>
                </div>
            </v-layout>
        <v-divider></v-divider>
        <div class="px-6 py-6">
            <p class="font-weight-black">Currency name</p>
            <v-text-field
                v-model="currency.name"
                label="Currency name"
                single-line
                outlined
            ></v-text-field>
            <p class="font-weight-black">Currency code</p>
            <v-text-field
                v-model="currency.code"
                label="Currency code"
                single-line
                outlined
            ></v-text-field>
            <p class="font-weight-black">Currency symbol</p>
            <v-text-field
                v-model="currency.symbol"
                label="Currency symbol"
                single-line
                outlined
            ></v-text-field>
        </div>
    </v-navigation-drawer>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "EditCurrency",
    data () {
        return {
        }
    },
    props: {
        currency: {
            type: Object,
            default: {}
        }
    },
    computed: {
        ...mapGetters(["drawer"]),
    },
    methods: {
        ...mapActions(["closeDrawer"])
    }
}
</script>

<style scoped>

</style>
