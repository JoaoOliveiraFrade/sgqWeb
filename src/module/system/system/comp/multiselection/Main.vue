<script>
  import oiSelectionButton from './SelectionButton.vue'
  import oiSelectedButton from './SelectedButton.vue'

  export default {
    name: 'Selection',

    components: { oiSelectionButton, oiSelectedButton },

    props: {
      systems: { type: Array, default: () => [] },
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
      :systems="systems" 
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
    padding-left: 5px; 
    padding-top: 1px; 
    color: gray;
  }
</style>
