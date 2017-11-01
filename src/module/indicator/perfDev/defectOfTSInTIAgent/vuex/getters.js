export const groupDevManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.devManuf === d.devManuf)
    if (index > -1) {
      result[index].qtyDefect += d.qtyDefect
      result[index].qtyOfTSInTI += d.qtyOfTSInTI
    } else {
      result.push({
        devManuf: d.devManuf,

        qtyDefect: d.qtyDefect,
        qtyOfTSInTI: d.qtyOfTSInTI,
        percOfTSInTI: 0
      })
    }
  })
  result.forEach(r => {
    r.percOfTSInTI = parseFloat(parseFloat(r.qtyOfTSInTI / (r.qtyDefect !== 0 ? r.qtyDefect : 1) * 100).toFixed(2))
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
      result[index].qtyDefect += p.qtyDefect
    } else {
      result.push({
        system: p.system,
        qtyOfTSInTI: p.qtyOfTSInTI,
        qtyDefect: p.qtyDefect,
        percOfTSInTI: 0
      })
    }
  })
  result.forEach(r => {
    r.percOfTSInTI = parseFloat(parseFloat(r.qtyOfTSInTI / (r.qtyDefect !== 0 ? r.qtyDefect : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.percOfTSInTI > 0).sort((a, b) => a.percOfTSInTI > b.percOfTSInTI ? 1 : -1)
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
      result[index].qtyOfTSInTI += d.qtyOfTSInTI
      result[index].qtyDefect += d.qtyDefect
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyOfTSInTI: d.qtyOfTSInTI,
        qtyDefect: d.qtyDefect,
        percOfTSInTI: 0,
        limitAcceptablePerc: limitAcceptablePerc,
        limitModeratePerc: limitModeratePerc,
        limitHigh: limitHigh
      })
    }
  })
  result.forEach(r => {
    r.percOfTSInTI = parseFloat(parseFloat(r.qtyOfTSInTI / (r.qtyDefect !== 0 ? r.qtyDefect : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({state}, {filteredByChart}) => {
  let qtyOfTSInTI = filteredByChart.reduce((sum, e) => sum + e.qtyOfTSInTI, 0)
  let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
  return {
    qtyOfTSInTI,
    qtyDefect,
    percOfTSInTI: Number((qtyOfTSInTI / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2))
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
