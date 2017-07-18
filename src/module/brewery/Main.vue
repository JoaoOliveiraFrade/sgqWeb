<script>
  import { mapActions } from 'vuex'

  import oiGridBrewery from './comp/GridBrewery.vue'

  export default {
    name: 'MainBrewery',

    components: { oiGridBrewery },

    data () {
      return {
        title: 'Cervejarias',

        breweriesAll: [],

        properties: [
          { name: 'name', description: 'Nome', format: 'name', columns: 3, align: 'left' },
          { name: 'city', description: 'Cidade', format: 'city', columns: 3, align: 'left' },
          { name: 'state', description: 'UF', format: 'state', columns: 2, align: 'left' },
          { name: 'country', description: 'País', format: 'country', columns: 2, align: 'left' },
          { name: 'last_mod', description: 'Alt.', format: 'last_mod', columns: 2, align: 'center' }
        ]
      }
    },

    mounted () {
      this.setFeatureName('Cervejaria')

      let _this = this
      _this.$http.get('http://localhost:3000/breweries')
        .then(r => {
          _this.breweriesAll = r.data
        }, e => { console.log(e) })
        .finally(function () {})
    },

    methods: {
      ...mapActions(['setFeatureName'])
    }
  }
</script>

<template>
  <div class="container">
    <oiGridBrewery style="margin-top: 10px"
      :properties="properties"
      :breweriesAll="breweriesAll"
    />
    <!--
    <div class="row well well-sm" style="margin-bottom:3px">
      <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <properties-to-select
          title="Colunas a pesquisar"
          :properties="properties"
          :properties-to-select="properties.toFilter">
        </properties-to-select>
      </div>
      -->

      <!--
      <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <properties-to-select
          title="Colunas a Exibir"
          :properties="properties"
          :properties-to-select="properties.toShow">
        </properties-to-select>
      </div>
    </div>
    -->

<!--
    <div class="row well well-sm" style="margin-bottom:3px">

      <oi-header
        :properties="properties.toShow"
        @setOrder="setOrder"        
      />

      <oi-detail 
        class="row-striped"
        v-for="item in breweriesOrdered" :key="item.id"
        :properties="properties.toShow"
        :item="item"
      />

      <ul>
        <li v-for="item in breweries.filtered" :key="item.id">{{item.name}}</li>
      </ul>


        v-for="item of breweries.filtered | orderBy toOrder directionOrder"

    </div>
-->

  </div>
</template>

<style scoped>
</style>
