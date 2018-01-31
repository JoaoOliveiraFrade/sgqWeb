<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import oiSelection from '@/genComp/selection/Main.vue'

  export default {
    name: 'SystemSelectionFromAgentFbyDevManuf',

    components: { oiSelection },

    props: {
      devManufs: { type: Array, default: () => [] },
      selectedSystem: { type: Array, default: () => [] },
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('system', ['selected']),
      ...mapGetters('system', ['FromAgentFbyDevManufs'])
    },

    methods: {
      ...mapActions('system', ['loadFromAgentGroupDevManufs', 'setDevManufs', 'setSelected']),

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
      'selectedSystem': {
        handler () {
          this.setSelected(this.selectedSystem)
        }
      }
    },

    mounted () {
      this.loadFromAgentGroupDevManufs()
      this.setDevManufs(this.devManufs)
      this.setSelected(this.selectedSystem)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema (agente)"               
      :data="FromAgentFbyDevManufs"
      :selected="selected"
      :showButtonSelected="showButtonSelected"
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
