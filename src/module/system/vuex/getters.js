export const ofQueueFilteredDevManufs = ({ devManufs, ofQueueGroupDevManufs }) => {
  return ofQueueGroupDevManufs.filter((el) => {
    return devManufs.some((f) => f.id === el.devManuf)
  }).map(m => ({id: m.system, name: m.system}))
}
