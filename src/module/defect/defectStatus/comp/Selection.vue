<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/genComp/selection/Main.vue'

  export default {
    name: 'defectStatusSelection',

    components: { oiSelection },

    props: {
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('defectStatus', ['data', 'selected'])
    },

    methods: {
      ...mapActions('defectStatus', ['load', 'setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.load()
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Status Defeito"               
      :data="data"
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
