<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import oiSelection from './SelectionGridMult/Main.vue'
  

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
      ...mapState('project', ['devManufs', 'systems', 'listSubprojectDelivery']),
      ...mapGetters('project', ['ofQueueFilteredDevManufs'])
    },

    watch: {
      'devManufs': {
        handler () {
          console.log('SelectionOfQueueFilteredDevManuf - watch - devManufs')
          this.setDevManufs(this.devManufs)
        }
      },
      'selectedSystems': {
        handler () {
          console.log('SelectionOfQueueFilteredDevManuf - watch - selectedSystems')
          this.setSelectedOfQueue(this.selectedSystems)
        }
      }
    },

    methods: {
      ...mapActions('system', ['loadOfQueueGroupDevManufs', 'setDevManufs', 'setSelectedOfQueue']),

      confirm (selected) {
        this.setSelectedOfQueue(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      console.log('SelectionOfQueueFilteredDevManuf - mounted')
      this.setDevManufs(this.devManufs)
      this.systems(this.systems)
      this.setSelected(this.selectedProjects)

      this.loadSubprojectDeliveryOfQueueFbyDevManufAndSystem({ testManufs: this.testManufs.map(i => i.id), systems: this.systems.map(i => i.id) })
      // this.loadFbySubprojectDelivery()
    }
  }
</script>

<template>
  <span>
    <oiSelection
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
