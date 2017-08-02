<script>
  import { mapActions, mapGetters } from 'vuex'

  import oiSelectionDevManuf from '@/module/devManuf/comp/SelectionDevManuf.vue'
  import oiSelectionSystem from '@/module/system/comp/SelectionByDevManufs.vue'

  export default {
    name: 'indicatorOfDevMain',

    components: { oiSelectionDevManuf, oiSelectionSystem },

    computed: {
      ...mapGetters(['selectedDevManufs', 'selectedSystems'])
    },

    methods: {
      ...mapActions(['setFeatureName'])
    },

    mounted () {
      this.setFeatureName('Indicadores de Desenvolvimento')
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well" style="margin-bottom:3px">
      <oiSelectionDevManuf
        :isShowButtonSelected="true"
      />
    </div>
    <div class="row well well-sm oi-well" style="margin-bottom:3px" v-if="selectedDevManufs.length > 0">
      <oiSelectionSystem
        :isShowButtonSelected="true"
      />
    </div>
  </div> 
</template>

<style scoped>
  .container {
    margin-top: 15px;
  }
  .oi-well {
    margin: 0;
    border: 0;
    padding: 3px;
  } 
  .oi-col {
    padding: 3px;
    margin: 0;
    border: 0;
  }    
</style>
