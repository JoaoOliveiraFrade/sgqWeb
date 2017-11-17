<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import oiGrid from '@/comp/grid/main.vue'

  export default {
    name: 'Monoselection',
    show: true,

    components: { oiGrid },

    computed: {
      ...mapState('projectBiti', ['data']),
      ...mapGetters('projectBiti', [
        'distinctState',
        'distinctClassification',
        'distinctUN',
        'distinctReleaseSGQ',
        'distinctReleaseClarity',
        'distinctCategory',
        'distinctProjectManager',
        'distinctTechnicalLeader',
        'distinctLTManager',
        'distinctPMO',
        'distinctBusinessAnalyst',
        'distinctTestLeader'
      ]),

      columns () {
        return [{
          id: 'subprojectDelivery',
          name: 'Proj.<br>',
          alignHeader: 'center',
          align: 'center',
          show: true,
          sort: true,
          minWidth: '',
          yesNoImage: false,
          filterOptions: []
        }, {
          id: 'name',
          name: 'Nome<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: []
        }, {
          id: 'state',
          name: 'Estado<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctState
        }, {
          id: 'classification',
          name: 'Class.<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctClassification
        }, {
          id: 'un',
          name: 'UN<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: false,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctUN
        }, {
          id: 'releaseSGQFormat',
          name: 'Release<br>SGQ<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: false,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctReleaseSGQ
        }, {
          id: 'releaseClarityFormat',
          name: 'Release<br>Clarity<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctReleaseClarity
        }, {
          id: 'category',
          name: 'Categoria<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: false,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctCategory
        }, {
          id: 'projectManager',
          name: 'Gerente<br>Projeto<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: false,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctProjectManager
        }, {
          id: 'LTManager',
          name: 'Gerente<br>L.Téc.<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: false,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctLTManager
        }, {
          id: 'businessAnalyst',
          name: 'Analista<br>Negócio<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctBusinessAnalyst
        }, {
          id: 'technicalLeader',
          name: 'Lider<br>Técnico<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctTechnicalLeader
        }, {
          id: 'PMO',
          name: 'PMO<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: false,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctPMO
        }, {
          id: 'testLeader',
          name: 'Lider<br>Teste<br>',
          alignHeader: 'center',
          align: 'left',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: this.distinctTestLeader
        }, {
          id: 'systemsDev',
          name: 'Sistemas<br>Desenvolvimento',
          alignHeader: 'center',
          align: 'left',
          minWidth: '300px',
          show: false,
          sort: false,
          yesNoImage: false,
          filterOptions: []
        }, {
          id: 'systemsTest',
          name: 'Sistemas<br>Teste',
          alignHeader: 'center',
          align: 'left',
          minWidth: '200px',
          show: false,
          sort: false,
          yesNoImage: false,
          filterOptions: []
        }, {
          id: 'hasTest',
          name: 'Há<br>Teste<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
        }, {
          id: 'finishedSystemsInDSOL',
          name: 'Sist.<br>Concl.<br>no DSOL<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
        }, {
          id: 'qualityProposalWithGo',
          name: 'Prop.<br>Qualid<br>Com GO<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
        }, {
          id: 'approvedSolutionDrawing',
          name: 'Desen.<br>solução<br>Aprov.<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
        }, {
          id: 'scheduleApproved',
          name: 'Cronog.<br>Aprov.<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: false,
          filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
        }, {
          id: 'preCandidature',
          name: 'Pré<br>Candi-<br>datura<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: true,
          filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
        }, {
          id: 'candidature',
          name: 'Can-<br>dida-<br>tura<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: true,
          filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
        }, {
          id: 'hasGMUD',
          name: 'Há<br>GMUD<br>',
          alignHeader: 'center',
          align: 'center',
          minWidth: '',
          show: true,
          sort: true,
          yesNoImage: true,
          filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
        }]
      }
    },

    methods: {
      ...mapActions('projectBiti', ['loadData']),

      setSelected (parameter) {
        console.log(parameter)
      }
    },

    mounted () {
      this.loadData()
    }
  }
</script>

<template>
  <div id="app"> <!-- class="container" style="padding: 10px" -->
    <div 
    <oiGrid
      :data="data"
      filterTermMessage="Informe os filtros! Na pesq. de farol, digite a cor 'verd', 'amar' ou 'verm'. Ex: verd+multip+2017."
      selectionType="mono"
      :columns="columns"
      @setSelected="setSelected"
    />
  </div>
</template>
