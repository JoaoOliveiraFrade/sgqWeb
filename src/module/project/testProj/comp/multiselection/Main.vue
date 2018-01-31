<script>
  import { mapActions } from 'vuex'
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
      ...mapActions('testProj', ['setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    }
  }
</script>

<template>
  <span style="margin:0; border:0; padding:0">
    <label class="fd-label">Sub/Ent:</label>
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
    padding-left: 5px; 
    padding-top: 1px; 
    color: gray;
  }
</style>
