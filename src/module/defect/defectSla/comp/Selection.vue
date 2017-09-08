<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/selections.vue'

  export default {
    name: 'defectSlaSelection',

    components: { oiSelection },

    props: {
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('defectSla', ['data', 'selected'])
    },

    methods: {
      ...mapActions('defectSla', ['load', 'setSelected'])
    },

    mounted () {
      this.load()
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="SLA Defeito"               
      :data="data"
      :selected="selected"
      :isShowButtonSelected="isShowButtonSelected"
      @onSelect="setSelected"        
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
