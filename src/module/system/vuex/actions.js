import * as types from './mutationsTypes'
import services from '@/module/system/services'

export const load = ({ commit }) => {
  services.load()
    .then(
      r => {
        commit(types.data, r.data)
      },
      e => console.log(e)
    )
}

export const loadFbyTestManufs = ({ commit }, selectedTestManufs) => {
  services.loadFromTestManufs(selectedTestManufs.map(i => i.id))
    .then(
      r => {
        commit(types.fromTestManufs, r.data)
      },
      e => console.log(e)
    )
}

export const loadFromDevManufs = ({ commit }, selectedDevManufs) => {
  services.loadFromDevManufs(selectedDevManufs.map(i => i.id))
    .then(
      r => {
        commit(types.data, r.data)
      },
      e => console.log(e)
    )
}

export const loadFromAgentFbyDevManufs = ({ commit }, parameter) => {
  commit(types.loading, true)
  services.loadFromAgentFbyDevManufs(parameter)
    .then(
      r => {
        commit(types.dataFromTestManufs, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadFromAgentGroupDevManufs = ({ commit }) => {
  services.loadFromAgentGroupDevManufs()
    .then(
      r => {
        commit(types.ofAgentGroupDevManufs, r.data)
      },
      e => console.log(e)
    )
}

export const setSelected = ({ commit, getters, dispatch }, selectedSystems) => {
  commit(types.selected, selectedSystems)

  // dispatch('loadProjectsByTestManufsAndSystems', {
  //   selectedTestManuf: getters.selectedTestManufs,
  //   selectedSystem: getters.selectedSystems
  // })

  // dispatch('setSelectedProjects', [])
}

export const setDevManufs = ({ commit }, paramenter) => {
  commit(types.devManufs, paramenter)
}
