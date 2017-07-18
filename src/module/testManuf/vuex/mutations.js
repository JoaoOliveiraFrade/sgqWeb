import * as types from './mutationsTypes'

export default {
  [types.setTestManufs] (state, testManufs) {
    state.testManufs = testManufs
  },
  [types.setSelectedTestManufs] (state, selectedTestManufs) {
    state.selectedTestManufs = selectedTestManufs
  }
}
