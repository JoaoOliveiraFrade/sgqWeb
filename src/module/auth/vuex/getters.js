export const isLogged = ({ token }) => token !== ''
export const buttonLabel = (state, { isLogged }) => isLogged ? 'Logoff' : 'Logon'

export const currentUser = ({ user }) => user
export const currentUserProfiles = ({ currentUserProfiles }) => currentUserProfiles

// export const groupDevManuf = ({data}) => {
//   let result = []
//   data.forEach(d => {
//     let index = result.findIndex(r => r.devManuf === d.devManuf)
//     if (index > -1) {
//       result[index].qtyDefect += d.qtyDefect
//       result[index].qtyCt += d.qtyCt
//     } else {
//       result.push({
//         devManuf: d.devManuf,

//         qtyDefect: d.qtyDefect,
//         qtyCt: d.qtyCt,
//         density: 0
//       })
//     }
//   })
//   result.forEach(r => {
//     r.density = parseFloat(parseFloat(r.qtyDefect / (r.qtyCt !== 0 ? r.qtyCt : 1) * 100).toFixed(2))
//   })
//   return result.filter(r => r.density > 0).sort((a, b) => a.density > b.density ? 1 : -1)
// }
