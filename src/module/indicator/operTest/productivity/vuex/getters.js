export const groupTestManuf = ({ data }) => {
  let result = []
  data.forEach(p => {
    let index = result.findIndex(r => r.testManuf === p.testManuf)
    if (index > -1) {
      result[index].passed += p.passed
      result[index].failed += p.failed
      result[index].productivity += p.productivity
    } else {
      result.push({
        testManuf: p.testManuf,
        passed: p.passed,
        failed: p.failed,
        productivity: p.productivity
      })
    }
  })
  return result.sort((a, b) => a.productivity > b.productivity ? 1 : -1)
}

export const byTestManufGroupSystem = ({ data }) => (testManuf) => {
  let result = []
  data.filter(p => p.testManuf === testManuf).forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].passed += p.passed
      result[index].failed += p.failed
      result[index].productivity += p.productivity
    } else {
      result.push({
        system: p.system,
        passed: p.passed,
        failed: p.failed,
        productivity: p.productivity
      })
    }
  })
  return result.sort((a, b) => a.productivity > b.productivity ? 1 : -1)
}

export const filteredByChart = ({ data, testManufSelected, systemSelected }) => {
  let ds = []
  if (testManufSelected === '' && systemSelected === '') {
    ds = data
  } else {
    if (systemSelected === '') {
      ds = data.filter(i => i.testManuf === testManufSelected)
    } else {
      ds = data.filter(i => i.testManuf === testManufSelected && i.system === systemSelected)
    }
  }
  return ds
}

export const groupTimeline = (state, { filteredByChart }) => {
  let result = []
  filteredByChart.forEach(i => {
    let index = result.findIndex(o => o.monthYear === i.monthYear)
    if (index > -1) {
      result[index].passed += i.passed
      result[index].failed += i.failed
      result[index].productivity += i.productivity
    } else {
      result.push({
        monthYear: i.monthYear,
        yearMonth: i.yearMonth,
        passed: i.passed,
        failed: i.failed,
        productivity: i.productivity
      })
    }
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = (state, { filteredByChart }) => {
  let passed = 0
  let failed = 0
  let productivity = 0
  filteredByChart.forEach(i => {
    passed += i.passed
    failed += i.failed
    productivity += i.productivity
  })
  return { passed, failed, productivity }
}

export const chartTitle = ({ testManufSelected, systemSelected }) => {
  if (testManufSelected === '' && systemSelected === '') {
    return 'Fáb.Teste / Sistema'
  } else {
    if (systemSelected === '') {
      return testManufSelected.charAt(0).toUpperCase() + testManufSelected.slice(1).toLowerCase() + ' / Sistema'
    } else {
      return testManufSelected.charAt(0).toUpperCase() + testManufSelected.slice(1).toLowerCase() + ' / ' + systemSelected.charAt(0).toUpperCase() + systemSelected.slice(1).toLowerCase()
    }
  }
}
