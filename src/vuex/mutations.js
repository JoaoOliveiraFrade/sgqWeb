import * as types from './mutationsTypes.js'

export default {
  [types.setFeatureName] (state, name) {
    state.featureName = name
  }
}
