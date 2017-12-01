<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import oiGrid from '@/comp/grid/main.vue'
  import oiModal from '@/comp/modal/Modal2.vue'

  export default {
    name: 'testPlan',
    visible: true,

    components: { oiModal, oiGrid },

    computed: {
      ...mapState('testProj', ['selectedMonoselection']),
      ...mapState('testPlan', ['loading', 'data']),
      ...mapGetters('testPlan', [
        'distinctCycle',
        'distinctScenario',
        'distinctTestCase',
        'distinctIteration',
        'distinctMacrocenary',
        'distinctSystem',
        'distinctUAT',
        'distinctPrerequisite',
        'distinctSuccessorTestCase',
        'distinctName'
      ]),

      columns () {
        return [
          {
            id: 'cycle',
            name: 'Ciclo',
            alignHeader: 'center',
            align: 'center',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: this.distinctCycle
          }, {
            id: 'scenario',
            name: 'Cenário',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctScenario
          }, {
            id: 'testCase',
            name: 'CT',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctTestCase
          }, {
            id: 'iteration',
            name: 'Iteration',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctIteration
          }, {
            id: 'macrocenary',
            name: 'Macrocenário',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctMacrocenary
          }, {
            id: 'system',
            name: 'Sistema',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctSystem
          }, {
            id: 'uat',
            name: 'UAT',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctUAT
          }, {
            id: 'prerequisite',
            name: 'Pré Requisito',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctPrerequisite
          }, {
            id: 'successorTestCase',
            name: 'CT Sucessor',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctSuccessorTestCase
          }, {
            id: 'name',
            name: 'Nome',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctName
          }, {
            id: 'functionalDetailing',
            name: 'Det.<br>Funcional',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: false,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'description',
            name: 'Descrição',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: false,
            yesNoImage: false,
            filterOptions: []
          }
        ]
      }
    },

    methods: {
      ...mapActions('testPlan', ['loadData'])
    },

    mounted () {
      console.log('testPlan - mounted')
    },

    watch: {
      'selectedMonoselection': {
        handler () {
          this.loadData(this.selectedMonoselection)
        }
      }
    }
  }
</script>

<template>
  <span>
      <div class="loader" v-show="loading" slot="body"/>
      <oiGrid v-show="!loading" slot="body"
        filterTermMessage="Informe os filtros!"
        :data="data"
        :columns="columns"
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