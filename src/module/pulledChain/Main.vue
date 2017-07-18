<script>
  import { mapActions } from 'vuex'
  import oiGridShow from './comp/GridShow.vue'
  import services from './services'
  
  export default {
    name: 'pulledChainMain',

    components: { oiGridShow },

    data () {
      return {
        project: {},
        projectVal: {},
        state: 'show',
        ProjectsPulledChain: [],
        projectFilterTerm: '',
        projectsFilteredByText: [],
        filterProperties: [
            {name: 'subprojectDelivery'},
            {name: 'state'},
            {name: 'category'},
            {name: 'testLeader'},
            {name: 'Release'},
            {name: 'nextRelease'},
            {name: 'statusStrategyTestingAndContracting'},
            {name: 'statusTimeline'},
            {name: 'statusTestPlan'},
            {name: 'UN'},
            {name: 'Typification'}
        ]
      }
    },
    mounted () {
      this.setFeatureName('Cadeia Puxada')
      this.loadData()
    },
    methods: {
      ...mapActions(['setFeatureName']),

      loadData () {
        services.getAll().then(resp => {
          this.ProjectsPulledChain = resp.data
          this.projectsFilteredByText = resp.data
        })
      },

      selectItem (projectRef, projectVal, state) {
        this.project = projectRef
        this.projectVal = projectVal
        this.state = state
      },

      searchItem (state2) {
        this.state = state2
      },

      filterProjects (evento) {
        let _this = this
        if (this.projectFilterTerm !== '') {
          let words = this.projectFilterTerm.split('+')

          this.projectsFilteredByText = this.ProjectsPulledChain.filter(item => {
            return words.every(word => {
              return _this.filterProperties.some(filterProperty => {
                return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
              })
            })
          })
        } else {
          this.projectsFilteredByText = this.ProjectsPulledChain
        }
      }
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
      <div class="row well well-sm oi-well" v-show="this.state=='show'">
        <input type="text" id="Filter"
          autofocus
          class="form-control" 
          style="margin: 0; padding-left: 3px; height: 25px"
          v-model="projectFilterTerm"
          @keyup="filterProjects"
          placeholder="Informe o filtro! Valores Ready: S/N"
        />        
      </div>

      <oiGridShow style="padding-top: 2px;"
        v-show="this.state === 'show'"
        :dataSource="projectsFilteredByText"
        @onSelectItem="selectItem"
      />
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
