import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: [],
    drawer: false
  },
  mutations: {
    openDrawer: (state, drawer) => state.drawer = drawer,
    closeDrawer: (state, drawer) => state.drawer = drawer,
    addCurrency: (state, currency) => {
      console.log(currency)
      state.currencies.push({...currency})
      state.drawer = false
    },
    editCurrency: (state, currency) => {
      console.log(currency)
        Vue.set(state.currencies, currency.index, {...currency});
        state.drawer = false
    },
    deleteCurrency: (state, index) => {
      state.currencies.splice(index, 1)
    },

  },
  actions: {
    openDrawer(context) {
      console.log(context)
      context.commit('openDrawer', true)
    },
    closeDrawer(context) {
      context.commit('closeDrawer', false)
    },
    addCurrency(context, currency) {
      context.commit('addCurrency', currency)
    },
    editCurrency(context, currency) {
      context.commit('editCurrency', currency)
    },
    deleteCurrency(context, index) {
      context.commit('deleteCurrency', index)
    }
  },
  getters: {
    currencies (state) {
      return state.currencies
    },
    drawer (state) {
      return state.drawer
    },
  },
  modules: {
  }
})
