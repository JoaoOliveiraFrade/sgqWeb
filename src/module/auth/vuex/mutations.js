import * as types from './mutationsTypes'

export default {
  [types.user] (state, parameter) {
    state.user = parameter
  },

  [types.token] (state, parameter) {
    state.token = parameter
  },

  [types.profiles] (state, parameter) {
    state.profiles = parameter
  },

  [types.to] (state, parameter) {
    state.to = parameter
  }
}
