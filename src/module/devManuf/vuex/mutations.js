import * as types from './mutationsTypes'

export default {
  [types.data] (state, parameter) {
    state.data = parameter
  },
  [types.selected] (state, parameter) {
    state.selected = parameter
  }
}
