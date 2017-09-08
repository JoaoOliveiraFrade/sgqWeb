<script>
  import { mapGetters } from 'vuex'
  import oiSelectionGridMult from './SelectionGridMult/selection.vue'

  export default {
    name: 'SelectionByDevManufs',

    components: { oiSelectionGridMult },

    computed: {
      ...mapGetters(['projectsByDevManufsAndSystems', 'selectedProjects'])
    }

  }
</script>

<template>
    <oiSelectionGridMult
      :projects="projectsByDevManufsAndSystems"
      :selected="selectedProjects"
    />
</template>

<style scoped>
</style>
