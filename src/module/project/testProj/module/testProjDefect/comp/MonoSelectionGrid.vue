<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import oiGrid from '@/genComp/grid/main.vue'
  import oiModal from '@/genComp/modal/Modal2.vue'

  export default {
    name: 'SelectionGrid',

    components: { oiModal, oiGrid },

    computed: {
      ...mapState('trgDefect', ['filterTerm', 'loading', 'data']),
      ...mapGetters('trgDefect', ['dataFilteredByTerm']),

      columns () {
        return [
          {
            id: 'id',
            name: 'Nº',
            alignHeader: 'center',
            align: 'center',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'status',
            name: 'Status',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'queue',
            name: 'Fila',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'defectSystem',
            name: 'Sistema Def.',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'agingFormat',
            name: 'Aging',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'pingPong',
            name: 'Ping Pong',
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
      ...mapActions('trgDefect', ['setFilterTerm', 'loadData', 'setMonoSelected']),

      confirm (selected) {
        this.setMonoSelected(selected)
        this.$emit('onConfirm', selected)
      }
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
        @setSelected="confirm"
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
  img {
    margin-top: 8px; 
    border: 0; 
    padding: 0;
    height: 18px;
    width: 18px;
  }  
  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }
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
