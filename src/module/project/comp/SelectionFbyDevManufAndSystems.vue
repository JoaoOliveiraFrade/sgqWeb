<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from './multiselection/Main.vue'

  export default {
    name: 'ProjectSelectionFbyDevManufAndSystems',

    components: { oiSelection },

    props: {
      devManufs: { type: Array, default: () => [] },
      systems: { type: Array, default: () => [] },
      preSelected: { type: Array, default: () => [] },
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('project', ['data', 'selected'])
    },

    watch: {
      'systems': {
        handler () {
          this.loadFbyDevManufsAndSystems({ devManufs: this.devManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
          this.setSelected(this.preSelected)
        }
      }
    },

    methods: {
      ...mapActions('project', ['loadFbyDevManufsAndSystems', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadFbyDevManufsAndSystems({ devManufs: this.devManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
      this.setSelected(this.preSelected)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      :projects="data"
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
