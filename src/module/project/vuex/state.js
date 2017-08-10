export default {
  projectFilterProperties: [
    {name: 'release'},
    {name: 'classification'},
    {name: 'subprojectDelivery'},
    {name: 'name'}
  ],

  projectFilterTerm: '',

  projects: [],
  projectsByDevManufsAndSystems: [],
  projectsByTestManufsAndSystems: [],
  projectsLoading: false,
  selectedProjects: [],
  project: {},

  projectConfirmed: false
}
