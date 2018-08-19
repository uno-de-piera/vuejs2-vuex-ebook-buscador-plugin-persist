import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import searchModule from './modules/searchModule'

import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'buscador-vuex',
    modules: ['searchModule']
})

export default new Vuex.Store({
  modules: {
    searchModule
  },
  plugins: [vuexLocal.plugin]
})
