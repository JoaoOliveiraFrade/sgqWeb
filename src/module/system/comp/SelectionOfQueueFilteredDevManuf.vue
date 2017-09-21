<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'SystemSelectionOfQueueFilteredDevManuf',

    components: { oiSelection },

    props: {
      devManufs: { type: Array, default: () => [] },
      selectedSystems: { type: Array, default: () => [] },
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('system', ['ofDevManufs', 'selectedOfQueue']),
      ...mapGetters('system', ['ofQueueFilteredDevManufs'])
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
      this.loadOfQueueGroupDevManufs(this.devManufs)
      this.setDevManufs(this.devManufs)
      this.setSelectedOfQueue(this.selectedSystems)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      :data="ofQueueFilteredDevManufs"
      :selected="selectedOfQueue"
      :isShowButtonSelected="isShowButtonSelected"
      gender="male"
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
