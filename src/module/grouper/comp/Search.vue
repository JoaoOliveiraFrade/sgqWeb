<script>
  import { mapActions } from 'vuex'
  import oiMonoSelectionGrid from './MonoSelectionGrid.vue'

  export default {
    name: 'Search',

    components: { oiMonoSelectionGrid },

    data () {
      return {
        filterTerm: ''
      }
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('grouper', ['loadData', 'setFilterTerm'])
    },

    mounted () {
      this.setFeatureName('Agrupadores')
      this.loadData()
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

    <oiMonoSelectionGrid 
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
