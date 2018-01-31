<script>
  import { mapState } from 'vuex'
  import oiGrid from '@/genComp/grid/main.vue'

  export default {
    name: 'trgExecutionShowGroupSystemGrid',

    components: { oiGrid },

    computed: {
      ...mapState('trgExecution', ['groupSystem']),

      columns () {
        return [
          {
            id: 'system',
            name: 'Sistema',
            alignHeader: 'center',
            align: 'left',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'active',
            name: 'Ativo',
            alignHeader: 'center',
            align: 'right',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'planned',
            name: 'Prev.<br>dia',
            alignHeader: 'center',
            align: 'right',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'realized',
            name: 'Real.<br>dia',
            alignHeader: 'center',
            align: 'right',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            html: true,
            filterOptions: []
          }, {
            id: 'GAP',
            name: 'GAP<br>dia',
            alignHeader: 'center',
            align: 'right',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'percGAP',
            name: '% GAP<br>dia',
            alignHeader: 'center',
            align: 'right',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'plannedAcum',
            name: 'Prev.<br>Acum.',
            alignHeader: 'center',
            align: 'right',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'realizedAcum',
            name: 'Real.<br>Acum.',
            alignHeader: 'center',
            align: 'right',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            html: true,
            filterOptions: []
          }, {
            id: 'GAPAcum',
            name: 'GAP<br>Acum.',
            alignHeader: 'center',
            align: 'right',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'percGAPAcum',
            name: '% GAP<br>Acum.',
            alignHeader: 'center',
            align: 'right',
            minWidth: '',
            visible: true,
            sort: true,
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
        :selectionField="false"
        :data="groupSystem"
        :columns="columns"
      />
    </span>

</template>

<style scoped>
</style>
