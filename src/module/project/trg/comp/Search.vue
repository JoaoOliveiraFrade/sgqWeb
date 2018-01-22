<script>
  import { mapActions, mapState } from 'vuex'

  import oiMonoselection from '@/module/release/comp/monoselection.vue'
  // import oiShowSelected from '@/module/project/trg/comp/ShowSelected.vue'
  // import oiShowData from '@/module/project/trg/comp/ShowData.vue'

  export default {
    name: 'Search',

    components: { oiMonoselection },

    computed: {
      ...mapState('release', ['selectedMonoselection'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('trg', ['loadData'])
    },

    mounted () {
      this.setFeatureName('TRG')
      this.loadData()
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div class="row well well-sm oi-well" >
      <oiMonoselection/> 
    </div>

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
