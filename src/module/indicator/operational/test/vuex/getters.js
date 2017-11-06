export const showData = ({ selectedProject }) => {
  if (selectedProject.length > 0) {
    return true
  } else {
    return false
  }
}
