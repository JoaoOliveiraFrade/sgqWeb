<script>
  import { mapActions, mapState } from 'vuex'

  // import oiMonoselection from '@/module/project/testProj/comp/monoselection/Main.vue'
  import oiMonoselection from './Monoselection.vue'
  import oiShowSelected from './ShowSelected.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'Search',

    components: { oiMonoselection, oiShowSelected, oiShowData },

    computed: {
      ...mapState('testPlan', ['selectedMonoselection', 'searchStatus'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('testPlan', ['loadData', 'setSearchStatus'])
    },

    mounted () {
      this.setFeatureName('Entrega - Clarity')
      this.loadData()
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <!-- <div class="row well well-sm oi-well" v-show="searchStatus === 'search'"> -->

    <div class="row well-sm oi-well" v-show="searchStatus === 'search'">
      <oiMonoselection /> 
    </div>
    
    <span v-show="searchStatus === 'show'" style="display: block; text-align: left">

      <!--<div class="row well well-sm" style="margin:0; padding: 0; padding-left:5px; padding-top:5px">-->
        <a title="Pesquisa"
          @click="setSearchStatus('search')">
          <i class="glyphicon glyphicon-search" style="font-size: 20px;"/>
        </a>
      <!--</div>-->
      
      <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">
        <oiShowSelected />
      </div>

      <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">
        <oiShowData />
      </div>

    </span>

  </div> 
</template>

<style scoped>
  a:hover, a:visited, a:link, a:active
  {
      text-decoration: none;
      cursor: pointer;
  }

  /*
  .oi-well {
    margin: 0;
    padding: 2px;
    height: 31px;
    padding-left: 0;
  }
  */  
</style>
