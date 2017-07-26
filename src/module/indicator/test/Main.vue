<script>
  import { mapActions, mapGetters } from 'vuex'

  import oiSelectionTestManuf from '@/module/testManuf/comp/Selection.vue'
  import oiSelectionSystem from '@/module/system/comp/Selection.vue'
  import oiSelectionProject from '@/module/project/comp/SelectionGridMult/Selection.vue'
  import oiShowData from './comp/ShowData.vue'

  export default {
    name: 'Main',

    components: { oiSelectionTestManuf, oiSelectionSystem, oiSelectionProject, oiShowData },

    computed: {
      ...mapGetters(['selectedTestManufs', 'selectedSystems', 'indicatorOfTestIsShow'])
    },

    methods: {
      ...mapActions(['setFeatureName'])
    },

    mounted () {
      this.setFeatureName('Indicadores de Teste')
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well" style="margin-bottom:3px">
      <oiSelectionTestManuf
        :isShowButtonSelected="true"
      />
    </div>

    <div class="row well well-sm oi-well" style="margin-bottom:3px" v-if="selectedTestManufs.length > 0">
      <oiSelectionSystem
        :isShowButtonSelected="true"
      />
    </div>

    <div class="row well well-sm oi-well" style="margin-bottom:3px" v-if="selectedSystems.length > 0">
      <oiSelectionProject/>
    </div>

    <div class="row well well-sm oi-well" style="margin-bottom:3px">
      <oiShowData v-show="indicatorOfTestIsShow"/>
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
