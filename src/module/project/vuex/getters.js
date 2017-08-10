export const projectFilterTerm = ({ projectFilterTerm }) => projectFilterTerm

export const projects = ({ projects }) => projects

export const projectsByTestManufsAndSystems = ({ projectsByTestManufsAndSystems }) => projectsByTestManufsAndSystems

export const projectsLoading = ({ projectsLoading }) => projectsLoading

export const selectedProjects = ({ selectedProjects }) => selectedProjects

export const projectsFilteredByTerm = ({ projectFilterProperties, projectFilterTerm }) => projectsFiltered => {
  if (projectFilterTerm !== '') {
    let words = projectFilterTerm.split('+')

    return projectsFiltered.filter(item => {
      return words.every(word => {
        return projectFilterProperties.some(filterProperty => {
          return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
      })
    })
  } else {
    return projectsFiltered
  }
}

export const project = ({ project }) => project

export const projectConfirmed = ({ projectConfirmed }) => projectConfirmed
