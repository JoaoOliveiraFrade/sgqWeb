<script>
  import oiGrid from './grid.vue'
  // import { paths } from '@/environment'
  import projetcServices from '@/service/projectService'

  export default {
    name: 'projectGridMultSelectionsMain',

    components: { oiGrid },

    props: {
      selectedTestManufs: {type: Array},

      selectedSystem: {type: Array},
      selectedSystemUpdated: {type: Boolean},

      selected: {type: Array},

      selectedProjectUpdated: {type: Boolean},
      isShowButtonSelected: {type: Boolean}
    },

    data () {
      return {
        selectedSystemUpdated_: this.selectedSystemUpdated,

        selected_: this.selected,
        selectedProjectUpdated_: this.selectedProjectUpdated,
        projects: [],
        filteredProjects: []
      }
    },

    updated () {
      if (this.selectedSystemUpdated || this.selectedSystemUpdated_) {
        this.selectedSystemUpdated_ = false
        this.$emit('setSelectedSystemUpdated', this.selectedSystemUpdated_)
        this.loadProjects()
      }
    },

    methods: {
      loadProjects () {
        projetcServices.getByTestManufsAndSystems(this.selectedTestManufs, this.selectedSystem).then(resp => {
          this.projects = resp.data
          this.filteredProjects = resp.data
        })
      },

      selectAllProjects () {
        // this.filterTerm = ''
        // this.filteredByTerm = this.dataSource
        this.selected_ = this.projects.map(e => e.id)
        this.selectedProjectUpdated_ = true
      },
      unSelectAllProjects () {
        // this.filteredByTerm = this.dataSource
        this.selected_ = []
        this.selectedProjectUpdated_ = true
        this.$emit('setSelectedSystemUpdated', this.selectedSystemUpdated_)

        // this.filterTerm = ''
      },
      setSelectedProjectUpdated (value) {
        this.selectedProjectUpdated_ = value
      },
      confirmProjects () {
        this.$emit('onSelection', this.selected_)
      }
    }
  }
</script>

<template>
  <span>
    <pre v-show="false">{{selectedSystem}}</pre>

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
      :selectedProjectUpdated="selectedProjectUpdated_"
      @setSelectedProjectUpdated="setSelectedProjectUpdated"
    />
  </span>            
</template>

<style scoped>
</style>
