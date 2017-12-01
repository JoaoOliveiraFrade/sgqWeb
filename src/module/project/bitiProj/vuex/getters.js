export const dataFilteredByTerm = ({ data, filterTerm, filterProperties }) => {
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

export const distinctState = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.state === el.state) === index
  ).map(m => ({ id: m.state, name: m.state })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctClassification = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.classification === el.classification) === index
  ).map(m => ({ id: m.classification, name: m.classification })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctUN = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.un === el.un) === index
  ).map(m => ({ id: m.un, name: m.un })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctReleaseSGQ = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.releaseSGQFormat === el.releaseSGQFormat) === index
  ).map(m => ({ id: m.releaseSGQFormat, name: m.releaseSGQFormat, order: m.releaseSGQ })).sort((a, b) => a.order > b.order ? 1 : -1)
}
export const distinctReleaseClarity = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.releaseClarityFormat === el.releaseClarityFormat) === index
  ).map(m => ({ id: m.releaseClarityFormat, name: m.releaseClarityFormat, order: m.releaseClarity })).sort((a, b) => a.order > b.order ? 1 : -1)
}
export const distinctCategory = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.category === el.category) === index
  ).map(m => ({ id: m.category, name: m.category })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctProjectManager = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.projectManager === el.projectManager) === index
  ).map(m => ({ id: m.projectManager, name: m.projectManager })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctTechnicalLeader = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.technicalLeader === el.technicalLeader) === index
  ).map(m => ({ id: m.technicalLeader, name: m.technicalLeader })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctLTManager = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.LTManager === el.LTManager) === index
  ).map(m => ({ id: m.LTManager, name: m.LTManager })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctPMO = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.PMO === el.PMO) === index
  ).map(m => ({ id: m.PMO, name: m.PMO })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctBusinessAnalyst = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.businessAnalyst === el.businessAnalyst) === index
  ).map(m => ({ id: m.businessAnalyst, name: m.businessAnalyst })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctTestLeader = (state, { dataFilteredByTerm }) => {
  return dataFilteredByTerm.filter((el, index, arr) =>
    arr.findIndex(i => i.testLeader === el.testLeader) === index
  ).map(m => ({ id: m.testLeader, name: m.testLeader })).sort((a, b) => a.name > b.name ? 1 : -1)
}
