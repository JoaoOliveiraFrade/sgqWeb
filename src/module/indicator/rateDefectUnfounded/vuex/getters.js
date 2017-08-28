export const groupTestManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.testManuf === d.testManuf)
    if (index > -1) {
      result[index].qtyDefect += d.qtyDefect
      result[index].qtyUnfounded += d.qtyUnfounded
    } else {
      result.push({
        testManuf: d.testManuf,

        qtyDefect: d.qtyDefect,
        qtyTotalDefect: 0,
        percDefectTotal: 0,

        qtyUnfounded: d.qtyUnfounded,
        percUnfounded: 0,
        qtyTotalUnfounded: 0,
        percUnfoundedTotal: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalUnfounded = result.reduce((sum, e) => sum + e.qtyUnfounded, 0)
  result.forEach(r => {
    r.qtyTotalDefect = qtyTotalDefect
    r.percDefectTotal = parseFloat(parseFloat(r.qtyDefect / (qtyTotalDefect !== 0 ? qtyTotalDefect : 1) * 100).toFixed(2))

    r.percUnfounded = parseFloat(parseFloat(r.qtyUnfounded / (r.qtyDefect ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalUnfounded = qtyTotalUnfounded
    r.percUnfoundedTotal = parseFloat(parseFloat(r.qtyUnfounded / (qtyTotalUnfounded !== 0 ? qtyTotalUnfounded : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.qtyUnfounded > 0).sort((a, b) => a.qtyUnfounded > b.qtyUnfounded ? 1 : -1)
}

export const byTestManufGroupSystem = ({data}, {qtyTotalDefect, qtyTotalUnfounded}) => (testManuf) => {
  let byTestManuf = data.filter(p => p.testManuf === testManuf)

  let result = []
  byTestManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].qtyDefect += p.qtyDefect
      result[index].qtyUnfounded += p.qtyUnfounded
    } else {
      result.push({
        system: p.system,
        qtyDefect: p.qtyDefect,
        qtyTotalDefect: 0,
        percDefectTotal: 0,

        qtyUnfounded: p.qtyUnfounded,
        percUnfounded: 0,
        qtyTotalUnfounded: 0,
        percUnfoundedTotal: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalUnfounded = result.reduce((sum, e) => sum + e.qtyUnfounded, 0)
  result.forEach(r => {
    r.qtyTotalDefect = qtyTotalDefect
    r.percDefectTotal = parseFloat(parseFloat(r.qtyDefect / (qtyTotalDefect !== 0 ? qtyTotalDefect : 1) * 100).toFixed(2))

    r.percUnfounded = parseFloat(parseFloat(r.qtyUnfounded / (r.qtyDefect ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalUnfounded = qtyTotalUnfounded
    r.percUnfoundedTotal = parseFloat(parseFloat(r.qtyUnfounded / (qtyTotalUnfounded !== 0 ? qtyTotalUnfounded : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.qtyUnfounded > 0).sort((a, b) => a.qtyUnfounded > b.qtyUnfounded ? 1 : -1)
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
      result[index].qtyUnfounded += d.qtyUnfounded
    } else {
      result.push({
        yearMonth: d.year + d.month,
        monthYear: d.month + '/' + d.year,
        qtyUnfounded: d.qtyUnfounded,
        percUnfounded: 0,
        qtyUnfoundedAcc: 0,
        percUnfoundedAcc: 0,
        qtyTotalDefect: total.qtyDefect,
        limitMaxPerc: limitMaxPerc,
        limitMaxQty: 0
      })
    }
  })
  let qtyUnfoundedAcc = 0
  result.forEach(r => {
    r.percUnfounded = parseFloat(parseFloat(r.qtyUnfounded / (total.qtyDefect !== 0 ? total.qtyDefect : 1) * 100).toFixed(2))
    r.limitMaxQty = Math.round(total.qtyDefect * limitMaxPerc / 100)

    qtyUnfoundedAcc = qtyUnfoundedAcc + r.qtyUnfounded
    r.qtyUnfoundedAcc = qtyUnfoundedAcc
    r.percUnfoundedAcc = parseFloat(parseFloat(qtyUnfoundedAcc / (total.qtyDefect !== 0 ? total.qtyDefect : 1) * 100).toFixed(2))
  })
  return result.filter(r => r.qtyUnfounded > 0).sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({limitMaxPerc}, {filteredByChart}) => {
  let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyUnfounded = filteredByChart.reduce((sum, e) => sum + e.qtyUnfounded, 0)
  return {
    qtyDefect,
    qtyUnfounded,
    percUnfounded: Number((qtyUnfounded / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2)),
    limitMaxPerc,
    limitMaxQty: Math.round(qtyDefect * limitMaxPerc / 100)
  }
}

export const chartTitle = ({testManufSelected, systemSelected}) => {
  if (testManufSelected === '' && systemSelected === '') {
    return 'Fáb.Teste / Sistema'
  } else if (systemSelected === '') {
    return (testManufSelected ? testManufSelected.charAt(0).toUpperCase() + testManufSelected.slice(1).toLowerCase() : 'Fáb.Teste') + ' / Sistema'
  } else {
    return (testManufSelected ? testManufSelected.charAt(0).toUpperCase() + testManufSelected.slice(1).toLowerCase() : 'Fáb.Teste') + ' / ' +
    (systemSelected ? systemSelected.charAt(0).toUpperCase() + systemSelected.slice(1).toLowerCase() : '')
  }
}
