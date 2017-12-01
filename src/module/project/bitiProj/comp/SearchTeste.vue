<script>
  import Vue from 'vue'
  import { ClientTable } from 'vue-tables-2'
  import moment from 'moment'
  import 'daterangepicker/daterangepicker.css'
  import 'daterangepicker/daterangepicker.js'

  Vue.config.productionTip = false

  Vue.use(
    ClientTable, {
      compileTemplates: true,

      // highlightMatches: true,

      // pagination: {
      //   dropdown: true,
      //   chunk: 5
      // },

      filterByColumn: true,

      texts: {
        filter: 'Search:'
      },

      datepickerOptions: {
        showDropdowns: true
      }
    },
    false, // vuex
    require('../../../../../node_modules/vue-tables-2/compiled/template.js')('client')
  )

  export default {
    methods: {
      randomDate (start, end) {
        return moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
      },

      randomOption () {
        return Math.floor(Math.random() * 5)
      },

      calcAge: function (birthDate) {
        return birthDate.fromNow('years')
      },

      setAverageAge: function (data) {
        if (!data.length) {
          this.averageAge = 0
          return
        }

        var total = data.reduce(function (curValue, prevValue) {
          return parseInt(prevValue.birth_date.fromNow(' ')) + curValue
        }, 0)

        this.averageAge = (total / data.length).toFixed(2)
      },

      deleteMe: function (id) {
        alert('Delete ' + id)
      },

      alphabetFilter: function (letter) {
        this.selectedLetter = letter
        this.$broadcast('vue-tables.filter::alphabet', letter)
      }
    },

    data () {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        selectedLetter: '',
        averageAge: 0,

        columns: ['option', 'birth_date', 'type', 'pet', 'name', 'default'],

        options: {
          sortable: ['option', 'type', 'pet', 'name'],

          dateColumns: ['birth_date'],

          headings: {
            // pet: this.randomOption(),
            birth_date: 'Birth Date',
            age: 'Age',
            edit: 'Edit',
            delete: 'Delete'
          },

          templates: {
            age: function (row) {
              return this.calcAge(row.birth_date)
            },
            edit: function (row) {
              return `<a href='#!/${row.id}/edit'><i class='glyphicon glyphicon-edit'></i></a>`
            },
            delete: function (row) {
              return `<a href='javascript:void(0);' @click='$parent.deleteMe(${row.id})'><i class='glyphicon glyphicon-erase'></i></a>`
            }
          },

          customFilters: [{
            pet: this.randomOption(),
            name: 'alphabet',
            callback: function (row, query) {
              return row.name[0] === query
            }
          }]

          //  orderBy: {
          //        column:'age',
          //        ascending:false
          //    }
        },

        myData: [
          {
            option: 'headings',
            type: 'Object',
            pet: this.randomOption(),
            name: 'table headings',
            default: 'gleaned from the first row properties. underscores become spaces. First letter captialized',
            birth_date: this.randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
          }, {
            option: 'sortable',
            type: 'Array',
            pet: this.randomOption(),
            name: 'sortable columns',
            default: 'all columns except for custom ones',
            birth_date: this.randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
          }, {
            option: 'perPage',
            type: 'number',
            pet: this.randomOption(),
            name: 'initial records per page',
            default: '<code>10</code>',
            birth_date: this.randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
          }, {
            option: 'texts',
            type: 'Object',
            pet: this.randomOption(),
            name: 'Table texts',
            default: "<pre><code>texts:{<br>count:'{count} Records',<br>filter:'Filter Results:',<br>filterPlaceholder:'Search query',<br>limit:'Records:',<br>noResults:'No matching records',<br>page:'Page:' // for dropdown pagination, <br>filterBy: 'Filter by {column}' // Placeholder for search fields when filtering by column<br>loading:'Loading...', // First request to server<br>defaultOption:'Select {column}' // default option for list filters<br>}</code></pre>",
            birth_date: this.randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
          }, {
            option: 'pagination.dropdown',
            type: 'boolean',
            pet: this.randomOption(),
            name: 'use a dropdown select pagination next to the records-per-page list, instead of links at the bottom of the table.',
            default: '<pre><code>pagination:{<br>  dropdown:false<br>}</code></pre>',
            birth_date: this.randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
          }, {
            option: 'pagination.chunk',
            type: 'number',
            pet: this.randomOption(),
            name: 'maximum pages in a chunk of pagination',
            default: '<pre><code>pagination:{<br>  chunk:10<br>}</code></pre>',
            birth_date: this.randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
          }, {
            option: 'highlightMatches',
            type: 'boolean',
            pet: this.randomOption(),
            name: 'wraps matches with <code>b.VueTables__highlight</code>',
            default: '<code>false</code>',
            birth_date: this.randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
          }
        ]
      }
    },

    mounted: function () {
      this.$on('vue-tables.row-click', function (row) {
        console.log(row)
      })

      this.setAverageAge(this.tableData)

      this.$on('vue-tables.filtered', function (data) {
        this.setAverageAge(data)
      }.bind(this))
    }
  }
</script>

<template>
  <div id="vue-tables-options" class="container">

    <div class="alphabet-filter">
      <p>Custom Filter Example:</p>
      
      <button class="btn btn-default" :class="{active:letter==selectedLetter}" 
        v-for="letter in letters" 
        @click="alphabetFilter(letter)">{{letter}}
      </button>

      <button class="btn btn-default" 
        @click="alphabetFilter('')">Clear
      </button>
    </div>
    
    <p>Average Age: {{averageAge}}</p>
    
    <v-client-table :data="myData" :columns="columns" :options="options"></v-client-table>

    <h4>Want to use the pagination component independently? Use <a target="_blank" href="https://www.npmjs.com/package/v-pagination">v-pagination</a></h4>

  </div>
</template>

<style scoped>
  #people {
    text-align: center;
    width: 95%;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 30px;
  }

  th,
  td {
    text-align: left;
  }

  th:nth-child(n+2),
  td:nth-child(n+2) {
    text-align: center;
  }

  thead tr:nth-child(2) th {
    font-weight: normal;
  }

  .VueTables__sort-icon {
    margin-left: 10px;
  }

  .VueTables__dropdown-pagination {
    margin-left: 10px;
  }

  .VueTables__highlight {
    background: yellow;
    font-weight: normal;
  }

  .VueTables__sortable {
    cursor: pointer;
  }

  .VueTables__date-filter {
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
  }

  .VueTables__filter-placeholder {
    color: #aaa;
  }

  .VueTables__list-filter {
    width: 120px;
  }
</style>