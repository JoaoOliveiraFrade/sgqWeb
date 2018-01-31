export const trgProject = ({ selectedRelease }) => ({ subproject: 'TRG2017', delivery: '' })

// export const project = ({ selectedRelease }) => ({ subproject: 'TRG' + selectedRelease.year, delivery: tt })

// export const projectFilterTerm = ({ projectFilterTerm }) => projectFilterTerm

// export const projects = ({ projects }) => projects

// export const projectsByTestManufsAndSystems = ({ projectsByTestManufsAndSystems }) => projectsByTestManufsAndSystems

// export const projectsLoading = ({ projectsLoading }) => projectsLoading

// export const selectedProject = ({ selectedProject }) => selectedProject

// export const projectsFilteredByTerm = ({ filterProperties, projectFilterTerm }) => projects => {
//   if (projectFilterTerm !== '') {
//     let words = projectFilterTerm.split('+')

//     return projects.filter(item => {
//       return words.every(word => {
//         return filterProperties.some(filterProperty => {
//           return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
//         })
//       })
//     })
//   } else {
//     return projects
//   }
// }

// export const filteredByTerm = ({ data, filterTerm, filterProperties }) => {
// if (filterTerm !== '') {
//   let words = filterTerm.split('+')

//   return data.filter(item => {
//     return words.every(word => {
//       return filterProperties.some(filterProperty => {
//         return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
//       })
//     })
//   })
// } else {
//   return data
// }
// }
