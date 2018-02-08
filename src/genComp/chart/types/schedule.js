export default function () {
  return {
    chart: {
      type: 'xrange',
      backgroundColor: 'transparent'
    },

    title: {
      text: ''
    },

    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },

    xAxis: {
      type: 'datetime'
    },

    yAxis: {
      title: {
        text: ''
      },
      categories: ['TI e UAT', 'TRG', 'PRD', 'Estabilização'],
      reversed: true
    },

    series: [
      {
        name: 'sdfdsfasdasdfdas',
        // pointPadding: 0,
        // groupPadding: 0,
        borderColor: 'gray',
        pointWidth: 20,
        data: [{
          y: 0,
          x: Date.UTC(2016, 10, 21),
          x2: Date.UTC(2016, 11, 22),
          partialFill: 0.75
        }, {
          y: 1,
          x: Date.UTC(2016, 11, 19),
          x2: Date.UTC(2016, 11, 25)
        }, {
          y: 2,
          x: Date.UTC(2016, 11, 25),
          x2: Date.UTC(2016, 11, 30)
        }, {
          y: 3,
          x: Date.UTC(2016, 11, 30),
          x2: Date.UTC(2016, 12, 9)
        }],
        dataLabels: {
          enabled: true
        }
      }
    ]
  }
}
