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

export const byTestManufGroupSystem = ({data}, {qtyTotalDefect, qtyTotalDefectUat}) => (testManuf) => {
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
  return result.filter(r => r.qtyDefectUat > 0).sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
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

import chartTotalStandParam from '@/module/chart/comp/types/Total2'
export const chartTotalParam = (state, {total}) => {
  let param = chartTotalStandParam

  param.title.text = 'Total'
  param.yAxis.title.text = 'Def.<br>Uat'
  // param.plotOptions.gauge.dataLabels.borderWidth = 0
  param.plotOptions.gauge.dataLabels.useHTML = true
  param.plotOptions.gauge.dataLabels.format = '<span style=font-size:9px><center>{point.y:.0f}</center>' + total.percDefectUat + '%</span>'

  if (total.qtyDefectUat < total.qtyDefect) {
    param.yAxis.max = total.qtyDefect
    param.yAxis.plotBands = [
      {from: 0, to: total.limitMaxQty, color: '#00CC00'},
      {from: total.limitMaxQty, to: total.qtyDefect, color: '#FF3300'}
    ]
  } else {
    param.yAxis.max = total.qtyDefectUat
    param.yAxis.plotBands = [
      {from: 0, to: total.limitMaxQty, color: '#00CC00'},
      {from: total.limitMaxQty, to: total.qtyDefectUat, color: '#FF3300'}
    ]
  }

  param.tooltip.pointFormat = '' +
    'Def. Uat: ' + total.qtyDefectUat + ' (' + total.percDefectUat + '%)<br>' +
    'Limite Máximo: ' + total.limitMaxQty + ' (' + total.limitMaxPerc + '%)<br>' +
    'Defeito: ' + total.qtyDefect

  param.series = [ { name: 'Total', colorByPoint: true, data: [ total.qtyDefectUat ] } ]
  return param
}

import chartGroupTestManufStandParam from '@/module/chart/comp/types/drillDown2'
export const chartGroupTestManufParam = (state, {groupTestManuf, byTestManufGroupSystem}) => {
  let param = chartGroupTestManufStandParam
  console.log('getter: chartGroupTestManufParam')
  param.title.text = 'Fáb.Teste / Sistema'
  param.yAxis.title.text = 'Qte Rej.'

  param.tooltip.headerFormat = ''
  param.tooltip.pointFormat = `
    <b>{point.name}</b><br>
    Def. Uat: {point.qtyDefectUat:.0f} ({point.percDefectUat:.2f}%{point.percTotalDefectUat})<br>
    Defeito: {point.qtyDefect:.0f}{point.percTotalDefect}<br>
    Total Def. Uat: {point.qtyTotalDefectUat:.0f}<br>
    Total Defeito: {point.qtyTotalDefect:.0f}
  `
  param.series.name = 'Taxa Def. Uat'
  param.plotOptions.bar.dataLabels.format = '{point.y:.0f}'

  param.series = [
    {
      name: 'Taxa Def. Uat',
      colorByPoint: true,
      data: groupTestManuf.map(i => ({
        name: i.testManuf ? i.testManuf.charAt(0).toUpperCase() + i.testManuf.slice(1).toLowerCase() : '',
        y: i.qtyDefectUat,
        qtyDefectUat: i.qtyDefectUat,
        percDefectUat: i.percDefectUat,
        percTotalDefectUat: i.percTotalDefectUat !== 100 ? ', ' + i.percTotalDefectUat + '% total' : '',
        qtyDefect: i.qtyDefect,
        percTotalDefect: i.percTotalDefect !== 100 ? ' (' + i.percTotalDefect + '% total)' : '',
        qtyTotalDefectUat: i.qtyTotalDefectUat,
        qtyTotalDefect: i.qtyTotalDefect,
        drilldown: i.testManuf
      }))
    }
  ]

  param.drilldown = {
    series: groupTestManuf.map(i => ({
      name: i.testManuf,
      id: i.testManuf,
      data: byTestManufGroupSystem(i.testManuf).map(s => ({
        name: s.system ? s.system.charAt(0).toUpperCase() + s.system.slice(1).toLowerCase() : '',
        y: s.qtyDefectUat,
        qtyDefectUat: s.qtyDefectUat,
        percDefectUat: s.percDefectUat,
        percTotalDefectUat: s.percTotalDefectUat !== 100 ? ', ' + s.percTotalDefectUat + '% total' : '',
        qtyDefect: s.qtyDefect,
        percTotalDefect: s.percTotalDefect !== 100 ? ' (' + s.percTotalDefect + '% total)' : '',
        qtyTotalDefectUat: s.qtyTotalDefectUat,
        qtyTotalDefect: s.qtyTotalDefect
      }))
    }))
  }

  let self = this

  param.plotOptions.bar.events = {
    click: function (event) {
      self.setChartFilter(event.point.name.toUpperCase())
      self.chart.setTitle({text: self.chartTitle})
    }
  }

  param.chart.events = {
    drillup: function (e) {
      self.setChartFilter('')
      self.chart.setTitle({text: self.chartTitle})
    }
  }
  console.log(param)
  return param
}
