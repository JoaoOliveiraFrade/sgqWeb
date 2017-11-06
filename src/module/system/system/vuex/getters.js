export const getDataFbyDevManuf = ({ dataGbyDevManuf }) => filterDevManuf => {
  const result = dataGbyDevManuf.filter(el => filterDevManuf.some(f => f.id === el.devManuf))

  const unique = result.filter((el, index, arr) =>
    arr.findIndex(i => i.id === el.id) === index
  ).map(m => ({ id: m.id, name: m.name, tower: m.tower }))

  return unique
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
