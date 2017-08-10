<script>
  import { mapGetters } from 'vuex'
  import oiSelectionGridMult from './SelectionGridMult/selection.vue'

  export default {
    name: 'SelectionByTestManufs',

    components: { oiSelectionGridMult },

    computed: {
      ...mapGetters(['projectsByTestManufsAndSystems'])
    }

  }
</script>

<template>
    <oiSelectionGridMult
      :projects="projectsByTestManufsAndSystems"
    />
</template>

<style scoped>
</style>
