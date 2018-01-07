<script>
  import { mapActions, mapState } from 'vuex'
  import oiMultiselection from './multiselection/Main.vue'

  export default {
    name: 'SystemMultiselectionFbyDevManuf',

    components: { oiMultiselection },

    props: {
      devManufs: { type: Array, default: () => [] },
      selectedSystem: { type: Array, default: () => [] },
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('system', ['selected'])
    },

    watch: {
      'devManufs': {
        handler () {
          this.loadFromAgentFbyDevManufs({ devManufs: this.devManufs.map(i => i.id) })
          this.setSelected(this.selectedSystem)
        }
      }
    },

    methods: {
      ...mapActions('system', ['loadFromAgentFbyDevManufs', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadFromAgentFbyDevManufs({ devManufs: this.devManufs.map(i => i.id) })
      this.setSelected(this.selectedSystem)
    }
  }
</script>

<template>
  <span>
    <oiMultiselection
      :systems="devManufs"
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
