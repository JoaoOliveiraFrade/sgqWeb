import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

// import Vue from 'vue'
// import Vuex from 'vuex'

// import actions from './actions'
// import getters from './getters'
// import mutations from './mutations'
// import state from './state'

// Vue.config.productionTip = false
// Vue.use(Vuex)

// export default new Vue.Store({ actions, getters, mutations, state })
