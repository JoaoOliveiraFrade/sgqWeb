export const groupDevManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.devManuf === d.devManuf)
    if (index > -1) {
      result[index].qtyDefect += d.qtyDefect
      result[index].qtyInsideSLA += d.qtyInsideSLA
    } else {
      result.push({
        devManuf: d.devManuf,

        qtyDefect: d.qtyDefect,
        qtyTotalDefect: 0,
        percTotalDefect: 0,

        qtyInsideSLA: d.qtyInsideSLA,
        percWithinSLA: 0,
        qtyTotalWithinSLA: 0,
        percTotalDefectsWithinSLA: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalWithinSLA = result.reduce((sum, e) => sum + e.qtyInsideSLA, 0)
  result.forEach(r => {
    r.qtyTotalDefect = qtyTotalDefect
    r.percTotalDefect = parseFloat(parseFloat(r.qtyDefect / (qtyTotalDefect !== 0 ? qtyTotalDefect : 1) * 100).toFixed(2))

    r.percWithinSLA = parseFloat(parseFloat(r.qtyInsideSLA / (r.qtyDefect ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalWithinSLA = qtyTotalWithinSLA
    r.percTotalDefectsWithinSLA = parseFloat(parseFloat(r.qtyInsideSLA / (qtyTotalWithinSLA !== 0 ? qtyTotalWithinSLA : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.percWithinSLA > 0).sort((a, b) => a.percWithinSLA > b.percWithinSLA ? 1 : -1)
}

export const byDevManufGroupSystem = ({data}) => (devManuf) => {
  let byDevManuf = data.filter(p => p.devManuf === devManuf)

  let result = []
  byDevManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].qtyDefect += p.qtyDefect
      result[index].qtyInsideSLA += p.qtyInsideSLA
    } else {
      result.push({
        system: p.system,
        qtyDefect: p.qtyDefect,
        qtyTotalDefect: 0,
        percTotalDefect: 0,

        qtyInsideSLA: p.qtyInsideSLA,
        percWithinSLA: 0,
        qtyTotalWithinSLA: 0,
        percTotalDefectsWithinSLA: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalWithinSLA = result.reduce((sum, e) => sum + e.qtyInsideSLA, 0)
  result.forEach(r => {
    r.qtyTotalDefect = qtyTotalDefect
    r.percTotalDefect = parseFloat(parseFloat(r.qtyDefect / (qtyTotalDefect !== 0 ? qtyTotalDefect : 1) * 100).toFixed(2))

    r.percWithinSLA = parseFloat(parseFloat(r.qtyInsideSLA / (r.qtyDefect ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalWithinSLA = qtyTotalWithinSLA
    r.percTotalDefectsWithinSLA = parseFloat(parseFloat(r.qtyInsideSLA / (qtyTotalWithinSLA !== 0 ? qtyTotalWithinSLA : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.percWithinSLA > 0).sort((a, b) => a.percWithinSLA > b.percWithinSLA ? 1 : -1)
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

export const groupTimeline = ({limitMinPerc}, {filteredByChart, total}) => {
  let result = []
  filteredByChart.filter(d => d.year !== '').forEach(d => {
    let index = result.findIndex(r => r.yearMonth === (d.year + d.month))
    if (index > -1) {
      result[index].qtyInsideSLA += d.qtyInsideSLA
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyInsideSLA: d.qtyInsideSLA,
        percWithinSLA: 0,
        qtyInsideSLAAcc: 0,
        percWithinSLAAcc: 0,
        qtyTotalDefect: total.qtyDefect,
        limitMinPerc: limitMinPerc,
        limitMinQty: 0
      })
    }
  })
  let qtyInsideSLAAcc = 0
  result.forEach(r => {
    r.percWithinSLA = parseFloat(parseFloat(r.qtyInsideSLA / (total.qtyDefect !== 0 ? total.qtyDefect : 1) * 100).toFixed(2))
    r.limitMinQty = Math.round(total.qtyDefect * limitMinPerc / 100)

    qtyInsideSLAAcc = qtyInsideSLAAcc + r.qtyInsideSLA
    r.qtyInsideSLAAcc = qtyInsideSLAAcc
    r.percWithinSLAAcc = parseFloat(parseFloat(qtyInsideSLAAcc / (total.qtyDefect !== 0 ? total.qtyDefect : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({limitMinPerc}, {filteredByChart}) => {
  let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyInsideSLA = filteredByChart.reduce((sum, e) => sum + e.qtyInsideSLA, 0)
  return {
    qtyDefect,
    qtyInsideSLA,
    percWithinSLA: Number((qtyInsideSLA / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2)),
    limitMinQty: Math.round(qtyDefect * limitMinPerc / 100),
    limitMinPerc
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
