<script>
  import { mapActions } from 'vuex'
  import oiGridShow from './comp/GridShow.vue'
  
  export default {
    name: 'pulledChainMain',

    components: { oiGridShow },

    data () {
      return {
        filterTerm: ''
      }
    },

    methods: {
      ...mapActions(['setFeatureName', 'loadPulledChainProjects', 'setPulledChainFilterTerm'])

      // selectItem (projectRef, projectVal, state) {
      //   this.project = projectRef
      //   this.projectVal = projectVal
      //   this.state = state
      // }
    },

    mounted () {
      this.setFeatureName('Cadeia Puxada')
      this.loadPulledChainProjects()
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

      <!--
        :dataSource="projectsFilteredByText"
        @onSelectItem="selectItem"
        v-show="this.state === 'show'"
      -->
      <oiGridShow style="padding-top: 2px;"/>
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
