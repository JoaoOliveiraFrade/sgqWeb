<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from './multiselection/Main.vue'

  export default {
    name: 'ProjectSelectionOfQueueFbyDevManufAndSystems',

    components: { oiSelection },

    props: {
      devManufs: { type: Array, default: () => [] },
      systems: { type: Array, default: () => [] },
      selectedProjects: { type: Array, default: () => [] },
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('project', ['ofDevManufsAndSystems', 'selected'])
    },

    watch: {
      'systems': {
        handler () {
          this.loadOfQueueFbyDevManufsAndSystems({ devManufs: this.devManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
          this.setSelected(this.selectedProjects)
        }
      }
    },

    methods: {
      ...mapActions('project', ['loadOfQueueFbyDevManufsAndSystems', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadOfQueueFbyDevManufsAndSystems({ devManufs: this.devManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
      this.setSelected(this.selectedProjects)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      :projects="ofDevManufsAndSystems"
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
