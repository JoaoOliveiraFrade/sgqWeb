<script>
  import { mapState } from 'vuex'
  import oiGrid from '@/comp/grid/main.vue'

  export default {
    name: 'ShowData',

    components: { oiGrid },

    computed: {
      ...mapState('testPlan', ['steps']),

      columns () {
        return [
          {
            id: 'order',
            name: 'ordem',
            alignHeader: 'center',
            align: 'center',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'name',
            name: 'Nome',
            alignHeader: 'center',
            align: 'left',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'description',
            name: 'Descrição',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'parameters',
            name: 'Parametros',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: false,
            yesNoImage: false,
            html: true,
            filterOptions: []
          }, {
            id: 'expectedResult',
            name: 'Resultado Esperado',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: false,
            yesNoImage: false,
            filterOptions: []
          }
        ]
      }
    }
  }
</script>

<template>

    <!--<div v-show="Object.keys(selected).length > 0">-->
    <span>
      <oiGrid slot="body"
        filterTermMessage="Informe o filtro!"
        :data="steps"
        :columns="columns"
      />
    </span>

</template>

<style scoped>
</style>
