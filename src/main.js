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

import VueHtml5Editor from 'vue-html5-editor'

// // froala
// // =============================================================
// import 'froala-editor/js/froala_editor.pkgd.min'
// import 'froala-editor/js/languages/pt_br.js'
// import 'froala-editor/css/froala_editor.pkgd.min.css'
// import 'font-awesome/css/font-awesome.css'
// import 'froala-editor/css/froala_style.min.css'
// // import VueFroala from 'vue-froala-wysiwyg'
// import VueFroala from 'vue-froala/vue-froala.es5'

// Vue.use(VueFroala)

Vue.use(VueHtml5Editor, {
  // global component name
  name: 'vue-html5-editor',
  // if set true,will append module name to toolbar after icon
  showModuleName: false,
  // custom icon class of built-in modules,default using font-awesome
  icons: {
    text: 'fa fa-pencil',
    color: 'fa fa-paint-brush',
    font: 'fa fa-font',
    align: 'fa fa-align-justify',
    list: 'fa fa-list',
    link: 'fa fa-chain',
    unlink: 'fa fa-chain-broken',
    tabulation: 'fa fa-table',
    image: 'fa fa-file-image-o',
    hr: 'fa fa-minus',
    eraser: 'fa fa-eraser',
    undo: 'fa-undo fa',
    'full-screen': 'fa fa-arrows-alt',
    info: 'fa fa-info'
  },
  // config image module
  image: {
    sizeLimit: 512 * 1024,
    // upload config,default null and convert image to base64
    upload: {
      url: null,
      headers: {},
      params: {},
      fieldName: {}
    },
    // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
    // set null to disable compression
    compress: {
      width: 1600,
      height: 1600,
      quality: 80
    },
    // handle response data，return image url
    uploadHandler (responseText) {
      // default accept json data like  {ok:false,msg:'unexpected'} or {ok:true,data:'image url'}
      var json = JSON.parse(responseText)
      if (!json.ok) {
        alert(json.msg)
      } else {
        return json.data
      }
    }
  },
  // default en-us, en-us and zh-cn are built-in
  language: 'zh-cn',
  i18n: {
    // specify your language here
    'zh-cn': {
      'align': '对齐方式',
      'image': '图片',
      'list': '列表',
      'link': '链接',
      'unlink': '去除链接',
      'table': '表格',
      'font': '文字',
      'full screen': '全屏',
      'text': '排版',
      'eraser': '格式清除',
      'info': '关于',
      'color': '颜色',
      'please enter a url': '请输入地址',
      'create link': '创建链接',
      'bold': '加粗',
      'italic': '倾斜',
      'underline': '下划线',
      'strike through': '删除线',
      'subscript': '上标',
      'superscript': '下标',
      'heading': '标题',
      'font name': '字体',
      'font size': '文字大小',
      'left justify': '左对齐',
      'center justify': '居中',
      'right justify': '右对齐',
      'ordered list': '有序列表',
      'unordered list': '无序列表',
      'fore color': '前景色',
      'background color': '背景色',
      'row count': '行数',
      'column count': '列数',
      'save': '确定',
      'upload': '上传',
      'progress': '进度',
      'unknown': '未知',
      'please wait': '请稍等',
      'error': '错误',
      'abort': '中断',
      'reset': '重置'
    },
    // the modules you don't want
    hiddenModules: [],
    // keep only the modules you want and customize the order.
    // can be used with hiddenModules together
    visibleModules: [
      'text',
      'color',
      'font',
      'align',
      'list',
      'link',
      'unlink',
      'tabulation',
      'image',
      'hr',
      'eraser',
      'undo',
      'full-screen',
      'info'
    ],
    // extended modules
    modules: {
      // omit,reference to source code of build-in modules
    }
  }
})

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
