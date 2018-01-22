import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    console.log('mutation')
    state.data = parameter
  },

  [types.filterTerm] (state, data) {
    state.filterTerm = data
  },

  [types.selected] (state, data) {
    state.selected = data
  },

  [types.loading] (state, data) {
    state.loading = data
  },

  [types.selectedMonoselection] (state, data) {
    state.selectedMonoselection = data
  },

  [types.selected] (state, data) {
    state.selected = data
  }
}
