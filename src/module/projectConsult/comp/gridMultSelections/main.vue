<script>
  import oiGrid from './grid.vue'
  // import { paths } from '@/environment'
  import projetcServices from '@/service/projectService'

  export default {
    name: 'projectGridMultSelectionsMain',

    components: { oiGrid },

    props: {
      selectedTestManufs: {type: Array},

      selectedSystems: {type: Array},
      selectedSystemsUpdated: {type: Boolean},

      selected: {type: Array},

      selectedProjectsUpdated: {type: Boolean},
      isShowButtonSelected: {type: Boolean}
    },

    data () {
      return {
        selectedSystemsUpdated_: this.selectedSystemsUpdated,

        selected_: this.selected,
        selectedProjectsUpdated_: this.selectedProjectsUpdated,
        projects: [],
        filteredProjects: []
      }
    },

    updated () {
      if (this.selectedSystemsUpdated || this.selectedSystemsUpdated_) {
        this.selectedSystemsUpdated_ = false
        this.$emit('setSelectedSystemsUpdated', this.selectedSystemsUpdated_)
        this.loadProjects()
      }
    },

    methods: {
      loadProjects () {
        projetcServices.getByTestManufsAndSystems(this.selectedTestManufs, this.selectedSystems).then(resp => {
          this.projects = resp.data
          this.filteredProjects = resp.data
        })
      },

      selectAllProjects () {
        // this.filterTerm = ''
        // this.filteredByTerm = this.dataSource
        this.selected_ = this.projects.map(e => e.id)
        this.selectedProjectsUpdated_ = true
      },
      unSelectAllProjects () {
        // this.filteredByTerm = this.dataSource
        this.selected_ = []
        this.selectedProjectsUpdated_ = true
        this.$emit('setSelectedSystemsUpdated', this.selectedSystemsUpdated_)

        // this.filterTerm = ''
      },
      setSelectedProjectsUpdated (value) {
        this.selectedProjectsUpdated_ = value
      },
      confirmProjects () {
        this.$emit('onSelection', this.selected_)
      }
    }
  }
</script>

<template>
  <span>
    <pre v-show="false">{{selectedSystems}}</pre>

    <div class="col-xs-12" style="margin:0; border:0; padding:0">
      <label>Projetos:</label>
      <span style="white-space:nowrap; padding:0">
        <!--  v-show="dataSource.length > 0" -->
        <button 
          type="button" 
          id="selectAllProjects" 
          class="btn btn-xs" 
          @click="selectAllProjects()">Tudo
        </button>

        <!--  v-show="selected.length > 0" -->
        <button 
          type="button" 
          id="unSelectAllProjects" 
          class="btn btn-xs" 
          @click="unSelectAllProjects()">Nada
        </button>

        <button 
          type="button" 
          class="btn btn-xs" 
          @click="confirmProjects()">Confirmar
        </button>
        
      </span>    
    </div>    


    <oiGrid
      :projects="projects"
      :selected="selected_"
      :selectedProjectsUpdated="selectedProjectsUpdated_"
      @setSelectedProjectsUpdated="setSelectedProjectsUpdated"
    />
  </span>            
</template>

<style scoped>
</style>
