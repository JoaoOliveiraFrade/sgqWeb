<script>
  import { mapGetters } from 'vuex'
  import oiSelectionGridMult from './SelectionGridMult/selection.vue'

  export default {
    name: 'SelectionProjectByTestManufsAndSystems',

    components: { oiSelectionGridMult },

    computed: {
      ...mapGetters(['projectsByTestManufsAndSystems', 'selectedProjects'])
    }

  }
</script>

<template>
    <oiSelectionGridMult
      :projects="projectsByTestManufsAndSystems"
      :selected="selectedProjects"
    />
</template>

<style scoped>
</style>
