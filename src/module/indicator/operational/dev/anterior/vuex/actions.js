// import * as types from './mutationsTypes'
// import services from '../services'
// import ServicesProjectXgrouper from '@/module/projectXgrouper/services'
// import ServicesProject from '@/module/project/testProj/services'
// // import Toastr from 'toastr'

// export const loadGroupers = (context) => {
//   services.getData().then(r => {
//     // Toastr.success('Agrupadores carregados!', '', { timeOut: 2000 })
//     context.commit(types.setGroupers, r.data)
//   })
// }
// export const setFilterTerm = (context, filterTerm) => {
//   context.commit(types.setFilterTerm, filterTerm)
// }
// export const setGrouper = (context, grouperId) => {
//   // Toastr.success('Agrupador selecionado!', '', { timeOut: 1000 })
//   services.get(grouperId).then(r => {
//     let grouper = r.data

//     context.commit(types.setGrouper, grouper)

//     ServicesProjectXgrouper.getByGrouper(grouper.id).then(pg => {
//       if (pg.data.length !== 0) {
//         let projectsIds = pg.data.map(i => (i.project)).join()

//         ServicesProject.getProjectsByIds(projectsIds)
//           .then(r => {
//             context.commit(types.setProjects, r.data)
//           }
//         )
//       } else {
//         context.commit(types.setProjects, [])
//       }
//     })
//   })
// }

