<script>
  import { mapActions } from 'vuex'

  // import oiMonoselectionReleaseGrid from '@/module/release/comp/monoSelectionGrid/main.vue'
  // import oiMultiSelectionSystemList from './MultiSelectionSystemList.vue'
  
  // import oiMonoselectionReleaseGrid from '@/module/release/comp/Monoselection.vue'
  // import oiReleaseSelection from '@/module/release/comp/Selection.vue'

  // import oiShowSelected from '@/module/trg/comp/ShowSelected.vue'
  // import oiShowData from './ShowData.vue'

  export default {
    name: 'Search',

    components: { },

    computed: {
      // ...mapState('trg', ['selectedRelease', 'systems'])
      // ...mapState('trg', ['selectedRelease', 'viewState'])
    },

    methods: {
      ...mapActions(['setFeatureName'])
      // ...mapActions('trg', ['loadData', 'setSelectedRelease', 'loadsystems'])
      // ...mapActions('trg', ['setSelectedRelease'])
    },

    mounted () {
      this.setFeatureName('Visão Gerencial de Release')
      // this.loadData()
    }

    // watch: {
    //   'selectedRelease': {
    //     handler () {
    //       this.loadsystems()
    //     }
    //   }
    // }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">
    <div class="row well well-sm oi-well text-align: center" >
      <label>
        Esta "Visão Gerencial de Release" está em Construção! <br> <br>

        Previsão para conclusão dia  02/02/17.
      </label> 
    </div>

<!--
    <div class="row well well-sm oi-well" >
      <oiMonoselection
        @onConfirm="setSelectedRelease"
      /> 
    </div>
    <div class="row well well-sm oi-well col-12 col-sm-6">
      <oiMonoselectionReleaseGrid
        @onConfirm="setSelectedRelease"
      />
    </div>

    <div class="row well well-sm oi-well col-12 col-sm-6">
      <oiMultiSelectionSystemList/>
    </div>
    
    <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">
      <oiShowSelected/>
    </div>

    <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">
      <oiShowData v-show="viewState"/>
    </div>
-->
  </div>
</template>

<style scoped>
  .oi-well {
    margin: 0;
    padding: 20px;
  }   
</style>
