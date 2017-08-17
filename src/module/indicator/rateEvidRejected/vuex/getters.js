export const groupTestManufTI = ({ data }) => {
  let result = []
  data.forEach(p => {
    let index = result.findIndex(r => r.testManuf === p.testManuf)
    if (index > -1) {
      result[index].evidences += p.tiEvidences
      result[index].rejections += p.tiRejections
    } else {
      result.push({
        testManuf: p.testManuf,
        evidences: p.tiEvidences,
        rejections: p.tiRejections
      })
    }
  })
  return result.filter(r => r.rejections > 0).sort((a, b) => a.rejections > b.rejections ? 1 : -1)
}

export const groupTestManufUAT = ({ data }) => {
  let result = []
  data.forEach(p => {
    let index = result.findIndex(r => r.testManuf === p.testManuf)
    if (index > -1) {
      result[index].evidences += p.uatEvidences
      result[index].rejections += p.uatRejections
    } else {
      result.push({
        testManuf: p.testManuf,
        evidences: p.uatEvidences,
        rejections: p.uatRejections
      })
    }
  })
  return result.filter(r => r.rejections > 0).sort((a, b) => a.rejections > b.rejections ? 1 : -1)
}

export const groupTestManufTotal = ({ data }) => {
  let result = []
  data.forEach(p => {
    let index = result.findIndex(r => r.testManuf === p.testManuf)
    if (index > -1) {
      result[index].evidences += p.totalEvidences
      result[index].rejections += p.totalRejections
    } else {
      result.push({
        testManuf: p.testManuf,
        evidences: p.totalEvidences,
        rejections: p.totalRejections
      })
    }
  })
  return result.filter(r => r.rejections > 0).sort((a, b) => a.rejections > b.rejections ? 1 : -1)
}

export const byTestManufGroupSystemTI = ({ data }) => (testManuf) => {
  let result = []
  data.filter(p => p.testManuf === testManuf).forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].evidences += p.tiEvidences
      result[index].rejections += p.tiRejections
    } else {
      result.push({
        system: p.system,
        evidences: p.tiEvidences,
        rejections: p.tiRejections
      })
    }
  })
  return result.filter(r => r.rejections > 0).sort((a, b) => a.rejections > b.rejections ? 1 : -1)
}

export const byTestManufGroupSystemUAT = ({ data }) => (testManuf) => {
  let result = []
  data.filter(p => p.testManuf === testManuf).forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].evidences += p.uatEvidences
      result[index].rejections += p.uatRejections
    } else {
      result.push({
        system: p.system,
        evidences: p.uatEvidences,
        rejections: p.uatRejections
      })
    }
  })
  return result.filter(r => r.rejections > 0).sort((a, b) => a.rejections > b.rejections ? 1 : -1)
}

export const byTestManufGroupSystemTotal = ({ data }) => (testManuf) => {
  let result = []
  data.filter(p => p.testManuf === testManuf).forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].evidences += p.totalEvidences
      result[index].rejections += p.totalRejections
    } else {
      result.push({
        system: p.system,
        evidences: p.totalEvidences,
        rejections: p.totalRejections
      })
    }
  })
  return result.filter(r => r.rejections > 0).sort((a, b) => a.rejections > b.rejections ? 1 : -1)
}

