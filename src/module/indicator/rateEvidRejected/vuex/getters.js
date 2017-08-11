export const rateEvidRejectedLoading = ({ rateEvidRejectedLoading }) => rateEvidRejectedLoading

export const rateEvidRejectedGroupTestManuf = ({ rateEvidRejected }) => {
  let result = []
  rateEvidRejected.forEach(p => {
    let index = result.findIndex(r => r.testManuf === p.testManuf)
    if (index > -1) {
      result[index].tiEvidences += p.tiEvidences
      result[index].tiRejections += p.tiRejections
      result[index].uatEvidences += p.uatEvidences
      result[index].uatRejections += p.uatRejections
      result[index].totalEvidences += p.totalEvidences
      result[index].totalRejections += p.totalRejections
    } else {
      result.push({
        testManuf: p.testManuf,
        tiEvidences: p.tiEvidences,
        tiRejections: p.tiRejections,
        uatEvidences: p.uatEvidences,
        uatRejections: p.uatRejections,
        totalEvidences: p.totalEvidences,
        totalRejections: p.totalRejections
      })
    }
  })
  return result.filter(r => r.totalRejections > 0).sort((a, b) => a.totalRejections > b.totalRejections ? 1 : -1)
}

export const rateEvidRejectedByTestManufGroupSystem = ({ rateEvidRejected }) => (testManuf) => {
  let result = []
  rateEvidRejected.filter(p => p.testManuf === testManuf).forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].tiEvidences += p.tiEvidences
      result[index].tiRejections += p.tiRejections
      result[index].uatEvidences += p.uatEvidences
      result[index].uatRejections += p.uatRejections
      result[index].totalEvidences += p.totalEvidences
      result[index].totalRejections += p.totalRejections
    } else {
      result.push({
        system: p.system,
        tiEvidences: p.tiEvidences,
        tiRejections: p.tiRejections,
        uatEvidences: p.uatEvidences,
        uatRejections: p.uatRejections,
        totalEvidences: p.totalEvidences,
        totalRejections: p.totalRejections
      })
    }
  })
  return result.filter(r => r.totalRejections > 0).sort((a, b) => a.totalRejections > b.totalRejections ? 1 : -1)
}

export const rateEvidRejectedFilteredByChart = ({ rateEvidRejected, rateEvidRejectedChartTestManufSelected, rateEvidRejectedChartSystemSelected }) => {
  let ds = []
  if (rateEvidRejectedChartTestManufSelected === '' && rateEvidRejectedChartSystemSelected === '') {
    ds = rateEvidRejected
  } else {
    if (rateEvidRejectedChartSystemSelected === '') {
      ds = rateEvidRejected.filter(i => i.testManuf === rateEvidRejectedChartTestManufSelected)
    } else {
      ds = rateEvidRejected.filter(i => i.testManuf === rateEvidRejectedChartTestManufSelected && i.system === rateEvidRejectedChartSystemSelected)
    }
  }
  return ds
}

export const rateEvidRejectedGroupTimeline = (state, { rateEvidRejectedFilteredByChart }) => {
  let result = []
  rateEvidRejectedFilteredByChart.forEach(i => {
    let index = result.findIndex(o => o.monthYear === i.monthYear)
    if (index > -1) {
      result[index].tiEvidences += i.tiEvidences
      result[index].tiRejections += i.tiRejections
      result[index].uatEvidences += i.uatEvidences
      result[index].uatRejections += i.uatRejections
      result[index].totalEvidences += i.totalEvidences
      result[index].totalRejections += i.totalRejections
    } else {
      result.push({
        monthYear: i.monthYear,
        yearMonth: i.yearMonth,
        tiEvidences: i.tiEvidences,
        tiRejections: i.tiRejections,
        uatEvidences: i.uatEvidences,
        uatRejections: i.uatRejections,
        totalEvidences: i.totalEvidences,
        totalRejections: i.totalRejections
      })
    }
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const rateEvidRejectedTotal = (state, { rateEvidRejectedFilteredByChart }) => {
  let tiEvidences = 0
  let tiRejections = 0
  let uatEvidences = 0
  let uatRejections = 0
  let totalEvidences = 0
  let totalRejections = 0
  rateEvidRejectedFilteredByChart.forEach(i => {
    tiEvidences += i.tiEvidences
    tiRejections += i.tiRejections
    uatEvidences += i.uatEvidences
    uatRejections += i.uatRejections
    totalEvidences += i.totalEvidences
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

export const rateEvidRejectedChartTitle = ({ rateEvidRejectedChartTestManufSelected, rateEvidRejectedChartSystemSelected }) => {
  if (rateEvidRejectedChartTestManufSelected === '' && rateEvidRejectedChartSystemSelected === '') {
    return 'Fáb.Teste / Sistema'
  } else {
    if (rateEvidRejectedChartSystemSelected === '') {
      return rateEvidRejectedChartTestManufSelected.charAt(0).toUpperCase() + rateEvidRejectedChartTestManufSelected.slice(1).toLowerCase() + ' / Sistema'
    } else {
      return rateEvidRejectedChartTestManufSelected.charAt(0).toUpperCase() + rateEvidRejectedChartTestManufSelected.slice(1).toLowerCase() + ' / ' + rateEvidRejectedChartSystemSelected.charAt(0).toUpperCase() + rateEvidRejectedChartSystemSelected.slice(1).toLowerCase()
    }
  }
}

export const selectedRejectionType = ({ selectedRejectionType }) => selectedRejectionType
