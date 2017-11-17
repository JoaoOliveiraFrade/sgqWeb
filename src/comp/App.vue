<script>
  import oiHeader from '@/module/header/comp/Main.vue'
  // import oiGrid from '@/comp/grid/main.vue'
  // import { mapState, mapActions } from 'vuex'
  // import store from './vuex'
  // import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
    name: 'App',
    components: { oiHeader }
/*
    data () {
      return {
        columns: [{
          name: 'name',
          alignHeader: 'center',
          align: 'left',
          filterOptions: [
            { id: 'aaa', name: 'aaa' },
            { id: 'bbbb', name: 'bbbb' }
          ]
        }, {
          name: 'power',
          alignHeader: 'center',
          align: 'center',
          filterOptions: [
            { id: 80, name: 80 },
            { id: 7, name: 7 },
            { id: 100, name: 100 },
            { id: 10, name: 10 },
            { id: 51, name: 51 }
          ]
        }],

        gridData: [
          { name: 'aaa', power: 80 },
          { name: 'aaa', power: 51 },
          { name: 'aaa', power: 10 },
          { name: 'aaa', power: 2 },
          { name: 'aaa', power: 80 },
          { name: 'aaa', power: 9 },
          { name: 'bbbb', power: 51 },
          { name: 'bbbb', power: 51 },
          { name: 'bbbb', power: 80 },
          { name: 'bbbb', power: 100 },
          { name: 'bbbb', power: 39 }
        ]
      }
    },
    methods: {
      setSelected (parameter) {
        console.log(parameter)
      }
    }
*/
  }
</script>

<template>
  <div id="app">
    <oiHeader/>
<!--
    <div class="container" style="padding: 10px">
      <oiGrid
        :data="gridData"
        :columns="columns"
        selectionType="mono"
        filterTermMessage="Informe os filtros! Na pesq. de farol, digite a cor 'verd', 'amar' ou 'verm'. Ex: verd+multip+2017."
        @setSelected="setSelected"
      />
    </div>
-->
    <router-view/>
  </div>
</template>

<style src="@/asset/sass/app.scss" lang="sass">
</style>
