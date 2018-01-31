<script>
  import { mapState, mapActions } from 'vuex'
  import oiGrid from '@/genComp/grid/main.vue'

  export default {
    name: 'ShowData',

    components: { oiGrid },

    computed: {
      ...mapState('defectMonitor', ['data']),

      columns () {
        return [
          {
            id: 'provider', name: 'Fornecedor', alignHeader: 'center', align: 'left', visible: true, sort: true, minWidth: '', yesNoImage: false, filterOptions: []
          }, {
            id: 'subDel', name: 'Sub/Ent', alignHeader: 'center', align: 'center', visible: true, sort: true, minWidth: '', yesNoImage: false, filterOptions: []
          }, {
            id: 'id', name: 'Def.', alignHeader: 'center', align: 'center', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'system', name: 'Sistema', alignHeader: 'center', align: 'left', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'queue', name: 'fila', alignHeader: 'center', align: 'left', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'origin', name: 'Origem', alignHeader: 'center', align: 'left', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'status', name: 'Status', alignHeader: 'center', align: 'left', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'severity', name: 'Sev.', alignHeader: 'center', align: 'center', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'agingHours', name: 'Aging(h)<br>Total', alignHeader: 'center', align: 'center', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'timeLastQueueHours', name: 'Aging(h)<br>Últ. Fila', alignHeader: 'center', align: 'center', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'qtyImpactCT', name: 'CTs<br>Impact.', alignHeader: 'center', align: 'center', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }, {
            id: 'pingPong', name: 'Ping<br>Pong', alignHeader: 'center', align: 'center', minWidth: '', visible: true, sort: true, yesNoImage: false, filterOptions: []
          }
        ]
      }
    },

    methods: {
      ...mapActions('defectMonitor', ['setSelectedDefect'])
    }
  }
</script>

<template>

    <!--<div v-show="Object.keys(selected).length > 0">-->
    <span>
      <oiGrid slot="body"
        filterTermMessage="Informe o filtro!"
        selectionType="mono"
        @setSelected="setSelectedDefect"
        :trafficLight="true"
        :data="data"
        :columns="columns"
      />
    </span>

</template>

<style scoped>
</style>
