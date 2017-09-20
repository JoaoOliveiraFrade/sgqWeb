export const ofQueueFilteredDevManufs = ({ devManufs, ofQueueGroupDevManufs }) => {
  return ofQueueGroupDevManufs.filter(f => devManufs.indexOf(f.devManuf) > -1)
}
