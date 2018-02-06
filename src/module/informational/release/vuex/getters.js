export const data = ({ data }) => data

export const filterTerm = ({ filterTerm }) => filterTerm

export const filterProperties = ({ filterProperties }) => filterProperties

export const filteredByTerm = ({ data, filterProperties, filterTerm }) => {
  if (filterTerm !== '') {
    let words = filterTerm.split('+')

    return data.filter(item => {
      return words.every(word => {
        return filterProperties.some(filterProperty => {
          return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
      })
    })
  } else {
    return data
  }
}

export const grouper = ({ grouper }) => grouper
export const grouperProjects = ({ grouperProjects }) => grouperProjects
export const grouperProjectsTotal = ({ grouperProjects }) => grouperProjects.reduce((sum, e) => sum + e.total, 0)
export const grouperProjectsPlanned = ({ grouperProjects }) => grouperProjects.reduce((sum, e) => sum + e.planned, 0)
export const grouperProjectsRealized = ({ grouperProjects }) => grouperProjects.reduce((sum, e) => sum + e.realized, 0)
