<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'SystemSelectionOfQueueFbyDevManuf',

    components: { oiSelection },

    props: {
      devManufs: { type: Array, default: () => [] },
      selectedSystems: { type: Array, default: () => [] },
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('system', ['selected']),
      ...mapGetters('system', ['ofQueueFbyDevManufs'])
    },

    methods: {
      ...mapActions('system', ['loadOfQueueGroupDevManufs', 'setDevManufs', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    watch: {
      'devManufs': {
        handler () {
          this.setDevManufs(this.devManufs)
        }
      },
      'selectedSystems': {
        handler () {
          this.setSelected(this.selectedSystems)
        }
      }
    },

    mounted () {
      this.loadOfQueueGroupDevManufs()
      this.setDevManufs(this.devManufs)
      this.setSelected(this.selectedSystems)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema (agente)"               
      :data="ofQueueFbyDevManufs"
      :selected="selected"
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
