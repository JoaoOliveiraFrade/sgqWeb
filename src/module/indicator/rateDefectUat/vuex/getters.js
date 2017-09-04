export const groupTestManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.testManuf === d.testManuf)
    if (index > -1) {
      result[index].qtyDefect += d.qtyDefect
      result[index].qtyDefectUat += d.qtyDefectUat
    } else {
      result.push({
        testManuf: d.testManuf,

        qtyDefect: d.qtyDefect,
        qtyTotalDefect: 0,
        percTotalDefect: 0,

        qtyDefectUat: d.qtyDefectUat,
        percDefectUat: 0,
        qtyTotalDefectUat: 0,
        percTotalDefectUat: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalDefectUat = result.reduce((sum, e) => sum + e.qtyDefectUat, 0)
  result.forEach(r => {
    r.qtyTotalDefect = qtyTotalDefect
    r.percTotalDefect = parseFloat(parseFloat(r.qtyDefect / (qtyTotalDefect !== 0 ? qtyTotalDefect : 1) * 100).toFixed(2))

    r.percDefectUat = parseFloat(parseFloat(r.qtyDefectUat / (r.qtyDefect ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalDefectUat = qtyTotalDefectUat
    r.percTotalDefectUat = parseFloat(parseFloat(r.qtyDefectUat / (qtyTotalDefectUat !== 0 ? qtyTotalDefectUat : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.qtyDefectUat > 0).sort((a, b) => a.qtyDefectUat > b.qtyDefectUat ? 1 : -1)
}

export const byTestManufGroupSystem = ({data}) => (testManuf) => {
  let byTestManuf = data.filter(p => p.testManuf === testManuf)

  let result = []
  byTestManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].qtyDefect += p.qtyDefect
      result[index].qtyDefectUat += p.qtyDefectUat
    } else {
      result.push({
        system: p.system,
        qtyDefect: p.qtyDefect,
        qtyTotalDefect: 0,
        percTotalDefect: 0,

        qtyDefectUat: p.qtyDefectUat,
        percDefectUat: 0,
        qtyTotalDefectUat: 0,
        percTotalDefectUat: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalDefectUat = result.reduce((sum, e) => sum + e.qtyDefectUat, 0)
  result.forEach(r => {
    r.qtyTotalDefect = qtyTotalDefect
    r.percTotalDefect = parseFloat(parseFloat(r.qtyDefect / (qtyTotalDefect !== 0 ? qtyTotalDefect : 1) * 100).toFixed(2))

    r.percDefectUat = parseFloat(parseFloat(r.qtyDefectUat / (r.qtyDefect ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalDefectUat = qtyTotalDefectUat
    r.percTotalDefectUat = parseFloat(parseFloat(r.qtyDefectUat / (qtyTotalDefectUat !== 0 ? qtyTotalDefectUat : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.qtyDefectUat > 0).sort((a, b) => a.qtyDefectUat > b.qtyDefectUat ? 1 : -1)
}

export const filteredByChart = ({data, testManufSelected, systemSelected}) => {
  if (testManufSelected === '' && systemSelected === '') {
    return data
  } else if (systemSelected === '') {
    return data.filter(i => i.testManuf === testManufSelected)
  } else {
    return data.filter(i => i.testManuf === testManufSelected && i.system === systemSelected)
  }
}

export const groupTimeline = ({limitMaxPerc}, {filteredByChart, total}) => {
  let result = []
  filteredByChart.filter(d => d.year !== '').forEach(d => {
    let index = result.findIndex(r => r.yearMonth === (d.year + d.month))
    if (index > -1) {
      result[index].qtyDefectUat += d.qtyDefectUat
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyDefectUat: d.qtyDefectUat,
        percDefectUat: 0,
        qtyDefectUatAcc: 0,
        percDefectUatAcc: 0,
        qtyTotalDefect: total.qtyDefect,
        limitMaxPerc: limitMaxPerc,
        limitMaxQty: 0
      })
    }
  })
  let qtyDefectUatAcc = 0
  result.forEach(r => {
    r.percDefectUat = parseFloat(parseFloat(r.qtyDefectUat / (total.qtyDefect !== 0 ? total.qtyDefect : 1) * 100).toFixed(2))
    r.limitMaxQty = Math.round(total.qtyDefect * limitMaxPerc / 100)

    qtyDefectUatAcc = qtyDefectUatAcc + r.qtyDefectUat
    r.qtyDefectUatAcc = qtyDefectUatAcc
    r.percDefectUatAcc = parseFloat(parseFloat(qtyDefectUatAcc / (total.qtyDefect !== 0 ? total.qtyDefect : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({limitMaxPerc}, {filteredByChart}) => {
  let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyDefectUat = filteredByChart.reduce((sum, e) => sum + e.qtyDefectUat, 0)
  return {
    qtyDefect,
    qtyDefectUat,
    percDefectUat: Number((qtyDefectUat / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2)),
    limitMaxQty: Math.round(qtyDefect * limitMaxPerc / 100),
    limitMaxPerc
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
