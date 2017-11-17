<script>
  import { mapActions, mapGetters } from 'vuex'
  // import ServicesProjectXgrouper from '@/module/projectXgrouper/services'
  // import ServicesProject from '@/module/project/project/services'
  // import ServicesGrouper from '@/module/grouperConsult/services'
  import oiShowGridProject from '@/module/project/project/comp/ShowGridProject.vue'

  export default {
    name: 'ShowGrouperConsult',

    components: { oiShowGridProject },

    computed: {
      ...mapGetters(['grouper', 'grouperProjects'])
    },

    methods: {
      ...mapActions(['setFeatureName', 'setGrouper']),

      searchGrouperConsult () {
        this.$router.push({ name: 'searchGrouperConsult' })
      },

      requestReportGrouperConsult () {
        this.$router.push({ name: 'requestReportGrouperConsult' })
      }
    },

    created () {
      this.setFeatureName('Consulta de Agrupadores')
      this.setGrouper(this.$route.params.grouper)
    }
  }
</script>

<template>
  <div class="container">
    <div class="col-xs-12 well well-sm oi-well">
      <div class="col-sm-1" style="margin:0; border:0; padding:5px" v-show="grouper.type === 'STATUS'">
          <label class="fd-label">Farol:</label>
          <div class="text-center" style="padding:0;">
              <img alt="Farol Verde" src="../../../asset/image/verde-sm.png" v-show="grouper.trafficLight === 'VERDE'" style="padding:0; margin:0; border:0">
              <img alt="Farol Amarelo" src="../../../asset/image/amarelo-sm.png" v-show="grouper.trafficLight === 'AMARELO'" style="padding:0; margin:0; border:0">
              <img alt="Farol Vermelho" src="../../../asset/image/vermelho-sm.png" v-show="grouper.trafficLight === 'VERMELHO'" style="padding:0; margin:0; border:0">
          </div>
      </div>
      
      <div class="col-sm-11" style="margin:0; border:0; padding:5px">
        <div>
          <label class="fd-label">Nome:</label>
        </div>
        <div>
          <label class="fd-content" v-html="grouper.name"/>
        </div>
      </div>

      <div class="col-xs-12" style="margin:0; border:0; padding:5px" v-show="grouper.type === 'STATUS'">
        <div>
          <label class="fd-label">Resumo Executivo Agrupador:</label>
        </div>
        <div>
          <label class="fd-content" v-html="grouper.executiveSummary ? grouper.executiveSummary : 'Sem dados!'"/>
        </div>
      </div>

      <div class="col-xs-12" style="margin:0; border:0; padding:5px">
        <oiShowGridProject
          :items="grouperProjects"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  .oi-icon {
    font-size: medium;
  }

  @media (min-width: 1200px) {
    .container {
      width: 1200px;
    }
  }
  .container {
    padding: 0px;
    margin: 0px;
    border: 0px;
	  margin-left: 2px;
  }
</style>
