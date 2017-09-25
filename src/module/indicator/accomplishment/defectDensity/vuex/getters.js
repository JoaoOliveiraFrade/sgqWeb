export const groupDevManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.devManuf === d.devManuf)
    if (index > -1) {
      result[index].qtyDefect += d.qtyDefect
      result[index].qtyWithinSLA += d.qtyWithinSLA
    } else {
      result.push({
        devManuf: d.devManuf,

        qtyDefect: d.qtyDefect,
        qtyTotalDefect: 0,
        percTotalDefect: 0,

        qtyWithinSLA: d.qtyWithinSLA,
        percWithinSLA: 0,
        qtyTotalWithinSLA: 0,
        percTotalDefectsWithinSLA: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalWithinSLA = result.reduce((sum, e) => sum + e.qtyWithinSLA, 0)
  result.forEach(r => {
    r.qtyTotalDefect = qtyTotalDefect
    r.percTotalDefect = parseFloat(parseFloat(r.qtyDefect / (qtyTotalDefect !== 0 ? qtyTotalDefect : 1) * 100).toFixed(2))

    r.percWithinSLA = parseFloat(parseFloat(r.qtyWithinSLA / (r.qtyDefect ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalWithinSLA = qtyTotalWithinSLA
    r.percTotalDefectsWithinSLA = parseFloat(parseFloat(r.qtyWithinSLA / (qtyTotalWithinSLA !== 0 ? qtyTotalWithinSLA : 1) * 100).toFixed(2))
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
      result[index].qtyWithinSLA += p.qtyWithinSLA
    } else {
      result.push({
        system: p.system,
        qtyDefect: p.qtyDefect,
        qtyTotalDefect: 0,
        percTotalDefect: 0,

        qtyWithinSLA: p.qtyWithinSLA,
        percWithinSLA: 0,
        qtyTotalWithinSLA: 0,
        percTotalDefectsWithinSLA: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalWithinSLA = result.reduce((sum, e) => sum + e.qtyWithinSLA, 0)
  result.forEach(r => {
    r.qtyTotalDefect = qtyTotalDefect
    r.percTotalDefect = parseFloat(parseFloat(r.qtyDefect / (qtyTotalDefect !== 0 ? qtyTotalDefect : 1) * 100).toFixed(2))

    r.percWithinSLA = parseFloat(parseFloat(r.qtyWithinSLA / (r.qtyDefect ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalWithinSLA = qtyTotalWithinSLA
    r.percTotalDefectsWithinSLA = parseFloat(parseFloat(r.qtyWithinSLA / (qtyTotalWithinSLA !== 0 ? qtyTotalWithinSLA : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.percWithinSLA > 0).sort((a, b) => a.percWithinSLA > b.percWithinSLA ? 1 : -1)
}

export const filteredByChart = ({data, devManufSelected, systemSelected}) => {
  if (devManufSelected === '' && systemSelected === '') {
    return data
  } else if (systemSelected === '') {
    return data.filter(i => i.devManuf === devManufSelected)
  } else {
    return data.filter(i => i.devManuf === devManufSelected && i.system === systemSelected)
  }
}

export const groupTimeline = ({limitMinPerc}, {filteredByChart, total}) => {
  let result = []
  filteredByChart.filter(d => d.year !== '').forEach(d => {
    let index = result.findIndex(r => r.yearMonth === (d.year + d.month))
    if (index > -1) {
      result[index].qtyWithinSLA += d.qtyWithinSLA
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyWithinSLA: d.qtyWithinSLA,
        percWithinSLA: 0,
        qtyWithinSLAAcc: 0,
        percWithinSLAAcc: 0,
        qtyTotalDefect: total.qtyDefect,
        limitMinPerc: limitMinPerc,
        limitMinQty: 0
      })
    }
  })
  let qtyWithinSLAAcc = 0
  result.forEach(r => {
    r.percWithinSLA = parseFloat(parseFloat(r.qtyWithinSLA / (total.qtyDefect !== 0 ? total.qtyDefect : 1) * 100).toFixed(2))
    r.limitMinQty = Math.round(total.qtyDefect * limitMinPerc / 100)

    qtyWithinSLAAcc = qtyWithinSLAAcc + r.qtyWithinSLA
    r.qtyWithinSLAAcc = qtyWithinSLAAcc
    r.percWithinSLAAcc = parseFloat(parseFloat(qtyWithinSLAAcc / (total.qtyDefect !== 0 ? total.qtyDefect : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({limitMinPerc}, {filteredByChart}) => {
  let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyWithinSLA = filteredByChart.reduce((sum, e) => sum + e.qtyWithinSLA, 0)
  return {
    qtyDefect,
    qtyWithinSLA,
    percWithinSLA: Number((qtyWithinSLA / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2)),
    limitMinQty: Math.round(qtyDefect * limitMinPerc / 100),
    limitMinPerc
  }
}

export const chartTitle = ({devManufSelected, systemSelected}) => {
  if (devManufSelected === '' && systemSelected === '') {
    return 'Fáb.Desenv. / Sistema'
  } else if (systemSelected === '') {
    return (devManufSelected ? devManufSelected.charAt(0).toUpperCase() + devManufSelected.slice(1).toLowerCase() : 'Fáb.Desenv.') + ' / Sistema'
  } else {
    return (devManufSelected ? devManufSelected.charAt(0).toUpperCase() + devManufSelected.slice(1).toLowerCase() : 'Fáb.Desenv.') + ' / ' + (systemSelected ? systemSelected.charAt(0).toUpperCase() + systemSelected.slice(1).toLowerCase() : '')
  }
}
