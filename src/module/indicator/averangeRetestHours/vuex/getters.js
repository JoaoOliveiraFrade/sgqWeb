export const groupTestManuf = ({data}) => {
  let result = []
  data.forEach(d => {
    let index = result.findIndex(r => r.testManuf === d.testManuf)
    if (index > -1) {
      result[index].qtyDefect += d.qtyDefect
      result[index].qtyRetestHours += d.qtyRetestHours
    } else {
      result.push({
        testManuf: d.testManuf,
        qtyDefect: d.qtyDefect,
        qtyRetestHours: d.qtyRetestHours,
        averangeRetestHours: 0,
        qtyTotalDefect: 0,
        qtyTotalRetestHours: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalRetestHours = result.reduce((sum, e) => sum + e.qtyRetestHours, 0)
  result.forEach(r => {
    r.averangeRetestHours = parseFloat(parseFloat(r.qtyRetestHours / (r.qtyDefect !== 0 ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalDefect = qtyTotalDefect
    r.qtyTotalRetestHours = qtyTotalRetestHours
  })
  return result.filter(r => r.averangeRetestHours > 0).sort((a, b) => a.averangeRetestHours > b.averangeRetestHours ? 1 : -1)
}

export const byTestManufGroupSystem = ({data}) => (testManuf) => {
  let byTestManuf = data.filter(p => p.testManuf === testManuf)

  let result = []
  byTestManuf.forEach(p => {
    let index = result.findIndex(r => r.system === p.system)
    if (index > -1) {
      result[index].qtyDefect += p.qtyDefect
      result[index].qtyRetestHours += p.qtyRetestHours
    } else {
      result.push({
        system: p.system,
        qtyDefect: p.qtyDefect,
        qtyRetestHours: p.qtyRetestHours,
        averangeRetestHours: 0,
        qtyTotalDefect: 0,
        qtyTotalRetestHours: 0
      })
    }
  })
  let qtyTotalDefect = result.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyTotalRetestHours = result.reduce((sum, e) => sum + e.qtyRetestHours, 0)
  result.forEach(r => {
    r.averangeRetestHours = parseFloat(parseFloat(r.qtyRetestHours / (r.qtyDefect !== 0 ? r.qtyDefect : 1) * 100).toFixed(2))
    r.qtyTotalDefect = qtyTotalDefect
    r.qtyTotalRetestHours = qtyTotalRetestHours
  })
  return result.filter(r => r.averangeRetestHours > 0).sort((a, b) => a.averangeRetestHours > b.averangeRetestHours ? 1 : -1)
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

export const groupTimeline = ({limitMaxQtyHours}, {filteredByChart, total}) => {
  let result = []
  filteredByChart.filter(f => f.year !== '').forEach(i => {
    let index = result.findIndex(r => r.yearMonth === (i.year + i.month))
    if (index > -1) {
      result[index].qtyDefect += i.qtyDefect
      result[index].qtyRetestHours += i.qtyRetestHours
    } else {
      result.push({
        yearMonth: i.year + i.month,
        monthYear: i.month + '/' + i.year,
        qtyDefect: i.qtyDefect,
        qtyTotalDefect: total.qtyDefect,
        qtyAccDefect: 0,
        qtyRetestHours: i.qtyRetestHours,
        qtyTotalRetestHours: total.qtyTotalRetestHours,
        qtyAccRetestHours: 0,
        qtyAccAverangeRetestHours: 0,
        limitMaxQtyHours: limitMaxQtyHours
      })
    }
  })
  let qtyAccDefect = 0
  let qtyAccRetestHours = 0
  result.forEach(i => {
    qtyAccDefect = qtyAccDefect + i.qtyDefect
    qtyAccRetestHours = qtyAccRetestHours + i.qtyRetestHours
    i.qtyAccDefect = qtyAccDefect
    i.qtyAccRetestHours = qtyAccRetestHours
    i.qtyAccAverangeRetestHours = parseFloat(parseFloat(qtyAccRetestHours / (qtyAccDefect !== 0 ? qtyAccDefect : 1) * 100).toFixed(2))
  })
  return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
}

export const total = ({limitMaxQtyHours}, {filteredByChart}) => {
  let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyRetestHours = filteredByChart.reduce((sum, e) => sum + e.qtyRetestHours, 0)
  return {
    qtyDefect,
    qtyRetestHours
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
