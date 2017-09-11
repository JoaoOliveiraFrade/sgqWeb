<script>
  import oiSelectionButton from './SelectionButton.vue'
  import oiSelectedButton from './SelectedButton.vue'

  export default {
    name: 'Selection',

    components: { oiSelectionButton, oiSelectedButton },

    props: {
      projects: { type: Array, default: () => [] },
      selected: { type: Array, default: () => [] }
    },

    methods: {
      confirm (parameter) {
        this.$emit('onConfirm', parameter)
      }
    }
  }
</script>

<template>
  <span style="margin:0; border:0; padding:0">
    <label class="fd-label">Projeto:</label>
    <oiSelectionButton 
      :projects="projects" 
      :selected="selected"
      @onConfirm="confirm"
    />

    <oiSelectedButton 
      :selected="selected" 
      v-show="selected.length"
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
