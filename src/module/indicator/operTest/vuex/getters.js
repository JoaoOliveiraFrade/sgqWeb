export const showData = ({ selectedProjects }) => {
  if (selectedProjects.length > 0) {
    return true
  } else {
    return false
  }
}
