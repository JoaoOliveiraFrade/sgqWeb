import * as types from './mutationsTypes'
import services from '../services'

export const load = ({ commit, state, rootState }) => {
  if (rootState.testManuf.selectedTestManufs.length === 0 || rootState.system.selectedSystems.length === 0 || rootState.project.selectedProjects.length === 0) {
    return
  }

  commit(types.loading, true)

  return new Promise((resolve, reject) => {
    services.getByListTestManufSystemProject({
      selectedTestManufs: rootState.testManuf.selectedTestManufs,
      selectedSystems: rootState.system.selectedSystems,
      selectedProjects: rootState.project.selectedProjects.map(i => i.subproject + i.delivery)
    })
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.loading, false)
        resolve()
      },
      e => {
        console.log(e)
        commit(types.loading, false)
        reject()
      }
    )
  })
}

export const setChartFilter = ({ state, commit }, item) => {
  if (item === '') {
    commit(types.testManufSelected, '')
    commit(types.systemSelected, '')
  } else {
    if (state.testManufSelected === '') {
      commit(types.testManufSelected, item)
    } else {
      commit(types.systemSelected, item)
    }
  }
}

import chartGroupTestManufStandParam from '@/module/chart/comp/types/drillDown2'
export const setChartGroupTestManufParam = ({ commit, getters }, item) => {
  let param = chartGroupTestManufStandParam
  console.log('action setChartGroupTestManufParam')
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
      data: getters.groupTestManuf.map(i => ({
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
    series: getters.groupTestManuf.map(i => ({
      name: i.testManuf,
      id: i.testManuf,
      data: getters.byTestManufGroupSystem(i.testManuf).map(s => ({
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
  commit(types.chartGroupTestManufParam, param)
}
