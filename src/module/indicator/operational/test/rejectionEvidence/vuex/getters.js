export const dataBySelectedRejectionType = ({data, selectedRejectionType}) => {
  if (selectedRejectionType === 'Técnica') {
    return data.map(i => ({
      testManuf: i.testManuf,
      system: i.system,
      project: i.project,
      evidences: i.evidences,
      rejections: i.rejectionsTechnique
    })).filter(f => f.evidences > 0 || f.rejections > 0)
  } else if (selectedRejectionType === 'Cliente') {
    return data.map(i => ({
      testManuf: i.testManuf,
      system: i.system,
      project: i.project,
      evidences: i.evidencesClient,
      rejections: i.rejectionsClient
    })).filter(f => f.evidences > 0 || f.rejections > 0)
  } else {
    return data.map(i => ({
      testManuf: i.testManuf,
      system: i.system,
      project: i.project,
      evidences: i.evidences,
      rejections: i.rejectionsTotal
    })).filter(f => f.evidences > 0 || f.rejections > 0)
  }
}

export const groupTestManuf = (state, {dataBySelectedRejectionType}) => {
  let totalRejections = dataBySelectedRejectionType.reduce((sum, e) => sum + e.rejections, 0)
  let totalEvidences = dataBySelectedRejectionType.reduce((sum, e) => sum + e.evidences, 0)
  let result = []
  dataBySelectedRejectionType.forEach(p => {
    let index = result.findIndex(r => r.testManuf === p.testManuf)
    if (index > -1) {
      result[index].evidences += p.evidences
      result[index].rejections += p.rejections
    } else {
      result.push({
        testManuf: p.testManuf,
        rejections: p.rejections,
        rejectionsPerc: 0,
        rejectionsPercTotal: 0,
        evidences: p.evidences,
        evidencesPercTotal: 0,
        totalRejections: totalRejections,
        totalEvidences: totalEvidences
      })
    }
  })
  result.forEach(r => {
    r.rejectionsPerc = parseFloat(parseFloat(r.rejections / (r.evidences ? r.evidences : 1) * 100).toFixed(2))
    r.rejectionsPercTotal = parseFloat(parseFloat(r.rejections / (totalRejections !== 0 ? totalRejections : 1) * 100).toFixed(2))
    r.evidencesPercTotal = parseFloat(parseFloat(r.evidences / (totalEvidences !== 0 ? totalEvidences : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.rejections > 0).sort((a, b) => a.rejections > b.rejections ? 1 : -1)
}

export const byTestManufGroupSystem = (state, {dataBySelectedRejectionType, totalRejections, totalEvidences}) => (testManuf) => {
  let byTestManuf = dataBySelectedRejectionType.filter(p => p.testManuf === testManuf)
  let totalRejections = byTestManuf.reduce((sum, e) => sum + e.rejections, 0)
  let totalEvidences = byTestManuf.reduce((sum, e) => sum + e.evidences, 0)

  let result = []
  byTestManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].evidences += p.evidences
      result[index].rejections += p.rejections
    } else {
      result.push({
        system: p.system,
        rejections: p.rejections,
        rejectionsPerc: 0,
        rejectionsPercTotal: 0,
        evidences: p.evidences,
        evidencesPercTotal: 0,
        totalRejections: totalRejections,
        totalEvidences: totalEvidences
      })
    }
  })
  result.forEach(r => {
    r.rejectionsPerc = parseFloat(parseFloat(r.rejections / (r.evidences ? r.evidences : 1) * 100).toFixed(2))
    r.rejectionsPercTotal = parseFloat(parseFloat(r.rejections / (totalRejections !== 0 ? totalRejections : 1) * 100).toFixed(2))
    r.evidencesPercTotal = parseFloat(parseFloat(r.evidences / (totalEvidences !== 0 ? totalEvidences : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.rejections > 0).sort((a, b) => a.rejections > b.rejections ? 1 : -1)
}

export const filteredByChart = ({testManufSelected, systemSelected}, {dataBySelectedRejectionType}) => {
  let ds = []
  if (testManufSelected === '' && systemSelected === '') {
    ds = dataBySelectedRejectionType
  } else if (systemSelected === '') {
    ds = dataBySelectedRejectionType.filter(i => i.testManuf === testManufSelected)
  } else {
    ds = dataBySelectedRejectionType.filter(i => i.testManuf === testManufSelected && i.system === systemSelected)
  }
  return ds
}

export const total = ({maxRejectionPercentage}, {filteredByChart}) => {
  let qtyEvidences = 0
  let qtyRejections = 0
  filteredByChart.forEach(i => {
    qtyEvidences += i.evidences
    qtyRejections += i.rejections
  })
  return {
    qtyEvidences,
    qtyRejections,
    percRejections: Number((qtyRejections / (qtyEvidences !== 0 ? qtyEvidences : 1) * 100).toFixed(2)),
    maxRejectionPercentage,
    maxRejectionAmount: Math.round(qtyEvidences * maxRejectionPercentage / 100)
  }
}

export const chartTitle = ({testManufSelected, systemSelected}) => {
  if (testManufSelected === '' && systemSelected === '') {
    return 'Fáb.Teste / Sistema'
  } else if (systemSelected === '') {
    return (testManufSelected ? testManufSelected.charAt(0).toUpperCase() + testManufSelected.slice(1).toLowerCase() : 'Fáb.Teste') + ' / Sistema'
  } else {
    return (testManufSelected ? testManufSelected.charAt(0).toUpperCase() + testManufSelected.slice(1).toLowerCase() : 'Fáb.Teste') + ' / ' + (systemSelected ? systemSelected.charAt(0).toUpperCase() + systemSelected.slice(1).toLowerCase() : '')
  }
}

// Timeline

export const dataTimelineBySelectedRejectionType = ({dataTimeline, selectedRejectionType}) => {
  if (selectedRejectionType === 'Técnica') {
    return dataTimeline.map(i => ({
      month: i.month,
      year: i.year,
      yearMonth: i.year + i.month,
      monthYear: i.month + '/' + i.year,
      testManuf: i.testManuf,
      system: i.system,
      project: i.project,
      rejections: i.rejectionsTechnique
    })).filter(f => f.rejections > 0)
  } else if (selectedRejectionType === 'Cliente') {
    return dataTimeline.map(i => ({
      month: i.month,
      year: i.year,
      yearMonth: i.year + i.month,
      monthYear: i.month + '/' + i.year,
      testManuf: i.testManuf,
      system: i.system,
      project: i.project,
      rejections: i.rejectionsClient
    })).filter(f => f.rejections > 0)
  } else {
    return dataTimeline.map(i => ({
      month: i.month,
      year: i.year,
      yearMonth: i.year + i.month,
      monthYear: i.month + '/' + i.year,
      testManuf: i.testManuf,
      system: i.system,
      project: i.project,
      rejections: i.rejectionsTotal
    })).filter(f => f.rejections > 0)
  }
}

export const timelineFilteredByChart = ({testManufSelected, systemSelected}, {dataTimelineBySelectedRejectionType}) => {
  let ds = []
  if (testManufSelected === '' && systemSelected === '') {
    ds = dataTimelineBySelectedRejectionType
  } else if (systemSelected === '') {
    ds = dataTimelineBySelectedRejectionType.filter(i => i.testManuf === testManufSelected)
  } else {
    ds = dataTimelineBySelectedRejectionType.filter(i => i.testManuf === testManufSelected && i.system === systemSelected)
  }
  return ds
}

export const groupTimeline = (state, {filteredByChart, timelineFilteredByChart}) => {
  let totalEvidences = filteredByChart.reduce((sum, e) => sum + e.evidences, 0)
  let result = []
  timelineFilteredByChart.forEach(i => {
    let index = result.findIndex(r => r.monthYear === (i.monthYear))
    if (index > -1) {
      result[index].rejections += i.rejections
    } else {
      result.push({
        monthYear: i.monthYear,
        yearMonth: i.yearMonth,
        rejections: i.rejections,
        rejectionsPerc: 0,
        rejectionsAcc: 0,
        rejectionsAccPerc: 0,
        totalEvidences: totalEvidences,
        maxLimit: totalEvidences * 0.15,
        maxLimitPerc: 15
      })
    }
  })
  let rejectionsAcc = 0
  result.forEach(r => {
    rejectionsAcc = rejectionsAcc + r.rejections
    r.rejectionsPerc = parseFloat(parseFloat(r.rejections / (totalEvidences !== 0 ? totalEvidences : 1) * 100).toFixed(2))
    r.rejectionsAcc = rejectionsAcc
    r.rejectionsAccPerc = parseFloat(parseFloat(rejectionsAcc / (totalEvidences !== 0 ? totalEvidences : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

// export const activeChartFilter = ({testManufSelected, systemSelected}) => {
//   if (testManufSelected === '' && systemSelected === '') {
//     return 'none'
//   } else if (systemSelected === '') {
//     return 'testManuf'
//   } else {
//     return 'system'
//   }
// }

// export const isShowTotal = (state, {activeChartFilter, testManufSelected}) => {
//   return (
//     this.activeChartFilter === 'none' && this.groupTestManuf.length > 1
//   ) ||
//   (
//     this.activeChartFilter === 'testManuf' && this.byTestManufGroupSystem(testManufSelected).length > 1
//   )
// }
