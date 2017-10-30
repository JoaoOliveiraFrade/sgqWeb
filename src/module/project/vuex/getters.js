export const projectFilterTerm = ({ projectFilterTerm }) => projectFilterTerm

export const projects = ({ projects }) => projects

export const projectsByTestManufsAndSystems = ({ projectsByTestManufsAndSystems }) => projectsByTestManufsAndSystems

export const projectsLoading = ({ projectsLoading }) => projectsLoading

export const selectedProjects = ({ selectedProjects }) => selectedProjects

export const projectsFilteredByTerm = ({ projectFilterProperties, projectFilterTerm }) => projects => {
  if (projectFilterTerm !== '') {
    let words = projectFilterTerm.split('+')

    return projects.filter(item => {
      return words.every(word => {
        return projectFilterProperties.some(filterProperty => {
          return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
      })
    })
  } else {
    return projects
  }
}

export const filteredByTerm = ({ data, filterTerm, projectFilterProperties }) => {
  if (filterTerm !== '') {
    let words = filterTerm.split('+')

    return data.filter(item => {
      return words.every(word => {
        return projectFilterProperties.some(filterProperty => {
          return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
      })
    })
  } else {
    return data
  }
}

export const operDevDefectDensityTotal = ({ operDevDefectDensity }) => {
  let qtyDefect = operDevDefectDensity.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyCt = operDevDefectDensity.reduce((sum, e) => sum + e.qtyCt, 0)
  return {
    qtyDefect,
    qtyCt,
    density: Number((qtyDefect / (qtyCt !== 0 ? qtyCt : 1) * 100).toFixed(2))
  }
}

export const operDevDefectAverangeTimeTotalHIGH = ({ operDevDefectAverangeTime }) => {
  let high = operDevDefectAverangeTime.filter(i => i.severity === 'HIGH')

  let qtyDefect = high.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyHour = Number(high.reduce((sum, e) => sum + e.qtyHour, 0).toFixed(2))
  let averangeHour = Number((qtyHour / (qtyDefect !== 0 ? qtyDefect : 1)).toFixed(2))

  return { qtyDefect, qtyHour, averangeHour }
}

export const operDevDefectReopenedTotal = ({ operDevDefectReopened }) => {
  let qtyReopened = Number(operDevDefectReopened.reduce((sum, e) => sum + e.qtyReopened, 0).toFixed(2))
  let qtyDefect = operDevDefectReopened.reduce((sum, e) => sum + e.qtyDefect, 0)
  let percReopened = Number((qtyReopened / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2))

  return { qtyReopened, qtyDefect, percReopened }
}

export const operDevDefectOfTSInTITotal = ({ operDevDefectOfTSInTI }) => {
  let qtyOfTSInTI = Number(operDevDefectOfTSInTI.reduce((sum, e) => sum + e.qtyOfTSInTI, 0).toFixed(2))
  let qtyDefect = operDevDefectOfTSInTI.reduce((sum, e) => sum + e.qtyDefect, 0)
  let percOfTSInTI = Number((qtyOfTSInTI / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2))

  return { qtyOfTSInTI, qtyDefect, percOfTSInTI }
}

export const operTestProductivityTotal = ({ operTestProductivity }) => {
  let productivity = Number(operTestProductivity.reduce((sum, e) => sum + e.productivity, 0).toFixed(2))
  let passed = operTestProductivity.reduce((sum, e) => sum + e.passed, 0)
  let failed = operTestProductivity.reduce((sum, e) => sum + e.failed, 0)

  return { productivity, passed, failed }
}

export const operTestRejectionEvidenceMapType = ({operTestRejectionEvidence, selectedrejectedType}) => {
  if (selectedrejectedType === 'Técnica') {
    return operTestRejectionEvidence.map(i => ({
      month: i.month,
      year: i.year,
      testManuf: i.testManuf,
      system: i.system,
      subprojectDelivery: i.subprojectDelivery,
      qtyEvidence: i.qtyEvidence,
      qtyRejection: i.qtyRejectionTechnique
    })).filter(f => f.qtyEvidence > 0 || f.qtyRejection > 0)
  } else if (selectedrejectedType === 'Cliente') {
    return operTestRejectionEvidence.map(i => ({
      month: i.month,
      year: i.year,
      testManuf: i.testManuf,
      system: i.system,
      subprojectDelivery: i.subprojectDelivery,
      qtyEvidence: i.qtyEvidenceClient,
      qtyRejection: i.qtyRejectionClient
    })).filter(f => f.qtyEvidence > 0 || f.qtyRejection > 0)
  } else {
    return operTestRejectionEvidence.map(i => ({
      month: i.month,
      year: i.year,
      testManuf: i.testManuf,
      system: i.system,
      subprojectDelivery: i.subprojectDelivery,
      qtyEvidence: i.qtyEvidence,
      qtyRejection: i.qtyRejectionTotal
    })).filter(f => f.qtyEvidence > 0 || f.qtyRejection > 0)
  }
}
export const operTestRejectionEvidenceTotal = (state, { operTestRejectionEvidenceMapType }) => {
  let qtyEvidence = operTestRejectionEvidenceMapType.reduce((sum, e) => sum + e.qtyEvidence, 0)
  let qtyRejection = operTestRejectionEvidenceMapType.reduce((sum, e) => sum + e.qtyRejection, 0)
  let percRejected = Number((qtyRejection / (qtyEvidence !== 0 ? qtyEvidence : 1) * 100).toFixed(2))

  return { qtyEvidence, qtyRejection, percRejected }
}

export const operTestDefectUnfoundedTotal = ({ operTestDefectUnfounded }) => {
  let qtyDefect = operTestDefectUnfounded.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyUnfounded = operTestDefectUnfounded.reduce((sum, e) => sum + e.qtyUnfounded, 0)
  let percUnfounded = Number((qtyUnfounded / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2))
  return { qtyDefect, qtyUnfounded, percUnfounded }
}

export const operTestDefectUATTotal = ({ operTestDefectUAT }) => {
  let qtyDefect = operTestDefectUAT.reduce((sum, e) => sum + e.qtyDefect, 0)
  let qtyUAT = operTestDefectUAT.reduce((sum, e) => sum + e.qtyUAT, 0)
  let percUAT = Number((qtyUAT / (qtyDefect !== 0 ? qtyDefect : 1) * 100).toFixed(2))
  return { qtyDefect, qtyUAT, percUAT }
}

// export const perfDevDefectDensityTotal = ({ perfDevDefectDensity }) => {
//   let qtyDefect = perfDevDefectDensity.reduce((sum, e) => sum + e.qtyDefect, 0)
//   let qtyCt = perfDevDefectDensity.reduce((sum, e) => sum + e.qtyCt, 0)
//   return {
//     qtyDefect,
//     qtyCt,
//     density: Number((qtyDefect / (qtyCt !== 0 ? qtyCt : 1) * 100).toFixed(2))
//   }
// }

// export const perfDefectDensityTotal = ({ perfDefectDensity }) => {
//   let qtyDefect = perfDefectDensity.reduce((sum, e) => sum + e.qtyDefect, 0)
//   let qtyCt = perfDefectDensity.reduce((sum, e) => sum + e.qtyCt, 0)
//   return {
//     qtyDefect,
//     qtyCt,
//     density: Number((qtyDefect / (qtyCt !== 0 ? qtyCt : 1) * 100).toFixed(2))
//   }
// }

