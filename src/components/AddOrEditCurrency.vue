<template>
    <v-navigation-drawer enable-resize-watcher right clipped fixed app width="30%" v-model="drawer">
        <form lazy-validation ref="form" @submit.prevent="submitForm(currency)">
            <v-layout align-center justify-space-between py-3 px-6>
                <div>
                    <v-btn icon @click="closeDrawer" >
                        <v-icon>fas fa-times</v-icon>
                    </v-btn>
                    <label class="sectionTitle">{{editMode ? 'Edit' : 'New'}} Currency</label>
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
                    <v-btn v-if="!editMode" color="primary" style="text-transform:none" type="submit">Add</v-btn>
                    <v-btn v-else color="primary" style="text-transform:none" type="submit">Save</v-btn>
                </div>
            </v-layout>
        <v-divider></v-divider>
            <div class="px-6 py-6">
                <p class="font-weight-black mt-5">Currency name</p>
                <v-text-field
                    v-model="currency.name"
                    label="Currency name"
                    single-line
                    outlined
                    hide-details="auto"
                ></v-text-field>
                <span style="color:red" v-if="msg.name">{{msg.name}}</span>
                <p class="font-weight-black mt-5">Currency code</p>
                <v-text-field
                    v-model="currency.code"
                    label="Currency code"
                    single-line
                    outlined
                    hide-details="auto"
                ></v-text-field>
                <span style="color:red" v-if="msg.code">{{msg.code}}</span>
                <p class="font-weight-black mt-5">Currency symbol</p>
                <v-text-field
                    v-model="currency.symbol"
                    label="Currency symbol"
                    single-line
                    outlined
                    hide-details="auto"
                ></v-text-field>
                <span style="color:red" v-if="msg.symbol">{{msg.symbol}}</span>
            </div>
        </form>
    </v-navigation-drawer>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Vue from "vue";

export default {
    name: "AddOrEditCurrency",
    data () {
        return {
            currency: {
                id: '',
                name: '',
                code: '',
                symbol: ''
            },
            msg: {},
        }
    },
    props: {
        selectedCurrency: {
            type: Object,
            default: {}
        },
        editMode: {
            type: Boolean,
        }
    },
    watch: {
      drawer(newVal) {
          if (newVal && !this.editMode) {
              this.currency.id = '';
              this.currency.name = '';
              this.currency.code = '';
              this.currency.symbol = '';
          }
      },
        selectedCurrency: {
            handler: function () {
                if (Object.keys(this.selectedCurrency).length > 0)   {
                    this.currency = {...this.selectedCurrency}
                }
            },
            deep: true
        }
    },
    computed: {
        ...mapGetters(["drawer"]),
        ...mapGetters(["currencies"]),

    },
    methods: {
        ...mapActions(["closeDrawer"]),
        ...mapActions(["addCurrency"]),
        ...mapActions(["editCurrency"]),
        submitForm(currency) {
            if (this.validations())
                {
                    if (!this.editMode) {
                        this.currency.id = this.currencies.length;
                        this.addCurrency(this.currency);
                    } else {
                        this.editCurrency(currency)
                    }
                }
        },
        checkIfCodeIsUnique(newCurrency) {
            let currencies = [...this.currencies];
            if (this.editMode)
                currencies = currencies.filter(currency => currency.id !== newCurrency.id)
            return currencies.some(currency => currency.code === newCurrency.code)
        },
        validations() {
            this.msg = {}
            if (!this.currency.name) {
                Vue.set(this.msg, 'name', 'Currency name is required');
                return false
            }
            if (this.currency.code.length !== 3) {
                Vue.set(this.msg, 'code', 'Currency must have 3 characters of length,');
                return false
            }
            if (!this.currency.symbol) {
                Vue.set(this.msg, 'symbol', 'Currency symbol is required');
                return false
            }
            if (this.checkIfCodeIsUnique(this.currency)){
                Vue.set(this.msg, 'code', 'Currency code is not unique');
                return false
            }
            return true
        }
    }
}
</script>

<style scoped>

</style>
