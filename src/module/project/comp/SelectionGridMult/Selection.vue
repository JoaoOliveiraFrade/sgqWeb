<script>
  import { mapGetters } from 'vuex'
  import oiSelectionButton from './SelectionButton.vue'
  import oiSelectedButton from './SelectedButton.vue'

  export default {
    name: 'Selection',

    components: { oiSelectionButton, oiSelectedButton },

    props: {
      projects: { type: Array }
    },

    computed: {
      ...mapGetters(['selectedProjects'])
    }
  }
</script>

<template>
  <span style="margin:0; border:0; padding:0">
    <label class="fd-label">Projeto:</label>
    
    <oiSelectionButton :projects="projects"/>

    <oiSelectedButton v-show="selectedProjects.length"/>
  </span>
</template>

<style scoped>
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }
</style>
