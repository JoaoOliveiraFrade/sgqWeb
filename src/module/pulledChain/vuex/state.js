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
  dataChartCFD: [],

  paramChartCFD: {
    chart: {
      type: 'area',
      zoomType: 'xy',
      backgroundColor: 'transparent',
      style: { fontFamily: 'arial' }
    },
    title: {
      text: 'Gráfico CFD',
      margin: 10,
      style: { fontSize: 13, fontWeight: 'bold', color: '#6b6b47' }
    },

    colors: ['#FF0000', '#A3FC4C', '#315B7E', '#808080'],

    credits: { enabled: false },
    exporting: { enabled: false },
    lang: { noData: 'Sem dados!' },

    // xAxis: { type: 'category', labels: { style: { fontSize: '10px', padding: '[0px 0px 0px 0px]' } } },
    xAxis: {
      categories: [], // getters.dataChartCFDGroupDate.map(i => i.date),
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
      margin: 10,
      itemStyle: {
        color: '#6b6b47',
        fontWeight: 'normal',
        fontSize: '11px'
      }
    },

    series: [{
      name: 'Backlog Not Ready',
      data: [] // getters.dataChartCFDGroupDate.map(i => i.backlogNotReady)
    }, {
      name: 'Backlog Ready',
      data: [] // getters.dataChartCFDGroupDate.map(i => i.backlogReady)
    }, {
      name: 'On Going',
      data: [] // getters.dataChartCFDGroupDate.map(i => i.onGoing)
    }, {
      name: 'Finalizado',
      data: [] // getters.dataChartCFDGroupDate.map(i => i.finished)
    }]

  },

  loading: false,

  filteredByText: [],

  filterTerm: '',
  selected: {}
}
