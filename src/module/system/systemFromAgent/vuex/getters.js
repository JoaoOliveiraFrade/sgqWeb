export const getDataFbyDevManuf = ({ dataGbyDevManuf }) => filterDevManuf => {
  const result = dataGbyDevManuf.filter((el) => {
    filterDevManuf.some((d) => d.id === el.devManuf)
  })

  const resultUnique = result.filter((el, index, arr) =>
    arr.findIndex((i) => i.system === el.system && i.tower === el.tower) === index
  ).map(m => ({system: m.system, tower: m.tower}))

  return resultUnique
}

// export const getDataFbyDevManuf = ({ dataGbyDevManuf, filterDevManuf }) => {
//   const result = dataGbyDevManuf.filter((el) => {
//     return filterDevManuf.some((d) => d.id === el.devManuf)
//   })

//   const resultUnique = result.filter((el, index, arr) =>
//     arr.findIndex((i) => i.system === el.system && i.tower === el.tower) === index
//   ).map(m => ({system: m.system, tower: m.tower}))

//   return resultUnique
// }
