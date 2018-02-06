export default {
  projectFilterProperties: [
    { name: 'trafficLight' },
    { name: 'subDel' },
    { name: 'name' },
    { name: 'state' },
    { name: 'currentRelease' },
    { name: 'classification' }
  ],

  data: [],
  fromTestManufsAndSystems: [],
  fromDevManufsAndSystems: [],

  filterTerm: '',
  selected: [],
  loading: false,

  state: 'search',

  selectedMonoselection: {},

  iterations: [],
  iterationsActive: [],
  iterationsSelected: [],

  operDevDefectDensity: [],
  operDevDefectAverangeTime: [],
  operDevDefectReopened: [],

  operTestProductivity: [],

  operTestRejectionEvidence: [],
  selectedRejectionType: 'Total',

  operTestDefectUnfounded: [],
  operTestDefectUAT: [],
  operTestDefectAverangeRetestTime: [],

  perfDevDefectDensity: [],
  perfDevDefectOfTSInTI: [],

  defectStatus: [],
  defectGroupOrigin: [],
  ctImpactedXDefects: [],
  defectsOpenInTestManuf: [],
  defectsOpenInDevManuf: [],

  testStatus: [],
  releasesLossReason: []
}
