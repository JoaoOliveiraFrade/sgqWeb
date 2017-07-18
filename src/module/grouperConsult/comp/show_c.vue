<script>
  // import ServicesProjectXgrouper from 'src/module/ProjectXgrouper/services'
  // import oiProjectGridShow from 'src/comp/project/gridShow.vue'
  import oiProjectGridShow from '@/module/project/comp/gridShow.vue'

  export default {
    name: 'grouperShow_c',

    components: { oiProjectGridShow },

    props: {
      item: { type: Object }
    },

    data () {
      return {
        showModal: true
      }
    }
  }
</script>

<template>
    <div id="grouper" class="row well well-sm oi-well" v-if="item !== undefined">
      <div class="col-xs-12 col-md-1" style="margin:0; border:0; padding:5px" v-show="item.grouper.type === 'STATUS'">
          <label class="fd-label">Farol:</label>
          <div class="text-left" style="padding-bottom:5px">
            <img alt="Farol Verde" src="../../../asset/image/verde-sm.png"  v-show="item.grouper.trafficLight === 'VERDE'">
            <img alt="Farol Amarelo" src="../../../asset/image/amarelo-sm.png" v-show="item.grouper.trafficLight === 'AMARELO'">
            <img alt="Farol Vermelho" src="../../../asset/image/vermelho-sm.png" v-show="item.grouper.trafficLight === 'VERMELHO'">
          </div>
      </div>
    
      <div class="col-xs-12 col-md-5" style="margin:0; border:0; padding:5px">
        <div>
          <label class="fd-label">Nome:</label>
        </div>
        <div>
          <label 
            class="fd-content" 
            v-html="item.grouper.name"
          />
        </div>
      </div>

      <div class="col-xs-12" style="margin:0; border:0; padding:5px" v-show="item.grouper.type === 'STATUS'">
        <div>
          <label class="fd-label">Resumo Executivo Agrupador:</label>
        </div>
        <div>
          <label 
            class="fd-content" 
            v-html="item.grouper.executiveSummary ? item.grouper.executiveSummary : 'Sem dados!'"
          />
        </div>
      </div>

      <div class="col-xs-12" style="margin:0; border:0; padding:5px">
        <oiProjectGridShow
          :items="item.projects"
        />
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
</style>
