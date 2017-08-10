<script>
  import { mapActions } from 'vuex'
  import oiSelectionGridGrouperConsult from './comp/SelectionGridGrouperConsult.vue'

  export default {
    name: 'groupersMain',

    components: { oiSelectionGridGrouperConsult },

    data () {
      return {
        filterTerm: ''
      }
    },

    methods: {
      ...mapActions(['setFeatureName', 'loadGroupers', 'setFilterTerm'])
    },

    mounted () {
      this.setFeatureName('Consulta de Agrupadores')
      this.loadGroupers()
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
    <input type="text"
      autofocus v-focus
      class="form-control" 
      style="margin: 0; padding-left: 3px; height: 25px"
      v-model="filterTerm"
      @keyup="setFilterTerm(filterTerm)"
      placeholder="Informe o filtro!"
    />
    
    <oiSelectionGridGrouperConsult 
      style="padding-top: 2px;"
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
