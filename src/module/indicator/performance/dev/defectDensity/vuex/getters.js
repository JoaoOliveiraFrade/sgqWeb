export const groupDevManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.devManuf === d.devManuf)
    if (index > -1) {
      result[index].qtyDefect += d.qtyDefect
      result[index].qtyCt += d.qtyCt
    } else {
      result.push({
        devManuf: d.devManuf,

        qtyDefect: d.qtyDefect,
        qtyCt: d.qtyCt,
        density: 0
      })
    }
  })
  result.forEach(r => {
    r.density = parseFloat(parseFloat(r.qtyDefect / (r.qtyCt !== 0 ? r.qtyCt : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.density > 0).sort((a, b) => a.density > b.density ? 1 : -1)
}

export const byDevManufGroupSystem = ({data}) => (devManuf) => {
  let byDevManuf = data.filter(p => p.devManuf === devManuf)

  let result = []
  byDevManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].qtyDefect += p.qtyDefect
      result[index].qtyCt += p.qtyCt
    } else {
      result.push({
        system: p.system,
        qtyDefect: p.qtyDefect,
        qtyCt: p.qtyCt,
        density: 0
      })
    }
  })
  result.forEach(r => {
    r.density = parseFloat(parseFloat(r.qtyDefect / (r.qtyCt !== 0 ? r.qtyCt : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.density > 0).sort((a, b) => a.density > b.density ? 1 : -1)
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
      result[index].qtyDefect += d.qtyDefect
      result[index].qtyCt += d.qtyCt
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyDefect: d.qtyDefect,
        qtyCt: d.qtyCt,
        density: 0,
        limitAcceptablePerc: limitAcceptablePerc,
        limitModeratePerc: limitModeratePerc,
        limitHigh: limitHigh
      })
    }
  })
  result.forEach(r => {
    r.density = parseFloat(parseFloat(r.qtyDefect / (r.qtyCt !== 0 ? r.qtyCt : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({state}, {filteredByChart}) => {
  let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyCt = filteredByChart.reduce((sum, e) => sum + e.qtyCt, 0)
  return {
    qtyDefect,
    qtyCt,
    density: Number((qtyDefect / (qtyCt !== 0 ? qtyCt : 1) * 100).toFixed(2))
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
