<script>
  import { mapActions, mapGetters } from 'vuex'
  // import oiGridShow from './comp/GridShow.vue'
  
  export default {
    name: 'pulledChainMain',

    // components: { oiGridShow },

    data () {
      return {
        filterTerm: ''
    //     project: {},
    //     projectVal: {},
    //     state: 'show',
    //     ProjectsPulledChain: [],
    //     projectFilterTerm: '',
    //     projectsFilteredByText: [],
    //     filterProperties: [
    //         // {name: 'priorityGlobal'},
    //         {name: 'subprojectDelivery'},
    //         {name: 'state'},
    //         {name: 'RT'},
    //         {name: 'UN'},
    //         {name: 'Typification'},
    //         {name: 'statusCategoryORL'},
    //         {name: 'releaseClarity'},
    //         {name: 'nextRelease'},
    //         {name: 'statusStrategyTestingAndContracting'},
    //         {name: 'statusTimeline'},
    //         {name: 'statusTestPlan'}
    //     ]
      }
    },

    computed: {
      ...mapGetters(['pulledChainProjects', 'pulledChainFilterTerm'])
    },

    mounted () {
      this.setFeatureName('Cadeia Puxada')
      this.loadPulledChainProjects()
    },

    methods: {
      ...mapActions(['setFeatureName', 'loadPulledChainProjects', 'setPulledChainFilterTerm']),

      // loadData () {
      //   services.getAll().then(resp => {
      //     this.ProjectsPulledChain = resp.data
      //     this.projectsFilteredByText = resp.data
      //   })
      // },

      selectItem (projectRef, projectVal, state) {
        this.project = projectRef
        this.projectVal = projectVal
        this.state = state
      },

      searchItem (state2) {
        this.state = state2
      }

      // filterProjects (evento) {
      //   let _this = this
      //   if (this.projectFilterTerm !== '') {
      //     let words = this.projectFilterTerm.split('+')

      //     this.projectsFilteredByText = this.ProjectsPulledChain.filter(item => {
      //       return words.every(word => {
      //         return _this.filterProperties.some(filterProperty => {
      //           return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
      //         })
      //       })
      //     })
      //   } else {
      //     this.projectsFilteredByText = this.ProjectsPulledChain
      //   }
      // }
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
    <!-- v-show="this.state=='show'" -->
      <div class="row well well-sm oi-well" >
        <input type="text" id="Filter"
          autofocus
          class="form-control" 
          style="margin: 0; padding-left: 3px; height: 25px"
          placeholder="Informe o filtro! Valores Ready: S/N"
          v-model="filterTerm"
          @keyup="setPulledChainFilterTerm(filterTerm)"
        />        
      </div>
    {{pulledChainFilterTerm}}

    <!--
      <oiGridShow style="padding-top: 2px;"
        v-show="this.state === 'show'"
        :dataSource="projectsFilteredByText"
        @onSelectItem="selectItem"
      />
      -->
  </div>
</template>

<style scoped>
  input {
     min-width: 100%
  }
  .container {
    margin-top: 15px;
  }
  .oi-well {
    margin: 0;
    border: 0;
    padding: 0;
  }
  .oi-icon {
    font-size: medium;
  }
</style>
