import * as types from './mutationsTypes'
import services from '../services'
import Toastr from 'toastr'

export const load = ({ commit }) => {
  services.load()
    .then(
      r => {
        commit(types.data, r.data)
        commit(types.filteredByText, r.data)
      },
      e => console.log(e)
    )
}

export const loadDataChartCFD = ({ commit, getters }) => {
  services.loadDataChartCFD()
    .then(
      r => {
        commit(types.dataChartCFD, r.data)

        let param = {
          chart: {
            type: 'area',
            zoomType: 'xy',
            backgroundColor: 'transparent',
            style: { fontFamily: 'arial' }
          },
          title: {
            text: 'Cadeia Puxada - Gráfico CFD',
            margin: 0,
            style: { fontSize: 13, fontWeight: 'bold', color: '#6b6b47' }
          },

          credits: { enabled: false },
          exporting: { enabled: false },
          lang: { noData: 'Sem dados!' },

          // xAxis: { type: 'category', labels: { style: { fontSize: '10px', padding: '[0px 0px 0px 0px]' } } },
          xAxis: {
            categories: getters.dataChartCFDGroupDate.map(i => i.date),
            tickmarkPlacement: 'on',
            title: {
              enabled: false
            }
          },

          // yAxis: { title: { text: '' }, plotLines: [ { value: 0, width: 1, color: '#FF8080' } ] },
          yAxis: {
            title: {
              text: 'Qte Atividades'
            },
            labels: {
              formatter: function () {
                return this.value
              }
            }
          },

          tooltip: {
            pointFormat: '',
            split: true,
            valueSuffix: ' atividades'
          },

          // plotOptions: {
          //   bar: {
          //     allowPointSelect: true,
          //     cursor: 'pointer',
          //     depth: 35,
          //     dataLabels: { allowOverlap: false, enabled: true, format: '' }
          //   }
          // },
          plotOptions: {
            area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                lineWidth: 1,
                lineColor: '#666666'
              }
            }
          },

          legend: {
            layout: 'horizontal',
            itemDistance: 1,
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0,
            x: 0,
            y: 0,
            margin: 0,
            itemStyle: {
              color: '#6b6b47',
              fontWeight: 'normal',
              fontSize: '12px'
            }
          },

          series: [{
            name: 'Backlog Not Ready',
            data: getters.dataChartCFDGroupDate.map(i => i.backlogNotReady)
          }, {
            name: 'Backlog Ready',
            data: getters.dataChartCFDGroupDate.map(i => i.backlogReady)
          }, {
            name: 'On Going',
            data: getters.dataChartCFDGroupDate.map(i => i.onGoing)
          }, {
            name: 'Finalizado',
            data: getters.dataChartCFDGroupDate.map(i => i.finished)
          }]
        }

        commit(types.paramChartCFD, param)
      },
      e => console.log(e)
    )
}

export const setFilterTerm = ({ commit }, filterTerm) => {
  commit(types.filterTerm, filterTerm)
}

export const setSelected = ({ commit }, selected) => {
  commit(types.selected, selected)
}

export const updateSelected = ({ commit }, updatedItem) => {
  services.update(updatedItem)

  commit(types.updateSelected, updatedItem)

  Toastr.success('Dados gravados!')
}
