<script>
  import { mapActions, mapState } from 'vuex'

  // import oiMonoselection from '@/module/project/test/comp/monoselection/Main.vue'
  import oiMonoselection from './Monoselection.vue'
  import oiShowSelected from './ShowSelected.vue'
  import oiShowData from './ShowData.vue'

  export default {
    name: 'Search',

    components: { oiMonoselection, oiShowSelected, oiShowData },

    computed: {
      ...mapState('biti', ['selectedMonoselection', 'searchStatus'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('biti', ['load', 'setSearchStatus'])
    },

    mounted () {
      this.setFeatureName('Projeto - BITI')
      this.load()
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <!-- <div class="row well well-sm oi-well" v-show="searchStatus === 'quest'"> -->

    <div class="row well-sm oi-well" v-show="searchStatus === 'quest'">
      <oiMonoselection /> 
    </div>
    
    <span v-show="searchStatus === 'show'">

      <!--<div class="row well well-sm" style="margin:0; padding: 0; padding-left:5px; padding-top:5px">-->
        <a title="Pesquisa" 
          @click="setSearchStatus('quest')">
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
