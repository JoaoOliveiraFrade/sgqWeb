export const distinctCycle = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.cycle === el.cycle) === index
  ).map(m => ({ id: m.cycle, name: m.cycle })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctScenario = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.scenario === el.scenario) === index
  ).map(m => ({ id: m.scenario, name: m.scenario })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctTestCase = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.testCase === el.testCase) === index
  ).map(m => ({ id: m.testCase, name: m.testCase })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctIteration = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.iteration === el.iteration) === index
  ).map(m => ({ id: m.iteration, name: m.iteration })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctMacrocenary = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.macrocenary === el.macrocenary) === index
  ).map(m => ({ id: m.macrocenary, name: m.macrocenary })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctSystem = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.system === el.system) === index
  ).map(m => ({ id: m.system, name: m.system })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctUAT = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.uat === el.uat) === index
  ).map(m => ({ id: m.uat, name: m.uat })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctPrerequisite = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.prerequisite === el.prerequisite) === index
  ).map(m => ({ id: m.prerequisite, name: m.prerequisite })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctSuccessorTestCase = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.successorTestCase === el.successorTestCase) === index
  ).map(m => ({ id: m.successorTestCase, name: m.successorTestCase })).sort((a, b) => a.name > b.name ? 1 : -1)
}
export const distinctName = ({ data }) => {
  return data.filter((el, index, arr) =>
    arr.findIndex(i => i.name === el.name) === index
  ).map(m => ({ id: m.name, name: m.name })).sort((a, b) => a.name > b.name ? 1 : -1)
}
