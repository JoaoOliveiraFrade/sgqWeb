export const groupDevManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.devManuf === d.devManuf)
    if (index > -1) {
      result[index].qtyOfTSInTI += d.qtyOfTSInTI
      result[index].qtyTotal += d.qtyTotal
    } else {
      result.push({
        devManuf: d.devManuf,

        qtyOfTSInTI: d.qtyOfTSInTI,
        qtyTotal: d.qtyTotal,
        percOfTSInTI: 0
      })
    }
  })
  result.forEach(r => {
    r.percOfTSInTI = parseFloat(parseFloat(r.qtyOfTSInTI / (r.qtyTotal !== 0 ? r.qtyTotal : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.percOfTSInTI > 0).sort((a, b) => a.percOfTSInTI > b.percOfTSInTI ? 1 : -1)
}

export const byDevManufGroupSystem = ({data}) => (devManuf) => {
  let byDevManuf = data.filter(p => p.devManuf === devManuf)

  let result = []
  byDevManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].qtyOfTSInTI += p.qtyOfTSInTI
      result[index].qtyTotal += p.qtyTotal
    } else {
      result.push({
        system: p.system,
        qtyOfTSInTI: p.qtyOfTSInTI,
        qtyTotal: p.qtyTotal,
        percOfTSInTI: 0
      })
    }
  })
  result.forEach(r => {
    r.percOfTSInTI = parseFloat(parseFloat(r.qtyOfTSInTI / (r.qtyTotal !== 0 ? r.qtyTotal : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.percOfTSInTI > 0).sort((a, b) => a.percOfTSInTI > b.percOfTSInTI ? 1 : -1)
}

export const filteredByChart = ({data, chartSelectedDevManuf, chartSelectedSystem}) => {
  if (chartSelectedDevManuf === '' && chartSelectedSystem === '') {
    return data
  } else if (chartSelectedSystem === '') {
    return data.filter(i => i.devManuf === chartSelectedDevManuf)
  } else {
    return data.filter(i => i.devManuf === chartSelectedDevManuf && i.system === chartSelectedSystem)
  }
}

export const groupTimeline = ({limitAcceptablePerc, limitModeratePerc, limitHigh}, {filteredByChart, total}) => {
  let result = []
  filteredByChart.filter(d => d.year !== '').forEach(d => {
    let index = result.findIndex(r => r.yearMonth === (d.year + d.month))
    if (index > -1) {
      result[index].qtyOfTSInTI += d.qtyOfTSInTI
      result[index].qtyTotal += d.qtyTotal
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyOfTSInTI: d.qtyOfTSInTI,
        qtyTotal: d.qtyTotal,
        percOfTSInTI: 0,
        limitAcceptablePerc: limitAcceptablePerc,
        limitModeratePerc: limitModeratePerc,
        limitHigh: limitHigh
      })
    }
  })
  result.forEach(r => {
    r.percOfTSInTI = parseFloat(parseFloat(r.qtyOfTSInTI / (r.qtyTotal !== 0 ? r.qtyTotal : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({state}, {filteredByChart}) => {
  let qtyOfTSInTI = filteredByChart.reduce((sum, e) => sum + e.qtyOfTSInTI, 0)
  let qtyTotal = filteredByChart.reduce((sum, e) => sum + e.qtyTotal, 0)
  return {
    qtyOfTSInTI,
    qtyTotal,
    percOfTSInTI: Number((qtyOfTSInTI / (qtyTotal !== 0 ? qtyTotal : 1) * 100).toFixed(2))
  }
}

export const chartTitle = ({chartSelectedDevManuf, chartSelectedSystem}) => {
  if (chartSelectedDevManuf === '' && chartSelectedSystem === '') {
    return 'Fáb.Desenv. / Sistema'
  } else if (chartSelectedSystem === '') {
    return (chartSelectedDevManuf ? chartSelectedDevManuf.charAt(0).toUpperCase() + chartSelectedDevManuf.slice(1).toLowerCase() : 'Fáb.Desenv.') + ' / Sistema'
  } else {
    return (chartSelectedDevManuf ? chartSelectedDevManuf.charAt(0).toUpperCase() + chartSelectedDevManuf.slice(1).toLowerCase() : 'Fáb.Desenv.') + ' / ' + (chartSelectedSystem ? chartSelectedSystem.charAt(0).toUpperCase() + chartSelectedSystem.slice(1).toLowerCase() : '')
  }
}
