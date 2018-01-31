export default {
  filterProperties: [
    { name: 'id' },
    { name: 'name' },
    { name: 'month' },
    { name: 'year' }
  ],

  loading: false,
  data: [],
  filterTerm: '',

  monoSelected: {},
  multiSelected: [],

  searchStatus: 'search'
}
