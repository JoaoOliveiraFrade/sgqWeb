export const projectFilterTerm = ({ projectFilterTerm }) => projectFilterTerm

export const projects = ({ projects }) => projects

export const projectsByTestManufsAndSystems = ({ projectsByTestManufsAndSystems }) => projectsByTestManufsAndSystems

export const projectsByTestManufsAndSystemsLoading = ({ projectsByTestManufsAndSystemsLoading }) => projectsByTestManufsAndSystemsLoading

export const selectedProjects = ({ selectedProjects }) => selectedProjects

export const projectsFilteredByTerm = ({ projectsByTestManufsAndSystems, projectFilterProperties, projectFilterTerm }) => {
  if (projectFilterTerm !== '') {
    let words = projectFilterTerm.split('+')

    return projectsByTestManufsAndSystems.filter(item => {
      return words.every(word => {
        return projectFilterProperties.some(filterProperty => {
          return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
      })
    })
  } else {
    return projectsByTestManufsAndSystems
  }
}

export const project = ({ project }) => project
