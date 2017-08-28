import * as types from './mutationsTypes'

export default {
  [types.setFeatureName] (state, name) {
    state.featureName = name
  }
}
