<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'SystemSelectionFromTestManufs',

    components: { oiSelection },

    props: {
      testManufs: { type: Array, default: () => [] },
      selectedSystems: { type: Array, default: () => [] },
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('system', ['fromTestManufs', 'selected'])
    },

    watch: {
      'testManufs': {
        handler () {
          this.loadFromTestManufs(this.testManufs)
          this.setSelected(this.selectedSystems)
        }
      }
    },

    methods: {
      ...mapActions('system', ['loadFromTestManufs']),
      ...mapActions('system', ['setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadFromTestManufs(this.testManufs)
      this.setSelected(this.selectedSystems)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      :data="fromTestManufs"
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
