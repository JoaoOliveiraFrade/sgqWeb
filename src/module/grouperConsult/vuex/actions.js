import * as types from './mutationsTypes'
import services from '../services'
import ServicesProjectXgrouper from '@/module/projectXgrouper/services'
import ServicesProject from '@/module/project/testProj/services'
// import Toastr from 'toastr'

export const loadGroupers = ({ commit }) => {
  services.getAll().then(r => {
    // Toastr.success('Agrupadores carregados!', '', { timeOut: 2000 })
    commit(types.groupers, r.data)
  })
}
export const setFilterTerm = ({ commit }, filterTerm) => {
  commit(types.filterTerm, filterTerm)
}
export const setGrouper = ({ commit }, grouperId) => {
  // Toastr.success('Agrupador selecionado!', '', { timeOut: 1000 })
  services.get(grouperId).then(r => {
    let grouper = r.data

    commit(types.grouper, grouper)

    ServicesProjectXgrouper.getByGrouper(grouper.id).then(pg => {
      if (pg.data.length !== 0) {
        let projectsIds = pg.data.map(i => (i.project)).join()

        ServicesProject.getProjectsByIds(projectsIds).then(r => {
          commit(types.grouperProjects, r.data)
        })
      } else {
        commit(types.grouperProjects, [])
      }
    })
  })
}
