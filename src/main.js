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
/* eslint-enaable */

import 'babel-polyfill'

import Vue from 'vue'
import router from './router'
import store from './vuex'

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'toastr/build/toastr.min.css'
import 'toastr/build/toastr.min.js'

import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/js/languages/pt_br.js'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'
import 'froala-editor/css/froala_style.min.css'
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  },
  update: function (el) {
    Vue.nextTick(() => { el.focus() })
  }
})

import App from './App'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
