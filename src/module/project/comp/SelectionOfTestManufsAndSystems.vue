<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from './SelectionGridMult/Main.vue'

  export default {
    name: 'ProjectSelectionOfTestManufsAndSystems',

    components: { oiSelection },

    props: {
      testManufs: { type: Array, default: () => [] },
      systems: { type: Array, default: () => [] },
      selectedProjects: { type: Array, default: () => [] },
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('project', ['ofTestManufsAndSystems', 'selected'])
    },

    watch: {
      'systems': {
        handler () {
          this.loadOfTestManufsAndSystems({ testManufs: this.testManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
          this.setSelected(this.selectedProjects)
        }
      }
    },

    methods: {
      ...mapActions('project', ['loadOfTestManufsAndSystems', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadOfTestManufsAndSystems({ testManufs: this.testManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
      this.setSelected(this.selectedProjects)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      :projects="ofTestManufsAndSystems"
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
