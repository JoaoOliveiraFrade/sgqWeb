// import oiMain from './comp/Main.vue'
import oiViewModel from './comp/viewModel.vue'
import oiMonoselectionAndShow from './comp/monoselectionAndShow.vue'
// import oiReport from './comp/report.vue'
// import oiViewModel2 from './comp/viewModel2.vue'

export default [
  // { path: '/projectConsultation', name: 'projectConsultation', component: oiMain },
  { path: '/project/show/:subproject/:delivery', name: 'projectShow', component: oiViewModel },
  { path: '/project/monoselectionAndShow', name: 'projectMonoselectionAndShow', component: oiMonoselectionAndShow }
  // { path: '/projectConsultation/report/:subproject/:delivery', name: 'projectReport', component: oiReport }
  // { path: '/project/report/:subproject/:delivery', name: 'projectReport', component: oiReport }
]
