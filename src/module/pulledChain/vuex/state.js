export default {
  filterProperties: [
    { name: 'subprojectDelivery' },
    { name: 'state' },
    { name: 'RT' },
    { name: 'UN' },
    { name: 'Typification' },
    { name: 'releaseClarity' },
    { name: 'statusStrategyTestingAndContracting' },
    { name: 'statusTimeline' },
    { name: 'statusTestPlan' }
  ],

  data: [],
  filteredByText: [],

  filterTerm: '',
  selected: {},

  paramChatCFD: {
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

    subtitle: { text: 'Fonte: SGQ' },

    credits: { enabled: false },
    exporting: { enabled: false },
    lang: { noData: 'Sem dados!' },

    // xAxis: { type: 'category', labels: { style: { fontSize: '10px', padding: '[0px 0px 0px 0px]' } } },
    xAxis: {
      categories: ['11/09/2017', '12/09/2017', '13/09/2017'],
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
      data: [259, 259, 262]
    }, {
      name: 'Backlog Ready',
      data: [68, 68, 68]
    }, {
      name: 'On Going',
      data: [31, 31, 31]
    }, {
      name: 'Finalizado',
      data: [209, 209, 209]
    }]
  }
}
