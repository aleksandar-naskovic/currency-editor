<template>
    <div>
        <v-layout align-center justify-space-between mb-6>
            <h2>Currencies</h2>
            <v-btn color="primary" style=" text-transform:none" :disabled="drawer" @click="addCurrency"><v-icon class="mr-2">fas fa-plus</v-icon>Add Currency</v-btn>
        </v-layout>
        <template>
            <v-card>
                <v-card-title>
                    <v-text-field
                        v-model="search"
                        class="shrink"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        outlined
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                    style="cursor: pointer"
                    :headers="headers"
                    :items="currencies"
                    :search="search"
                    hide-default-footer
                    disable-sort
                >
                    <template v-slot:item="row">
                        <tr @click="selectCurrency(row.item, row.index)">
                            <td>{{row.item.name}}</td>
                            <td>{{row.item.code}}</td>
                            <td>{{row.item.symbol}}</td>
                            <td>
                                <v-btn @click.stop="deleteCurrency(row.index)" icon>
                                    <v-icon>fa-trash-can</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card>
        </template>
        <AddOrEditCurrency :selectedCurrency="selectedCurrency" :editMode="editMode"/>
    </div>
</template>

<script>
import AddOrEditCurrency from "./AddOrEditCurrency";
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "Currency",
    components: {AddOrEditCurrency},
    data () {
        return {
            editMode: false,
            search: '',
            selectedCurrency: {},
            headers: [
                {
                    text: 'CURRENCY NAME',
                    align: 'start',
                    filterable: false,
                    value: 'name',
                },
                {text: 'CURRENCY CODE', value: 'code'},
                {text: 'CURRENCY SYMBOL', value: 'symbol'},
                {text: '', value: 'action'},
            ],
        }
    },
    methods: {
        selectCurrency(currency, index) {
            this.editMode = true;
            currency.index = index
            this.selectedCurrency = currency;
            this.openDrawer()
        },
        addCurrency() {
            this.editMode = false;
            this.openDrawer()
        },
        ...mapActions(["openDrawer"]),
        ...mapActions(["closeDrawer"]),
        ...mapActions(["deleteCurrency"])
    },
    computed: {
        ...mapGetters(["currencies"]),
        ...mapGetters(["drawer"]),
    },
}
</script>

<style scoped>

</style>
