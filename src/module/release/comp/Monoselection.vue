<script>
  import { mapState, mapActions } from 'vuex'
  import oiGrid from '@/comp/grid/main.vue'
  import oiModal from '@/comp/modal/Modal2.vue'

  export default {
    name: 'Monoselection',
    visible: true,

    components: { oiModal, oiGrid },

    computed: {
      ...mapState('release', ['loading', 'data']),

      columns () {
        return [
          {
            id: 'id',
            name: 'Id',
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
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'month',
            name: 'Mês',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'year',
            name: 'Ano',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }
        ]
      }
    },

    methods: {
      ...mapActions('release', ['loadData', 'setSelected'])
    },

    mounted () {
      this.loadData()
    }
  }
</script>

<template>
  <span>
      <div class="loader" v-show="loading" slot="body"/>
      <oiGrid v-show="!loading" slot="body"
        filterTermMessage="Informe o filtro"
        :selectionField="false"
        :data="data"
        :columns="columns"
        selectionType="mono"
        @setSelected="setSelected"
      />

      <!--  
      <button style="margin-top:2px"
          type="button"     
          ref="buttonModal"
          class="btn btn-xs"
          data-toggle="modal" 
          data-target="#modalTestPlan">Gerar Plano
      </button>

      <oiModal id="modalTestPlan" title="Plano Teste" size="l">
        <div class="loader" v-show="loading" slot="body"/>
        <oiGrid v-show="!loading" slot="body"
          filterTermMessage="Informe os filtros!"
          :data="data"
          :columns="columns"
        />
      </oiModal> 
      --> 
  </span>
</template>

<style scoped>
  .loader {
      margin: auto;
      width: 50%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #e95420; /* Blue */
      border-bottom: 16px solid #e95420;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
  }
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
</style>