import * as types from './mutationsTypes'
import services from '../services'
// import ServicesProjectXgrouper from '@/module/projectXgrouper/services'
// import ServicesProject from '@/module/project/testProj/services'
// import Toastr from 'toastr'

export const loadData = ({ commit }) => {
  services.loadData().then(r => {
    // Toastr.success('Agrupadores carregados!', '', { timeOut: 2000 })
    commit(types.data, r.data)
  })
}

export const loadById = ({ commit }, id) => {
  // // Toastr.success('Agrupador selecionado!', '', { timeOut: 1000 })
  // services.loadById(id).then(r => {
  //   let grouper = r.data

  //   commit(types.grouper, grouper)

  //   // ServicesProjectXgrouper.getByGrouper(grouper.id).then(pg => {
  //   //   if (pg.data.length !== 0) {
  //   //     let projectsIds = pg.data.map(i => (i.project)).join()

  //   //     ServicesProject.getProjectsByIds(projectsIds).then(r => {
  //   //       commit(types.grouperProjects, r.data)
  //   //     })
  //   //   } else {
  //   //     commit(types.grouperProjects, [])
  //   //   }
  //   // })
  // })
}

export const setFilterTerm = ({ commit }, filterTerm) => {
  commit(types.filterTerm, filterTerm)
}

export const setSelectedMonoselection = ({ commit }, parameter) => {
  commit(types.selectedMonoselection, parameter)

  commit(types.state, 'show')

  // Toastr.success('Agrupador selecionado!', '', { timeOut: 1000 })

  // services.get(grouperId).then(r => {
  //   let grouper = r.data

  //   commit(types.grouper, grouper)

  //   ServicesProjectXgrouper.getByGrouper(grouper.id).then(pg => {
  //     if (pg.data.length !== 0) {
  //       let projectsIds = pg.data.map(i => (i.project)).join()

  //       ServicesProject.getProjectsByIds(projectsIds).then(r => {
  //         commit(types.grouperProjects, r.data)
  //       })
  //     } else {
  //       commit(types.grouperProjects, [])
  //     }
  //   })
  // })
}

export const setState = ({ commit }, paramenter) => {
  commit(types.state, paramenter)
}
