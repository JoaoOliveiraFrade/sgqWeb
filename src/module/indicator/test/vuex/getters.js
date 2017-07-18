export const indicatorOfTestIsShow = ({ indicatorOfTestIsShow }) => indicatorOfTestIsShow

export const produtivityIndGroupTestManuf = ({ produtivityIndAllFiltered }) => {
  let result = []
  produtivityIndAllFiltered.forEach(i => {
    let index = result.findIndex(o => o.testManuf === i.testManuf)
    if (index > -1) {
      result[index].passed += i.passed
      result[index].failed += i.failed
      result[index].productivity += i.productivity
    } else {
      result.push({
        testManuf: i.testManuf,
        passed: i.passed,
        failed: i.failed,
        productivity: i.productivity
      })
    }
  })
  return result.sort((a, b) => a.productivity > b.productivity ? 1 : -1)
}

export const produtivityIndByTestManufGroupSystem = ({ produtivityIndAllFiltered }) => (testManuf) => {
  let result = []
  produtivityIndAllFiltered.filter(i => i.testManuf === testManuf).forEach(i => {
    let index = result.findIndex(o => o.system === i.system)
    if (index > -1) {
      result[index].passed += i.passed
      result[index].failed += i.failed
      result[index].productivity += i.productivity
    } else {
      result.push({
        system: i.system,
        passed: i.passed,
        failed: i.failed,
        productivity: i.productivity
      })
    }
  })
  return result.sort((a, b) => a.productivity > b.productivity ? 1 : -1)
}

export const produtivityIndFilteredByChart = ({ produtivityIndAllFiltered, produtivityIndChartTestManufSelected, produtivityIndChartSystemSelected }) => {
  let ds = []
  if (produtivityIndChartTestManufSelected === '' && produtivityIndChartSystemSelected === '') {
    ds = produtivityIndAllFiltered
  } else {
    if (produtivityIndChartSystemSelected === '') {
      ds = produtivityIndAllFiltered.filter(i => i.testManuf === produtivityIndChartTestManufSelected)
    } else {
      ds = produtivityIndAllFiltered.filter(i => i.testManuf === produtivityIndChartTestManufSelected && i.system === produtivityIndChartSystemSelected)
    }
  }
  return ds
}

export const produtivityIndGroupTimeline = (state, { produtivityIndFilteredByChart }) => {
  let result = []
  produtivityIndFilteredByChart.forEach(i => {
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

export const produtivityIndTotal = (state, { produtivityIndFilteredByChart }) => {
  let passed = 0
  let failed = 0
  let productivity = 0
  produtivityIndFilteredByChart.forEach(i => {
    passed += i.passed
    failed += i.failed
    productivity += i.productivity
  })
  return { passed, failed, productivity }
}

export const produtivityIndChartTitle = ({ produtivityIndChartTestManufSelected, produtivityIndChartSystemSelected }) => {
  if (produtivityIndChartTestManufSelected === '' && produtivityIndChartSystemSelected === '') {
    return 'Fáb.Teste / Sistema'
  } else {
    if (produtivityIndChartSystemSelected === '') {
      return produtivityIndChartTestManufSelected.charAt(0).toUpperCase() + produtivityIndChartTestManufSelected.slice(1).toLowerCase() + ' / Sistema'
    } else {
      return produtivityIndChartTestManufSelected.charAt(0).toUpperCase() + produtivityIndChartTestManufSelected.slice(1).toLowerCase() + ' / ' + produtivityIndChartSystemSelected.charAt(0).toUpperCase() + produtivityIndChartSystemSelected.slice(1).toLowerCase()
    }
  }
}

// -----------
// rateRejectionEvidenceInd

export const rateRejectionEvidenceIndFilteredByChart = ({ rateRejectionEvidenceIndAllFiltered, rateRejectionEvidenceIndChartTestManufSelected, rateRejectionEvidenceIndChartSystemSelected }) => {
  let ds = []
  if (rateRejectionEvidenceIndChartTestManufSelected === '' && rateRejectionEvidenceIndChartSystemSelected === '') {
    ds = rateRejectionEvidenceIndAllFiltered
  } else {
    if (rateRejectionEvidenceIndChartSystemSelected === '') {
      ds = rateRejectionEvidenceIndAllFiltered.filter(i => i.testManuf === rateRejectionEvidenceIndChartTestManufSelected)
    } else {
      ds = rateRejectionEvidenceIndAllFiltered.filter(i => i.testManuf === rateRejectionEvidenceIndChartTestManufSelected && i.system === rateRejectionEvidenceIndChartSystemSelected)
    }
  }
  return ds
}

export const rateRejectionEvidenceIndTotal = (state, { rateRejectionEvidenceIndFilteredByChart }) => {
  let tiEvidences = 0
  let tiRejections = 0

  let uatEvidences = 0
  let uatRejections = 0

  let totalEvidences = 0
  let totalRejections = 0

  rateRejectionEvidenceIndFilteredByChart.forEach(i => {
    tiEvidences += i.tiEvidences
    tiRejections += i.tiRejections

    uatEvidences += i.uatiEvidences
    uatRejections += i.uatRejections

    totalEvidences += i.totaliEvidences
    totalRejections += i.totalRejections
  })
  return {
    tiEvidences,
    tiRejections,

    uatEvidences,
    uatRejections,

    totalEvidences,
    totalRejections
  }
}
