<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from './multiselection/Main.vue'

  export default {
    name: 'ProjectSelectionFromTestManufsAndSystems',

    components: { oiSelection },

    props: {
      testManufs: { type: Array, default: () => [] },
      systems: { type: Array, default: () => [] },
      selectedProject: { type: Array, default: () => [] },
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('testProj', ['fromTestManufsAndSystems', 'selected'])
    },

    watch: {
      'systems': {
        handler () {
          this.loadFromTestManufsAndSystems({ testManufs: this.testManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
          this.setSelected(this.selectedProject)
        }
      }
    },

    methods: {
      ...mapActions('testProj', ['loadFromTestManufsAndSystems', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadFromTestManufsAndSystems({ testManufs: this.testManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
      this.setSelected(this.selectedProject)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      :projects="fromTestManufsAndSystems"
      :selected="selected"
      @onConfirm="confirm"        
    />
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
