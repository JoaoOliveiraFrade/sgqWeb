export const produtivityLoading = ({ produtivityLoading }) => produtivityLoading

export const produtivityGroupTestManuf = ({ produtivitys }) => {
  let result = []
  produtivitys.forEach(p => {
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

export const produtivityByTestManufGroupSystem = ({ produtivitys }) => (testManuf) => {
  let result = []
  produtivitys.filter(p => p.testManuf === testManuf).forEach(p => {
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

export const produtivityFilteredByChart = ({ produtivitys, produtivityChartTestManufSelected, produtivityChartSystemSelected }) => {
  let ds = []
  if (produtivityChartTestManufSelected === '' && produtivityChartSystemSelected === '') {
    ds = produtivitys
  } else {
    if (produtivityChartSystemSelected === '') {
      ds = produtivitys.filter(i => i.testManuf === produtivityChartTestManufSelected)
    } else {
      ds = produtivitys.filter(i => i.testManuf === produtivityChartTestManufSelected && i.system === produtivityChartSystemSelected)
    }
  }
  return ds
}

export const produtivityGroupTimeline = (state, { produtivityFilteredByChart }) => {
  let result = []
  produtivityFilteredByChart.forEach(i => {
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

export const produtivityTotal = (state, { produtivityFilteredByChart }) => {
  let passed = 0
  let failed = 0
  let productivity = 0
  produtivityFilteredByChart.forEach(i => {
    passed += i.passed
    failed += i.failed
    productivity += i.productivity
  })
  return { passed, failed, productivity }
}

export const produtivityChartTitle = ({ produtivityChartTestManufSelected, produtivityChartSystemSelected }) => {
  if (produtivityChartTestManufSelected === '' && produtivityChartSystemSelected === '') {
    return 'Fáb.Teste / Sistema'
  } else {
    if (produtivityChartSystemSelected === '') {
      return produtivityChartTestManufSelected.charAt(0).toUpperCase() + produtivityChartTestManufSelected.slice(1).toLowerCase() + ' / Sistema'
    } else {
      return produtivityChartTestManufSelected.charAt(0).toUpperCase() + produtivityChartTestManufSelected.slice(1).toLowerCase() + ' / ' + produtivityChartSystemSelected.charAt(0).toUpperCase() + produtivityChartSystemSelected.slice(1).toLowerCase()
    }
  }
}
