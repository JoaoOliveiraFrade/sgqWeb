import oiSearch from './comp/Search.vue'
import oiShowById from './comp/ShowById.vue'
import oiReportByIdGrouperConsult from './comp/ReportByIdGrouperConsult.vue'
import oiShowReportById from './comp/ShowReportById.vue'
// import oiShow from './comp/show.vue'
import oiReport from './comp/report.vue'

export default [
  { path: '/grouper/search', name: 'groupSearch', component: oiSearch },
  { path: '/grouper/showById/:grouperId', name: 'grouperShowById', component: oiShowById },
  { path: '/grouper/showReportById/:grouperId', name: 'grouperShowReportById', component: oiShowReportById },
  { path: '/grouperConsult/reportById/:grouper', name: 'reportByIdGrouperConsult', component: oiReportByIdGrouperConsult },
  // { path: '/grouperConsult/show/:grouper', name: 'grouperShow', component: oiShow },
  { path: '/grouperConsult/report/:grouper', name: 'grouperReport', component: oiReport }
]
