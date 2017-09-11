<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'defectTrafficLightSelection',

    components: { oiSelection },

    props: {
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('defectTrafficLight', ['data', 'selected'])
    },

    methods: {
      ...mapActions('defectTrafficLight', ['load', 'setSelected'])
    },

    mounted () {
      this.load()
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Farol Defeito"               
      :data="data"
      :selected="selected"
      :isShowButtonSelected="isShowButtonSelected"
      gender="male"
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
