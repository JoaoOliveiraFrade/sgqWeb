import oiMain from './Main.vue'
import oiShowByIdGrouperConsult from './comp/ShowByIdGrouperConsult.vue'
import oiReportByIdGrouperConsult from './comp/ReportByIdGrouperConsult.vue'
import oiRequestReportGrouperConsult from './comp/RequestReportGrouperConsult.vue'
// import oiShow from './comp/show.vue'
import oiReport from './comp/report.vue'

export default [
  { path: '/grouperConsult/search', name: 'searchGrouperConsult', component: oiMain },
  { path: '/grouperConsult/showById/:grouper', name: 'showByIdGrouperConsult', component: oiShowByIdGrouperConsult },
  { path: '/grouperConsult/reportById/:grouper', name: 'reportByIdGrouperConsult', component: oiReportByIdGrouperConsult },
  { path: '/grouperConsult/requestReport/:grouper', name: 'requestReportGrouperConsult', component: oiRequestReportGrouperConsult },
  // { path: '/grouperConsult/show/:grouper', name: 'grouperShow', component: oiShow },
  { path: '/grouperConsult/report/:grouper', name: 'grouperReport', component: oiReport }
]