export const groupTimeline = (state, { filteredByChart }) => {
  let result = []
  filteredByChart.forEach(i => {
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

export const totalTI = (state, { filteredByChartTI }) => {
  let evidences = 0
  let rejections = 0
  filteredByChartTI.forEach(i => {
    evidences += i.tiEvidences
    rejections += i.tiRejections
  })
  return {
    evidences,
    rejections
  }
}

export const totalUAT = (state, { filteredByChartUAT }) => {
  let evidences = 0
  let rejections = 0
  filteredByChartUAT.forEach(i => {
    evidences += i.uatEvidences
    rejections += i.uatRejections
  })
  return {
    evidences,
    rejections
  }
}

export const totalTotal = (state, { filteredByChartTotal }) => {
  let evidences = 0
  let rejections = 0
  filteredByChartTotal.forEach(i => {
    evidences += i.totalEvidences
    rejections += i.totalRejections
  })
  return {
    evidences,
    rejections
  }
}

export const filteredByChart = ({ selectedRejectionType }, {filteredByChartTI, filteredByChartUAT, filteredByChartTotal}) => {
  if (selectedRejectionType === 'Técnica') {
    return filteredByChartTI
  } else if (selectedRejectionType === 'Cliente') {
    return filteredByChartUAT
  } else {
    return filteredByChartTotal
  }
}

export const filteredByChartTI = ({ data, ChartTestManufSelectedTI, ChartSystemSelectedTI }) => {
  let ds = []
  if (ChartTestManufSelectedTI === '' && ChartSystemSelectedTI === '') {
    ds = data
  } else {
    if (ChartSystemSelectedTI === '') {
      ds = data.filter(i => i.testManuf === ChartTestManufSelectedTI)
    } else {
      ds = data.filter(i => i.testManuf === ChartTestManufSelectedTI && i.system === ChartSystemSelectedTI)
    }
  }
  return ds
}

export const filteredByChartUAT = ({ data, ChartTestManufSelectedUAT, ChartSystemSelectedUAT }) => {
  let ds = []
  if (ChartTestManufSelectedUAT === '' && ChartSystemSelectedUAT === '') {
    ds = data
  } else {
    if (ChartSystemSelectedUAT === '') {
      ds = data.filter(i => i.testManuf === ChartTestManufSelectedUAT)
    } else {
      ds = data.filter(i => i.testManuf === ChartTestManufSelectedUAT && i.system === ChartSystemSelectedUAT)
    }
  }
  return ds
}

export const filteredByChartTotal = ({ data, ChartTestManufSelectedTotal, ChartSystemSelectedTotal }) => {
  let ds = []
  if (ChartTestManufSelectedTotal === '' && ChartSystemSelectedTotal === '') {
    ds = data
  } else {
    if (ChartSystemSelectedTotal === '') {
      ds = data.filter(i => i.testManuf === ChartTestManufSelectedTotal)
    } else {
      ds = data.filter(i => i.testManuf === ChartTestManufSelectedTotal && i.system === ChartSystemSelectedTotal)
    }
  }
  return ds
}

export const chartTitleTI = ({ ChartTestManufSelectedTI, ChartSystemSelectedTI }) => {
  if (ChartTestManufSelectedTI === '' && ChartSystemSelectedTI === '') {
    return 'Fáb.Teste / Sistema'
  } else {
    if (ChartSystemSelectedTI === '') {
      return ChartTestManufSelectedTI.charAt(0).toUpperCase() + ChartTestManufSelectedTI.slice(1).toLowerCase() + ' / Sistema'
    } else {
      return ChartTestManufSelectedTI.charAt(0).toUpperCase() + ChartTestManufSelectedTI.slice(1).toLowerCase() + ' / ' + ChartSystemSelectedTI.charAt(0).toUpperCase() + ChartSystemSelectedTI.slice(1).toLowerCase()
    }
  }
}

export const chartTitleUAT = ({ ChartTestManufSelectedUAT, ChartSystemSelectedUAT }) => {
  if (ChartTestManufSelectedUAT === '' && ChartSystemSelectedUAT === '') {
    return 'Fáb.Teste / Sistema'
  } else {
    if (ChartSystemSelectedUAT === '') {
      return ChartTestManufSelectedUAT.charAt(0).toUpperCase() + ChartTestManufSelectedUAT.slice(1).toLowerCase() + ' / Sistema'
    } else {
      return ChartTestManufSelectedUAT.charAt(0).toUpperCase() + ChartTestManufSelectedUAT.slice(1).toLowerCase() + ' / ' + ChartSystemSelectedUAT.charAt(0).toUpperCase() + ChartSystemSelectedUAT.slice(1).toLowerCase()
    }
  }
}

export const chartTitleTotal = ({ ChartTestManufSelectedTotal, ChartSystemSelectedTotal }) => {
  if (ChartTestManufSelectedTotal === '' && ChartSystemSelectedTotal === '') {
    return 'Fáb.Teste / Sistema'
  } else {
    if (ChartSystemSelectedTotal === '') {
      return ChartTestManufSelectedTotal.charAt(0).toUpperCase() + ChartTestManufSelectedTotal.slice(1).toLowerCase() + ' / Sistema'
    } else {
      return ChartTestManufSelectedTotal.charAt(0).toUpperCase() + ChartTestManufSelectedTotal.slice(1).toLowerCase() + ' / ' + ChartSystemSelectedTotal.charAt(0).toUpperCase() + ChartSystemSelectedTotal.slice(1).toLowerCase()
    }
  }
}
