<script>
  import { mapActions, mapState } from 'vuex'

  import oiMonoselection from '@/module/project/testProj/comp/monoselection/Main.vue'
  import oiShowSelected from './ShowSelected.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'Search',

    components: { oiMonoselection, oiShowSelected, oiShowData },

    computed: {
      ...mapState('testProj', ['selectedMonoselection'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('testProj', ['loadData'])
    },

    mounted () {
      this.setFeatureName('Entrega - Teste')
      this.loadData()
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well" >
      <oiMonoselection/> 
    </div>

    <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">
      <oiShowSelected/>
    </div>
    
    <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">
      <oiShowData/>
    </div>
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
