export const groupDevManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.devManuf === d.devManuf)
    if (index > -1) {
      result[index].qtyDetectableInTS += d.qtyDetectableInTS
      result[index].qtyTotal += d.qtyTotal
    } else {
      result.push({
        devManuf: d.devManuf,

        qtyDetectableInTS: d.qtyDetectableInTS,
        qtyTotal: d.qtyTotal,
        percDetectableInTS: 0
      })
    }
  })
  result.forEach(r => {
    r.percDetectableInTS = parseFloat(parseFloat(r.qtyDetectableInTS / (r.qtyTotal !== 0 ? r.qtyTotal : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.percDetectableInTS > 0).sort((a, b) => a.percDetectableInTS > b.percDetectableInTS ? 1 : -1)
}

export const byDevManufGroupSystem = ({data}) => (devManuf) => {
  let byDevManuf = data.filter(p => p.devManuf === devManuf)

  let result = []
  byDevManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].qtyDetectableInTS += p.qtyDetectableInTS
      result[index].qtyTotal += p.qtyTotal
    } else {
      result.push({
        system: p.system,
        qtyDetectableInTS: p.qtyDetectableInTS,
        qtyTotal: p.qtyTotal,
        percDetectableInTS: 0
      })
    }
  })
  result.forEach(r => {
    r.percDetectableInTS = parseFloat(parseFloat(r.qtyDetectableInTS / (r.qtyTotal !== 0 ? r.qtyTotal : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.percDetectableInTS > 0).sort((a, b) => a.percDetectableInTS > b.percDetectableInTS ? 1 : -1)
}

export const filteredByChart = ({data, chartSelectedDevManufs, chartSelectedSystems}) => {
  if (chartSelectedDevManufs === '' && chartSelectedSystems === '') {
    return data
  } else if (chartSelectedSystems === '') {
    return data.filter(i => i.devManuf === chartSelectedDevManufs)
  } else {
    return data.filter(i => i.devManuf === chartSelectedDevManufs && i.system === chartSelectedSystems)
  }
}

export const groupTimeline = ({limitAcceptablePerc, limitModeratePerc, limitHigh}, {filteredByChart, total}) => {
  let result = []
  filteredByChart.filter(d => d.year !== '').forEach(d => {
    let index = result.findIndex(r => r.yearMonth === (d.year + d.month))
    if (index > -1) {
      result[index].qtyDetectableInTS += d.qtyDetectableInTS
      result[index].qtyTotal += d.qtyTotal
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyDetectableInTS: d.qtyDetectableInTS,
        qtyTotal: d.qtyTotal,
        percDetectableInTS: 0,
        limitAcceptablePerc: limitAcceptablePerc,
        limitModeratePerc: limitModeratePerc,
        limitHigh: limitHigh
      })
    }
  })
  result.forEach(r => {
    r.percDetectableInTS = parseFloat(parseFloat(r.qtyDetectableInTS / (r.qtyTotal !== 0 ? r.qtyTotal : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({state}, {filteredByChart}) => {
  let qtyDetectableInTS = filteredByChart.reduce((sum, e) => sum + e.qtyDetectableInTS, 0)
  let qtyTotal = filteredByChart.reduce((sum, e) => sum + e.qtyTotal, 0)
  return {
    qtyDetectableInTS,
    qtyTotal,
    percDetectableInTS: Number((qtyDetectableInTS / (qtyTotal !== 0 ? qtyTotal : 1) * 100).toFixed(2))
  }
}

export const chartTitle = ({chartSelectedDevManufs, chartSelectedSystems}) => {
  if (chartSelectedDevManufs === '' && chartSelectedSystems === '') {
    return 'Fáb.Desenv. / Sistema'
  } else if (chartSelectedSystems === '') {
    return (chartSelectedDevManufs ? chartSelectedDevManufs.charAt(0).toUpperCase() + chartSelectedDevManufs.slice(1).toLowerCase() : 'Fáb.Desenv.') + ' / Sistema'
  } else {
    return (chartSelectedDevManufs ? chartSelectedDevManufs.charAt(0).toUpperCase() + chartSelectedDevManufs.slice(1).toLowerCase() : 'Fáb.Desenv.') + ' / ' + (chartSelectedSystems ? chartSelectedSystems.charAt(0).toUpperCase() + chartSelectedSystems.slice(1).toLowerCase() : '')
  }
}
