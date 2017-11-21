<script>
  import { mapActions, mapState } from 'vuex'

  // import oiMonoselection from '@/module/project/project/comp/monoselection/Main.vue'
  import oiMonoselection from './Monoselection.vue'
  import oiShowSelected from './ShowSelected.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'Search',

    components: { oiMonoselection, oiShowSelected, oiShowData },

    computed: {
      ...mapState('biti', ['selectedMonoselection'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('project', ['load'])
    },

    mounted () {
      this.setFeatureName('BITI')
      this.load()
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <div>
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
