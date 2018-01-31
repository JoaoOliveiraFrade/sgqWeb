<script>
  // import { mapGetters } from 'vuex'
  import oiSelectionButton from './SelectionButton.vue'
  import oiSelectedButton from './SelectedButton.vue'

  export default {
    name: 'Selection',

    components: { oiSelectionButton, oiSelectedButton }

    // computed: {
    //   ...mapGetters('auth', ['isLogged'])
    // }
  }
</script>

<template>
  <span style="margin:0; border:0; padding:0; padding-left: 5px">
    <!--<label class="fd-label">Projeto:</label>-->

    <oiSelectionButton/>

    <oiSelectedButton/>

    <!--v-show="this.state === 'show'" -->
    <button style="margin-top:2px" class="btn btn-xs"
        @click="editItem"
        data-toggle="tooltip" 
        title="Editar"          
        >
        <span class="glyphicon glyphicon-pencil"></span>
        Editar
    </button>
    
  </span>
</template>

<style scoped>
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    padding-left: 5px; 
    padding-top: 1px; 
    color: gray;
  }
</style>
