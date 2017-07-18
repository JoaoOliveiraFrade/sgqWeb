<script>
  import oiGridHeaderBrewery from './GridHeaderBrewery.vue'
  import oiGridDetailBrewery from './GridDetailBrewery.vue'

  export default {
    name: 'GridBrewery',

    components: { oiGridHeaderBrewery, oiGridDetailBrewery },

    props: {
      properties: { type: Array, required: true },
      breweriesAll: { type: Array, required: true }
    },

    data () {
      return {
        propertiesToShow: this.properties,
        propertiesToFilter: this.properties,
        breweriesIsShowDetails: [],
        filterTerm: '',
        toOrder: 'name',
        directionOrder: -1,
        propertiesToOrder: 'name'
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
              return _this.propertiesToFilter.some(prop => {
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

    methods: {
      setOrder (propertiesToOrder, directionOrder) {
        this.toOrder = propertiesToOrder
        this.directionOrder = directionOrder
      }

      // getCanShowDetailsItem (idItem) {
      //   return (this.breweries.isShowDetails.indexOf(idItem) > -1)
      // },

      // getPropertySelected (property) {
      //   return this.properties.toShow.some(function (item) {
      //     return item.name === property
      //   })
      // },

      // setShowOrHideDetailsItem (evento, idItem) {
      //   evento.preventDefault()

      //   let index = this.breweries.isShowDetails.indexOf(idItem)

      //   if (index > -1) {
      //     this.breweries.isShowDetails.splice(index, 1)
      //   } else {
      //     this.breweries.isShowDetails.push(idItem)
      //   }
      // },

      // setShowOrHideDetailsAllbreweries () {
      //   if (this.breweries.isShowDetails.length > 0) {
      //     this.breweries.isShowDetails = []
      //   } else {
      //     let _this = this
      //     this.breweries.filtered.map(function (item) {
      //       _this.breweries.isShowDetails.push(item.id)
      //     })
      //   }
      // }
    }
  }
</script>

<template>
    <div class="row well well-sm" style="margin-bottom:3px">
      <input type="text" 
        class="form-control" 
        autofocus
        style="margin: 0px; padding: 2px; padding-left: 5px; height: 28px"
        placeholder="Informe o filtro"
        v-model="filterTerm"
      />

      <oiGridHeaderBrewery
        :properties="propertiesToShow"
        @setOrder="setOrder"        
      />

      <oiGridDetailBrewery 
        class="row-striped"
        v-for="item in breweriesOrdered" :key="item.id"
        :properties="propertiesToShow"
        :item="item"
      />
    </div>
</template>

<style scoped>
</style>
