selected<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'ShowAnalytic',

    computed: {
      ...mapState('indicatorRateEvidRejected', ['typesRejects', 'selectedRejectionType'])
    },

    methods: {
      ...mapActions('indicatorRateEvidRejected', ['setSelectedRejectionType'])
    }
  }
</script>

<template>
  <span style="padding:0; margin:0">
      <label>Tipo:</label>
      <span v-for="i in typesRejects">
        <button class="btn btn-xs" :class="(selectedRejectionType === i) ? 'active btn-default' : ''" @click="setSelectedRejectionType(i)" v-text="i"/>
      </span>
  </span>
</template>

<style scoped>
  label {
      margin: 0px;
      border: 0px;
      padding: 0px;
      font-weight: normal;
      font-size: 12px;
  }
  button {
    margin-left: 1px;
    padding-left:4px; 
    padding-right:4px
  }  
</style>
