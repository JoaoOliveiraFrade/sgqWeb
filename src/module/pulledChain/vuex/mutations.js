import * as types from './mutationsTypes'

export default {
  [types.pulledChainProjects] (state, value) {
    state.pulledChainProjects = value
  },
  [types.pulledChainProjectsFilteredByText] (state, value) {
    state.pulledChainProjectsFilteredByText = value
  },
  [types.pulledChainFilterTerm] (state, value) {
    state.pulledChainFilterTerm = value
  }
}
