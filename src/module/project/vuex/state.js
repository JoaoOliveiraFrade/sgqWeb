export default {
  projectFilterProperties: [
    { name: 'trafficLight' },
    { name: 'subprojectDelivery' },
    { name: 'name' },
    { name: 'state' },
    { name: 'release' },
    { name: 'classification' }
  ],

  data: [],
  ofTestManufsAndSystems: [],
  ofDevManufsAndSystems: [],

  filterTerm: '',
  selected: [],
  loading: false,

  selectedMonoselection: {},

  operDevDefectDensity: {},
  operDevDefectAverangeTime: {},
  operDevDefectReopened: {},
  operDevDefectOfTSInTI: {},

  operTestProductivity: {}

  // perfDevDefectDensity: {}
}
