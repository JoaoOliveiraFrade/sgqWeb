<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'SystemSelectionOfDevManufs',

    components: { oiSelection },

    props: {
      devManufs: { type: Array, default: () => [] },
      preSelected: { type: Array, default: () => [] },
      isShowButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('system', ['data', 'selected'])
    },

    watch: {
      'devManufs': {
        handler () {
          this.loadOfDevManufs(this.devManufs)
          this.setSelected(this.preSelected)
        }
      }
    },

    methods: {
      ...mapActions('system', ['loadOfDevManufs']),
      ...mapActions('system', ['setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadOfDevManufs(this.devManufs)
      this.setSelected(this.preSelected)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      :data="data"
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
