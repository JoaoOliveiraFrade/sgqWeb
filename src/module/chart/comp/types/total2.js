export default {
  chart: {
    type: 'gauge',
    backgroundColor: 'transparent'
  },
  title: {
    text: 'title',
    margin: 0,
    style: { fontSize: 13, fontWeight: 'bold', color: '#6b6b47' }
  },
  credits: { enabled: false },
  exporting: { enabled: false },
  lang: { noData: 'Sem dados!' },
  yAxis: {
    min: 0,
    max: 100,
    tickPixelInterval: 30,
    minorTickInterval: 'auto',
    tickColor: '#666',
    title: { text: '% Dens' },
    labels: {step: 2},
    plotBands: []
  },
  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: true,
        format: '{point.y:.0f}'
      }
    }
  },
  tooltip: {
    pointFormat: '{point.y:.2f}%'
  },
  pane: {
    startAngle: -170,
    endAngle: 170
  },
  series: [
    {
      name: 'Densidade',
      colorByPoint: true,
      data: [ 55.5 ]
    }
  ],
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
}

