// export const groupTestManuf = ({data}) => {
//   let result = []
//   data.forEach(i => {
//     let index = result.findIndex(r => r.testManuf === i.testManuf)
//     if (index > -1) {
//       result[index].qtyDefect += i.qtyDefect
//       result[index].qtyRetestHours += i.qtyRetestHours
//     } else {
//       result.push({
//         testManuf: i.testManuf,
//         qtyDefect: i.qtyDefect,
//         qtyRetestHours: i.qtyRetestHours,
//         defectAverangeRetestTime: 0
//       })
//     }
//   })
//   result.forEach(r => {
//     r.defectAverangeRetestTime = parseFloat(parseFloat(r.qtyRetestHours / (r.qtyDefect !== 0 ? r.qtyDefect : 1)).toFixed(2))
//   })
//   return result.filter(r => r.defectAverangeRetestTime > 0).sort((a, b) => a.defectAverangeRetestTime > b.defectAverangeRetestTime ? 1 : -1)
// }

// export const byTestManufGroupSystem = ({data}) => (testManuf) => {
//   let byTestManuf = data.filter(p => p.testManuf === testManuf)

//   let result = []
//   byTestManuf.forEach(i => {
//     let index = result.findIndex(r => r.system === i.system)
//     if (index > -1) {
//       result[index].qtyDefect += i.qtyDefect
//       result[index].qtyRetestHours += i.qtyRetestHours
//     } else {
//       result.push({
//         system: i.system,
//         qtyDefect: i.qtyDefect,
//         qtyRetestHours: i.qtyRetestHours,
//         defectAverangeRetestTime: 0
//       })
//     }
//   })
//   result.forEach(r => {
//     r.defectAverangeRetestTime = parseFloat(parseFloat(r.qtyRetestHours / (r.qtyDefect !== 0 ? r.qtyDefect : 1)).toFixed(2))
//   })
//   return result.filter(r => r.defectAverangeRetestTime > 0).sort((a, b) => a.defectAverangeRetestTime > b.defectAverangeRetestTime ? 1 : -1)
// }

// export const filteredByChart = ({data, testManufSelected, systemSelected}) => {
//   if (testManufSelected === '' && systemSelected === '') {
//     return data
//   } else if (systemSelected === '') {
//     return data.filter(i => i.testManuf === testManufSelected)
//   } else {
//     return data.filter(i => i.testManuf === testManufSelected && i.system === systemSelected)
//   }
// }

// export const groupTimeline = ({limitMaxQtyHours}, {filteredByChart, total}) => {
//   let result = []
//   filteredByChart.forEach(i => {
//     let index = result.findIndex(r => r.yearMonth === (i.year + i.month))
//     if (index > -1) {
//       result[index].qtyDefect += i.qtyDefect
//       result[index].qtyRetestHours += i.qtyRetestHours
//     } else {
//       result.push({
//         yearMonth: i.year + i.month,
//         monthYear: i.month + '/' + i.year,
//         qtyDefect: i.qtyDefect,
//         qtyRetestHours: i.qtyRetestHours,
//         defectAverangeRetestTime: 0,
//         qtyAccDefect: 0,
//         qtyAccRetestHours: 0,
//         qtyAccdefectAverangeRetestTime: 0,
//         limitMaxQtyHours: limitMaxQtyHours
//       })
//     }
//   })
//   let qtyAccDefect = 0
//   let qtyAccRetestHours = 0
//   result.forEach(i => {
//     i.defectAverangeRetestTime = parseFloat(parseFloat(i.qtyRetestHours / (i.qtyDefect !== 0 ? i.qtyDefect : 1)).toFixed(2))
//     qtyAccDefect = qtyAccDefect + i.qtyDefect
//     qtyAccRetestHours = qtyAccRetestHours + i.qtyRetestHours
//     i.qtyAccDefect = qtyAccDefect
//     i.qtyAccRetestHours = qtyAccRetestHours
//     i.qtyAccdefectAverangeRetestTime = parseFloat(parseFloat(qtyAccRetestHours / (qtyAccDefect !== 0 ? qtyAccDefect : 1)).toFixed(2))
//   })
//   return result.sort((a, b) => a.yearMonth > b.yearMonth ? 1 : -1)
// }

// export const total = (state, {filteredByChart}) => {
//   let qtyDefect = filteredByChart.reduce((sum, e) => sum + e.qtyDefect, 0)
//   let qtyRetestHours = filteredByChart.reduce((sum, e) => sum + e.qtyRetestHours, 0)
//   return {
//     qtyDefect,
//     qtyRetestHours,
//     defectAverangeRetestTime: parseFloat(parseFloat(qtyRetestHours / (qtyDefect !== 0 ? qtyDefect : 1)).toFixed(2))
//   }
// }

// export const chartTitle = ({testManufSelected, systemSelected}) => {
//   if (testManufSelected === '' && systemSelected === '') {
//     return 'Fáb.Teste / Sistema'
//   } else if (systemSelected === '') {
//     return (testManufSelected ? testManufSelected.charAt(0).toUpperCase() + testManufSelected.slice(1).toLowerCase() : 'Fáb.Teste') + ' / Sistema'
//   } else {
//     return (testManufSelected ? testManufSelected.charAt(0).toUpperCase() + testManufSelected.slice(1).toLowerCase() : 'Fáb.Teste') + ' / ' + (systemSelected ? systemSelected.charAt(0).toUpperCase() + systemSelected.slice(1).toLowerCase() : '')
//   }
// }
