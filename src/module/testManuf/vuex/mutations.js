import * as types from './mutationsTypes'

export default {
  [types.testManufs] (state, data) {
    state.testManufs = data
  },
  [types.selectedTestManufs] (state, data) {
    state.selectedTestManufs = data
  }
}
