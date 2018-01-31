<script>
  import { mapState, mapActions } from 'vuex'
  // import oiGrid from '@/genComp/grid/main.vue'
  // import oiModal from '@/genComp/modal/Modal2.vue'
  import oiAccumulatedGrid from './AccumulatedGrid.vue'
  import oiDailyGrid from './DailyGrid.vue'
  import oiChartCurvaS from '@/genComp/chart/execution/CurvaS'
  import oiChartProductivityXDefects from '@/genComp/chart/mix/productivityXDefects'
  import oiChartProductivityXDefectsGroupWeekly from '@/genComp/chart/mix/productivityXDefectsGroupWeekly'
  import oiShowGroupSystemGrid from './ShowGroupSystemGrid'

  export default {
    name: 'execution',
    visible: true,

    components: { oiAccumulatedGrid, oiDailyGrid, oiChartCurvaS, oiChartProductivityXDefects, oiChartProductivityXDefectsGroupWeekly, oiShowGroupSystemGrid },

    computed: {
      ...mapState('trg', ['selectedRelease', 'systemsMultiSelected']),
      ...mapState('trgExecution', ['loading', 'last05Days', 'last30Days', 'groupMonth', 'productivityXDefects', 'productivityXDefectsGroupWeekly'])
    },

    methods: {
      ...mapActions('trgExecution', ['loadDataLastDays', 'loadDataGroupMonth', 'loadDataProductivityXDefects', 'loadDataProductivityXDefectsGroupWeekly', 'loadDataGroupSystem'])
    },

    watch: {
      'systemsMultiSelected': {
        handler () {
          let filters = { release: this.selectedRelease, systems: this.systemsMultiSelected.map(i => i.id) }
          this.loadDataLastDays(filters)
          this.loadDataGroupMonth(filters)
          this.loadDataProductivityXDefects(filters)
          this.loadDataProductivityXDefectsGroupWeekly(filters)
          this.loadDataGroupSystem(filters)
        }
      }
    }
  }
</script>

<template>
  <span>
      <div class="loader" v-show="loading" slot="body"/>
      <div v-show="!loading">
        <div id="Acumulado" class="col-xs-12 col-lg-6 text-center" style="padding-top:10px">
            <label class="fd-label">Acumulado</label>
            <oiAccumulatedGrid :dataSource="last05Days"/>
        </div>

        <div class="col-xs-12 col-lg-6 text-center" style="padding-top:10px">
            <label class="fd-label">Diário</label>
            <oiDailyGrid :dataSource="last05Days"/>
        </div>

        <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
            <oiChartCurvaS :dataSource="groupMonth" title="Curva S"/>
        </div>
        
        <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
            <oiChartCurvaS :dataSource="last30Days" title="Curva S dos últimos dias"/>
        </div>

        <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
            <oiChartProductivityXDefects
              title = "Produtiv. X Def. Abertos - Dia" 
              :dataSource="productivityXDefects" 
            />
        </div>

        <div class="col-xs-12 col-md-6 text-center" style="padding-top:10px">
            <oiChartProductivityXDefectsGroupWeekly
              title = "Produtiv. X Def. Abertos - Semana" 
              :dataSource="productivityXDefectsGroupWeekly" 
            />
        </div>

        <div class="col-xs-12 text-center" style="padding-top:10px">
            <oiShowGroupSystemGrid/>
        </div>
        
      </div>


      <!--  
      <oiGrid v-show="!loading" slot="body"
        filterTermMessage="Informe os filtros!"
        :data="data"
        :columns="columns"
      />

      <button style="margin-top:2px"
          type="button"     
          ref="buttonModal"
          class="btn btn-xs"
          data-toggle="modal" 
          data-target="#modalexecution">Gerar Plano
      </button>

      <oiModal id="modalexecution" title="Plano Teste" size="l">
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

  .oi-well {
    margin: 2px; 
    padding: 0;
  }

  .oi-col {
    padding: 5px; 
    margin: 0; 
    border: 0;
  }

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }

  .fd-content {
    margin: 0; 
    border: 0; 
    padding: 3px; 
    text-align: left;
    font-weight: normal;
  }

  img {
    margin: 0; 
    border: 0; 
    padding: 0;
    vertical-align: top;
    height: 35px;
    width: 35px;
  }  
</style>