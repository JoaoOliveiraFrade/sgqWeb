import * as types from './mutationsTypes'

export default {
  [types.setSelectedProjects] (state, parameter) {
    state.setSelectedProjects = parameter
  }
}
