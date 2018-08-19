import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import searchModule from './modules/searchModule'

export default new Vuex.Store({
  modules: {
    searchModule
  }
})
