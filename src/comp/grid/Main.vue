<script>
  import oiSelection from '@/comp/selectionGrid/Main.vue'
  // import 'select2/dist/css/select2.css'
  // import 'select2/dist/js/select2.js'
  // import jQuery from 'jquery/dist/jquery.js'
  import vSelect from 'vue-select'

  export default {
    name: 'Grid',

    props: {
      data: Array,
      filterTermMessage: { type: String, default: '' },
      selectionType: { type: String, default: 'none' },
      columns: Array
    },

    components: { oiSelection, vSelect },

    data () {
      let sortOrders = {}
      this.columns.forEach(column => {
        sortOrders[column.id] = 0
      })

      let selectedOptions = {}
      this.columns.forEach(c => {
        selectedOptions[c.id] = []
      })

      let columnNames = {}
      this.columns.forEach(c => {
        columnNames[c.id] = c.name.replaceAll('br>', '').replaceAll('-<', '').replaceAll('<', ' ')
      })

      return ({
        filterTerm: '',
        sortColumnName: '',
        sortOrders,
        selectedOptions,
        // selectedColumns: this.columns.filter(c => c.visible).map(c => columnNames[c.id]),

        optionsColumns: this.columns.map(c => ({
          value: c.id,
          label: columnNames[c.id]
        })),

        selectedColumns: this.columns.filter(c => c.visible).map(c => ({
          value: c.id,
          label: columnNames[c.id]
        }))
      })
    },

    computed: {
      filteredData () {
        let data = this.data

        if (this.filterTerm) {
          data = data.filter(row => {
            return Object.keys(row).some(key => {
              return String(row[key]).toLowerCase().indexOf(this.filterTerm) > -1
            })
          })
        }

        let filterColumns = this.columns.filter(column => this.selectedOptions[column.id].length !== 0 && column.filterOptions.length !== this.selectedOptions[column.id].length)

        if (filterColumns.length > 0) {
          data = data.filter(item => {
            return filterColumns.every(filterColumn => {
              return this.selectedOptions[filterColumn.id].findIndex(e => e.id === item[filterColumn.id]) > -1
            })
          })
        }

        if (this.sortColumnName) {
          data = data.slice().sort((a, b) => {
            a = a[this.sortColumnName]
            b = b[this.sortColumnName]
            return (a === b ? 0 : a > b ? 1 : -1) * this.sortOrders[this.sortColumnName]
          })
        }
        return data
      }
    },

    filters: {
      capitalize (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },

    methods: {
      setSelectedColumns () {
        this.columns.forEach(c => {
          console.log(c.id + ': ' + c.visible + ' - ' + (this.selectedColumns.findIndex(o => o.value === c.id) > -1))
          c.visible = (this.selectedColumns.findIndex(o => o.value === c.id) > -1)
        })
      },

      sortIcon (column) {
        if (this.sortColumnName === '' || column.id !== this.sortColumnName) {
          return 'glyphicon-sort'
        } else if (this.sortOrders[column.id] > 0) {
          return 'glyphicon-sort-by-attributes'
        } else {
          return 'glyphicon-sort-by-attributes-alt'
        }
      },

      yesNoImage (data) {
        return '<img alt="Farol Vermelho" src="../../asset/image/vermelho-sm.png" class="img">'
        // if (data === 'SIM') {
        //   return '<img src="../../asset/image/verde.png" class="img">'
        // } else {
        //   return '<img src="../../asset/image/vermelho.png" class="img">'
        // }
      }
    },

    watch: {
      'columns': {
        handler () {
          this.columns.forEach(c => {
            this.selectedOptions[c.id] = c.filterOptions
          })
        }
      }
    }
  }
</script>

<template>
  <div>
    <div class="row" style="padding: 0px 15px">

      <input type="text" class="form-control" 
        style="margin: 0; padding-left: 3px; height: 25px"
        autofocus v-focus
        v-model="filterTerm"
        v-show="filterTermMessage != ''"
        :placeholder="filterTermMessage"
      />    

    </div>

    <div class="row" style="padding: 0px 15px">

      <v-select multiple
        style="font-size: 12px"
        placeholder="Informe as colunas para exibição"
        :searchable="true"
        :options="optionsColumns"
        :value="selectedColumns" 
        :onChange="setSelectedColumns"
        >
      </v-select>

    </div>
    
<!--
        v-model="selectedColumns" 
  
          v-select2="selected_college_class_id"> 
        :value="column.id">{{ column.name.replace('-<br>', '') }}
        <option value="" disabled selected>Choose a class</option>
            {{ column.name.replaceAll('br>', '').replaceAll('-<','').replaceAll('<', ' ') }}
      <div class="col-sm-4">
        <v-selec multiple 
          ref="sfsdfdsdf"
          class="form-control"
          style="margin: 0; padding-left: 3px"
          v-model="selectedColumns"
          @change="setSelectedColumns">

          <option v-for="(column, index) in columns" :key="index"
            :value="column.id">
            {{ column.name.replaceAll('br>', '').replaceAll('-<','').replaceAll('<', ' ') }}
          </option>

        </v-selec>
      </div>
-->

    <!-- @keyup="setProjectFilterTerm(filterTerm)" -->

    <table class="table table-condensed table-striped table-hover table-bordered">
      <thead>

        <tr>
          <th style="padding: 0px 2px;" v-show="selectionType !== 'none'"/>

          <!-- :class="{ active: sortColumnName == column.id }" -->
          <th v-for="(column, index) in columns" :key="index"
            v-show="column.visible"
            :style="'padding: 0px 2px; font-size: 12px; vertical-align: middle; white-space: nowrap; text-align:' + column.alignHeader">

            <span style="white-space: normal" v-html="column.name"/>

          </th>
        </tr>

        <tr>
          <th style="padding: 0px 1px" v-show="selectionType !== 'none'"/>

          <!-- :class="{ active: sortColumnName == column.id }" -->
          <th v-for="(column, index) in columns" :key="index"
            v-show="column.visible"
            :style="'padding: 0px 1px; font-size: 12px; vertical-align: middle; white-space: nowrap; text-align:' + column.alignHeader">

            <a title="Ordenar"
              v-show="column.sort"
              @click="setSortColumn(column)">

              <i :class="'glyphicon ' + sortIcon(column)" style="font-size: 12px;"/>
            </a>

            <oiSelection
              v-show="column.filterOptions.length > 0"
              :title="column.id"
              :data="column.filterOptions"
              :selected="selectedOptions[column.id]"
              @onConfirm="selected => selectedOptions[column.id] = selected"
            />

          </th>

        </tr>
      </thead>

      <tbody>
        <tr v-for="(row,index) in filteredData" :key="index">

          <td style="padding: 0px 2px; padding-right:3px; vertical-align: middle; width: 1px" v-show="selectionType !== 'none'">
            <a href="#"
              data-toggle="tooltip"
              data-dismiss="modal"
              title="Selecionar" 
              @click="$emit('setSelected', row)">

              <i class='glyphicon glyphicon-list-alt' style="font-size: 14px"></i>
            </a>
          </td>
<!--
          <td v-for="column in columns"
            v-show="column.visible"
            :style="'padding: 0px 2px; vertical-align: middle; font-size: 12px; text-align:' + column.align + (column.minWidth === '' ? '' : '; min-width: ' + column.minWidth)"
            v-html="!column.yesNoImage ? row[column.id] : '<img src=\'./vermelho.png>'"
            >
          </td>
	--,'<span style=''color:red''>' + hasGMUD + '</span>' as hasGMUD
-->            
          <td v-for="(column, index) in columns" :key="index"
            v-show="column.visible"
            style="padding: 0px 2px; vertical-align: middle; font-size: 12px;"
            :style="('text-align:' + column.align) + 
              (column.minWidth === '' ? '' : ';min-width:' + column.minWidth) + 
              (row[column.id] === 'SIM' ? ';color:green' : (row[column.id] === 'NÃO' ? ';color:red' : ''))"
            v-html="row[column.id]">
          </td>

        </tr>
      </tbody>

    </table>

  </div>
</template>

<style scoped>
  a:hover, a:visited, a:link, a:active
  {
      text-decoration: none;
      cursor: pointer;
  }

  img {
    margin-top: 8px; 
    border: 0; 
    padding: 0;
    height: 18px;
    width: 18px;
  }  

  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;

    margin-top: 3px;
    margin-bottom: 0px;
  }

  .th {
    padding: 2px;
    margin: 0px;
    border-top: 1px;
    text-align: center
  }

  .loader {
      margin: auto;
      width: 50%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-bottom: 16px solid #3498db;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }  
</style>
