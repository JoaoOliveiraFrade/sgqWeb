import * as types from './mutationsTypes'

export default {
  [types.setSelectedProject] (state, parameter) {
    state.setSelectedProject = parameter
  }
}
