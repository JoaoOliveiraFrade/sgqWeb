import * as types from './mutationsTypes'
import services from '../services'
import ServicesProjectXgrouper from '@/module/projectXgrouper/services'
import ServicesProject from '@/module/project/testProj/services'
// import Toastr from 'toastr'

export const loadData = ({ commit }) => {
  services.loadData().then(r => {
    // Toastr.success('Agrupadores carregados!', '', { timeOut: 2000 })
    commit(types.data, r.data)
  })
}

export const setFilterTerm = ({ commit }, filterTerm) => {
  commit(types.filterTerm, filterTerm)
}

export const setSelectedById = ({ commit, dispatch }, grouperId) => {
  services.loadById(grouperId).then(r => {
    dispatch('grouper/setSelected', r.data, { root: true })
  })
}

export const setSelected = ({ commit }, selected) => {
  commit(types.selected, selected)

  // Toastr.success('Agrupador selecionado!', '', { timeOut: 1000 })

  ServicesProjectXgrouper.getByGrouper(selected.id).then(pg => {
    if (pg.data.length !== 0) {
      let projectsIds = pg.data.map(i => (i.project)).join()

      ServicesProject.getProjectsByIds(projectsIds).then(r => {
        commit(types.grouperProjects, r.data)
      })
    } else {
      commit(types.grouperProjects, [])
    }
  })
}
