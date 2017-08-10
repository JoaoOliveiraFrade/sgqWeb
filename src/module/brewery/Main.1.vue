<script>
  import oiHeader from './comp/HeaderBrewery.vue'
  import oiDetail from './comp/DetailBrewery.vue'

  export default {
    name: 'MainBrewery',

    components: { oiHeader, oiDetail },

    data () {
      return {
        title: 'Cervejarias',

        breweriesAll: [],
        breweriesIsShowDetails: [],

        properties: {
          all: [
            { name: 'name', description: 'Nome', format: 'name', columns: 3, align: 'left' },
            { name: 'city', description: 'Cidade', format: 'city', columns: 3, align: 'left' },
            { name: 'state', description: 'UF', format: 'state', columns: 2, align: 'left' },
            { name: 'country', description: 'País', format: 'country', columns: 2, align: 'left' },
            { name: 'last_mod', description: 'Alter.', format: 'last_mod', columns: 2, align: 'center' }],

          toShow: [],
          toFilter: []
        },

        filterTerm: '',

        toOrder: 'name',
        directionOrder: -1
      }
    },

    computed: {
      breweriesFiltered () {
        let filtered

        if (this.filterTerm !== '') {
          let words = this.filterTerm.split('+')
          let _this = this
          filtered = this.breweriesAll.filter(item => {
            return words.every(word => {
              return _this.properties.toFilter.some(prop => {
                return item[prop.name].toLowerCase().indexOf(word.toLowerCase()) > -1
              })
            })
          })
        } else {
          filtered = this.breweriesAll
        }
        return filtered
      },

      breweriesOrdered () {
        let sorted = [].concat(this.breweriesFiltered)
        let directionInverse = this.directionOrder * -1
        return sorted.sort((a, b) => {
          if (a[this.toOrder] < b[this.toOrder]) return this.directionOrder
          if (a[this.toOrder] > b[this.toOrder]) return directionInverse
          return 0
        })
      }
    },

    created () {
      this.properties.toShow = this.properties.all
      this.properties.toFilter = this.properties.all
    },

    mounted: function () {
      let _this = this

      _this.$http.get('http://localhost:3000/breweries')
        .then(r => {
          _this.breweriesAll = r.data
        }, e => { console.log(e) })
        .finally(function () {})
    },

    methods: {
      setOrder (propertiesToOrder, directionOrder) {
        this.toOrder = propertiesToOrder
        this.directionOrder = directionOrder
      },

      getCanShowDetailsItem (idItem) {
        return (this.breweries.isShowDetails.indexOf(idItem) > -1)
      },

      getPropertySelected (property) {
        return this.properties.toShow.some(function (item) {
          return item.name === property
        })
      },

      setShowOrHideDetailsItem (evento, idItem) {
        evento.preventDefault()

        let index = this.breweries.isShowDetails.indexOf(idItem)

        if (index > -1) {
          this.breweries.isShowDetails.splice(index, 1)
        } else {
          this.breweries.isShowDetails.push(idItem)
        }
      },

      setShowOrHideDetailsAllbreweries () {
        if (this.breweries.isShowDetails.length > 0) {
          this.breweries.isShowDetails = []
        } else {
          let _this = this
          this.breweries.filtered.map(function (item) {
            _this.breweries.isShowDetails.push(item.id)
          })
        }
      }
    }
  }
</script>

<template>
  <div class="container">
    <br>
    <div class="row well well-sm" style="margin-bottom: 2px; padding: 0px">
      <input type="text" 
        autofocus v-focus
        class="form-control" 
        style="margin: 0; padding: 0; border: 0; padding-left: 3px; height: 25px"
        placeholder="Informe o filtro"
        v-model="filterTerm"
      />
    </div>

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

    <div class="row well well-sm" style="margin-bottom:3px">

      <oi-header
        :properties="properties.toShow"
        @setOrder="setOrder"        
      />

      <oi-detail class="row-striped"
        v-for="item in breweriesOrdered" :key="item.id"
        :properties="properties.toShow"
        :item="item"
      />

<!--
      <ul>
        <li v-for="item in breweries.filtered" :key="item.id">{{item.name}}</li>
      </ul>


        v-for="item of breweries.filtered | orderBy toOrder directionOrder"

-->
    </div>

  </div>
</template>

<style lang="css" scoped>
  .row-striped:nth-of-type(odd){
    background-color: #fafafa;
  }

  .row-striped:nth-of-type(even){
    background-color: #ffffff;
  }
</style>
