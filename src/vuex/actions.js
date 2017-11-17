import * as types from './mutationsTypes'

export const setFeatureName = ({ commit }, parameter) => {
  commit(types.setFeatureName, parameter)
}
