<script>
  import { mapActions } from 'vuex'

  // import oiMonoselection from './monoselection/Main.vue'
  import oiMonoselection from './Monoselection.vue'

  import oiShowSelected from './ShowSelected.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'projectBitiSearch',

    components: { oiMonoselection, oiShowSelected, oiShowData },

    methods: {
      ...mapActions(['setFeatureName'])
    },

    mounted () {
      this.setFeatureName('Projeto BITI - Pesquisa')
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <oiMonoselection/> 
<!--
    <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">
      <oiShowSelected/>
    </div>

    <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">
      <oiShowData/>
    </div>
-->
  </div> 
</template>

<style scoped>
  .oi-well {
    margin: 0;
    padding: 2px;
    height: 31px;
    padding-left: 0;
  }   
</style>
