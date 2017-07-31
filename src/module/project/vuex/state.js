export default {
  projectFilterProperties: [
    {name: 'release'},
    {name: 'classification'},
    {name: 'subprojectDelivery'},
    {name: 'name'}
  ],

  projectFilterTerm: '',

  projects: [],
  projectsByTestManufsAndSystems: [],
  projectsByTestManufsAndSystemsLoading: false,
  selectedProjects: [],
  project: {},

  projectConfirmed: false
}
