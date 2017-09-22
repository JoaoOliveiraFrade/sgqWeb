export const ofQueueFbyDevManufs = ({ devManufs, ofQueueGroupDevManufs }) => {
  const list = ofQueueGroupDevManufs.filter((el) => {
    return devManufs.some((f) => f.id === el.devManuf)
  })
  .map(m => m.system)

  const listUnique = list.filter((item, pos) => list.indexOf(item) === pos)

  return listUnique.map(m => ({id: m, name: m}))
}
