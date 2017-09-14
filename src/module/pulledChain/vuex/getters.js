export const filteredByTerm = ({ data, filterProperties, filterTerm }) => {
  if (filterTerm !== '') {
    let words = filterTerm.split('+')

    return data.filter(item => {
      return words.every(word => {
        return filterProperties.some(filterProperty => {
          return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
      })
    })
  } else {
    return data
  }
}

export const dataChartCFDGroupDate = ({ dataChartCFD }) => {
  let result = []
  dataChartCFD.forEach(i => {
    let index = result.findIndex(r => r.date === i.date)
    if (index > -1) {
      result[index].backlogNotReady += i.backlogNotReady
      result[index].backlogReady += i.backlogReady
      result[index].onGoing += i.onGoing
      result[index].finished += i.finished
    } else {
      result.push({
        date: i.date,
        backlogNotReady: i.backlogNotReady,
        backlogReady: i.backlogReady,
        onGoing: i.onGoing,
        finished: i.finished
      })
    }
  })
  return result
}
