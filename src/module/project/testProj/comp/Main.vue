<script>
  import { mapActions } from 'vuex'
  import oiGrid from './comp/grid.vue'
  import oiViewModel from './comp/viewModel.vue'
  import services from '../services'

  export default {
    name: 'projectConsultationMain',

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
        projectsFilteredByTerm: []
      }
    },

    mounted () {
      this.setFeatureName('Projeto')
      this.loadInitialData()
    },

    methods: {
      ...mapActions(['setFeatureName']),

      loadInitialData () {
        // servicesProject.getAll({}).then(resp => {
        services.getProjects().then(resp => {
          this.projects = resp.data
          this.projectsFilteredByTerm = resp.data
        })
      },

      selectItem (item) {
        this.project = item
        this.$router.push('/projectConsultation/show/' + this.project.subproject + '/' + this.project.delivery)
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
/*

  // import servicesProject from '@/service/project'
  export default {
    name: 'ProjectsMain',

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
        projectsFilteredByTerm: []
      }
    },

    mounted () {
      this.loadInitialData()
    },

    methods: {
      loadInitialData () {
        // servicesProject.getAll({}).then(resp => {
        services.getProjects().then(resp => {
          this.projects = resp.data
          this.projectsFilteredByTerm = resp.data
        })
      },

      selectItem (item) {
        this.project = item
        this.$router.push('/project/show/' + this.project.subproject + '/' + this.project.delivery)
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
*/
</script>

<template>
    <div class="container-fluid well well-sm">
      <div class="row well well-sm oi-well">
        <input type="text"
            placeholder="Informe os filtros! Na pesq. de farol, digite a cor 'verd', 'amar' ou 'verm'. Ex: verd+multip+2017."
            v-model="projectFilterTerm"
            @keyup="filterProjects"/>
      </div>

      <oiGrid
        :dataSource="projectsFilteredByTerm"
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
