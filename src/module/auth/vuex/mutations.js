import * as types from './mutationsTypes'

export default {
  [types.user] (state, data) {
    state.user = data
  },

  [types.token] (state, data) {
    state.token = data
  },

  [types.currentUserProfiles] (state, data) {
    state.currentUserProfiles = data
  }
}
