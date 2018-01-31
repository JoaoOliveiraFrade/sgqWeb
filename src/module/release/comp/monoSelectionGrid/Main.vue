<script>
  import oiSelectionButton from './SelectionButton.vue'
  import oiSelectedButton from './SelectedButton.vue'

  export default {
    name: 'ReleaseMonoSelectionMain',

    components: { oiSelectionButton, oiSelectedButton },

    methods: {
      confirm (selected) {
        this.$emit('onConfirm', selected)
      }
    }
  }
</script>

<template>
  <span style="margin:0; border:0; padding:0; padding-left: 5px">
    <label class="fd-label">Release:</label>
    <oiSelectionButton @onConfirm="confirm"/>

    <oiSelectedButton/>
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
