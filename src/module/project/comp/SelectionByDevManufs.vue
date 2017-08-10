<script>
  import { mapGetters } from 'vuex'
  import oiSelectionGridMult from './SelectionGridMult/selection.vue'

  export default {
    name: 'SelectionByDevManufs',

    components: { oiSelectionGridMult },

    computed: {
      ...mapGetters(['projectsByDevManufsAndSystems'])
    }

  }
</script>

<template>
    <oiSelectionGridMult
      :projects="projectsByDevManufsAndSystems"
    />
</template>

<style scoped>
</style>
