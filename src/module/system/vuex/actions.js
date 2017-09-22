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

export const loadOfTestManufs = ({ commit }, selectedTestManufs) => {
  services.loadOfTestManufs(selectedTestManufs.map(i => i.id))
    .then(
      r => {
        commit(types.ofTestManufs, r.data)
      },
      e => console.log(e)
    )
}

export const loadOfQueueGroupDevManufs = ({ commit }) => {
  services.loadOfQueueGroupDevManufs()
    .then(
      r => {
        commit(types.ofQueueGroupDevManufs, r.data)
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
