<script>
  import { mapActions } from 'vuex'
  import oiGrid from './grid.vue'
  import oiViewModel from './viewModel.vue'
  import services from '../services'

  export default {
    name: 'projectConsultMain',

    components: { oiGrid, oiViewModel },

    data () {
      return {
        project: {},

        filterProperties: [
          {name: 'project'},
          {name: 'name'},
          {name: 'classification'},
          {name: 'release'},
          {name: 'state'},
          {name: 'trafficLight'}
        ],
        projectFilterTerm: '',

        projects: [],
        projectsFilteredByTerm: [],
        loading: false
      }
    },

    mounted () {
      this.setFeatureName('Consulta de Entrega')
      this.loadInitialData()
    },

    methods: {
      ...mapActions(['setFeatureName']),

      loadInitialData () {
        // servicesProject.getAll({}).then(resp => {
        this.loading = true
        services.getProjects().then(resp => {
          this.projects = resp.data
          this.projectsFilteredByTerm = resp.data
          this.loading = false
        })
      },

      selectItem (item) {
        this.project = item
        this.$router.push('/projectConsult/show/' + this.project.subproject + '/' + this.project.delivery)
      },

      filterProjects (evento) {
        let _this = this
        if (this.projectFilterTerm !== '') {
          let words = this.projectFilterTerm.split('+')

          this.projectsFilteredByTerm = this.projects.filter(item => {
            return words.every(word => {
              return _this.filterProperties.some(filterProperty => {
                return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
              })
            })
          })
        } else {
          this.projectsFilteredByTerm = this.projects
        }
      }
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding: 10px">

    <div class="loader" v-show="loading" style="margin-top: 25px;margin-bottom: 25px"></div>
    
    <div v-show="!loading">
      <input type="text"
          autofocus v-focus
          class="form-control" 
          style="margin: 0; padding-left: 3px; height: 25px"
          placeholder="Informe os filtros! Na pesq. de farol, digite a cor 'verd', 'amar' ou 'verm'. Ex: verd+multip+2017."
          v-model="projectFilterTerm"
          @keyup="filterProjects"
      />

      <oiGrid style="padding-top: 2px;"
        :dataSource="projectsFilteredByTerm"
        @onSelectItem="selectItem"
      />
    </div>

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

  .loader {
      margin: auto;
      width: 50%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #e95420; /* Blue */
      border-bottom: 16px solid #e95420;
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
