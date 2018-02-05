import 'babel-polyfill'

import Vue from 'vue'
import router from './router'
import store from './vuex'

import App from './App'
import VueResource from 'vue-resource'

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// toastr
// =============================================================
import 'toastr/build/toastr.min.css'
import 'toastr/build/toastr.min.js'

import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/js/languages/pt_br.js'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'
import 'froala-editor/css/froala_style.min.css'
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)

Vue.use(VueResource)

/* eslint-disable */
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (de, para) {
    var str = this.toString()
    var pos = str.indexOf(de)
    while (pos > -1) {

      str = str.replace(de, para)
      pos = str.indexOf(de)
    }
    return (str)
  }
}

// String.prototype.replaceAll = function(search, replacement) {
//     var target = this
//     return target.replace(new RegExp(search, 'g'), replacement)
// }
/* eslint-enable */

Vue.config.productionTip = false

// // ag-grid
// // =============================================================
// import '../node_modules/ag-grid/dist/styles/ag-grid.css'
// import '../node_modules/ag-grid/dist/styles/theme-fresh.css'
// // import 'ag-grid-enterprise/main'
// import {LicenseManager} from 'ag-grid-enterprise/main'
// LicenseManager.setLicenseKey('ag-Grid_Evaluation_License_Key_Not_for_Production_1Devs10_January_2018__MTUxNTU0MjQwMDAwMA==8830dbe7d628f87ebb04ff34328f72eb')

// vue-tables-2
// =============================================================
// import { ClientTable } from 'vue-tables-2'
// Vue.use(ClientTable, {}, false, require('../node_modules/vue-tables-2/compiled/template.js')('client'))

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  },
  update: function (el) {
    Vue.nextTick(() => { el.focus() })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
