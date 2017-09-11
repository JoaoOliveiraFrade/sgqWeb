<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'defectQueueSelection',

    components: { oiSelection },

    props: {
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('defectQueue', ['data', 'selected'])
    },

    methods: {
      ...mapActions('defectQueue', ['load', 'setSelected'])
    },

    mounted () {
      this.load()
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Fila Defeito"               
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
