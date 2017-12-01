<script>
  import oiHeader from '@/module/header/comp/Main.vue'
  // import jQuery from 'jquery/dist/jquery.js'
  // import { Base64 } from '@/lib/base64'
  // import oiGrid from '@/comp/grid/main.vue'
  // import { mapState, mapActions } from 'vuex'
  // import store from './vuex'
  // import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
    name: 'App',
    components: { oiHeader }
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
