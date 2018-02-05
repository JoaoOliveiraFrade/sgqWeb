<script>
  // import { mapState } from 'vuex'
  import oiSelectionButton from './SelectionButton.vue'
  import oiSelectedButton from './SelectedButton.vue'
  import oiEditionButton from './EditionButton.vue'

  export default {
    name: 'Selection',

    components: { oiSelectionButton, oiSelectedButton, oiEditionButton }

    // computed: {
    //   ...mapState('testProj', ['state'])
    // }
  }
</script>

<template>
  <span style="margin:0; border:0; padding:0; padding-left: 5px">
    <!--<label class="fd-label">Projeto:</label>-->
    <oiSelectionButton/>

    <oiSelectedButton/>

    <oiEditionButton/>
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
