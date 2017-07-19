export const pulledChainProjects = ({ pulledChainProjects }) => pulledChainProjects
export const pulledChainFilterTerm = ({ pulledChainFilterTerm }) => pulledChainFilterTerm

export const pulledChainProjectsFilteredByTerm = ({ pulledChainProjects, pulledChainFilterProperties, pulledChainFilterTerm }) => {
  if (pulledChainFilterTerm !== '') {
    let words = pulledChainFilterTerm.split('+')

    return pulledChainProjects.filter(item => {
      return words.every(word => {
        return pulledChainFilterProperties.some(filterProperty => {
          return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
      })
    })
  } else {
    return pulledChainProjects
  }
}

export const pulledChainProjectSelected = ({ pulledChainProjectSelected }) => pulledChainProjectSelected
