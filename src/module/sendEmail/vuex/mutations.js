import * as types from './mutationsTypes'

export default {
  [types.emailTo] (state, parameter) {
    state.emailTo = parameter
  },

  [types.subject] (state, parameter) {
    state.subject = parameter
  },

  [types.format] (state, parameter) {
    state.format = parameter
  },

  [types.sending] (state, parameter) {
    state.sending = parameter
  }
}
