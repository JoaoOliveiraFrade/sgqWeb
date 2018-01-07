<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'defectTrafficLightSelection',

    components: { oiSelection },

    props: {
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('defectTrafficLight', ['data', 'selected'])
    },

    methods: {
      ...mapActions('defectTrafficLight', ['load', 'setSelected']),

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
      title="Farol Defeito"               
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
