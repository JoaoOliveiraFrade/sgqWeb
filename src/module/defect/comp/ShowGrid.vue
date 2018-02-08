<script>
  import { mapState, mapActions } from 'vuex'
  import oiModal from '@/genComp/modal/Modal2.vue'
  // import oiShowDefectDetail from '@/genComp/defect/ShowDetail'
  import oiShowDefectDetail from './ShowDetail'

  export default {
    name: 'ShowGridDefect',

    components: { oiModal, oiShowDefectDetail },

    props: {
      defects: { type: Array },
      id: { type: String }
    },

    computed: {
      ...mapState('defect', ['selectedDefect', 'selectedDefectDetail'])
    },

    methods: {
      ...mapActions('defect', ['setSelectedDefect']),

      onSelectDefect (defectSelected) {
        this.setSelectedDefect(defectSelected)
        this.$emit('onSelectDefect', defectSelected)
      }
    }
  }
</script>

<template>
  <div>
    <table class="table table-condensed table-striped table-hover table-bordered">
        <thead>
            <tr>
                <td class="text-center" style="padding:0">
                    <font size="2px"></font>
                </td>                                

                <td class="text-center" style="padding:0">
                    <font size="2px">Nº</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="2px">Status</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="2px">Fila</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="2px">Sistema Def.</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="2px">Aging</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="2px">Ping Pong</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="2px">Sistema TRG</font>
                </td>
            </tr>
        </thead>
        <tbody v-for="defect in defects">
            <tr>
                <td class="text-center" style="padding:0; white-space: nowrap">
                  <a class='btn btn-xs my-tool-tip' 
                    title="Exibir"
                    style="padding:0;margin:0; text-right"
                    data-toggle="modal"
                    :data-target="'#DefectDetail' + id"
                    @click="onSelectDefect(defect)">
                    <i class='glyphicon glyphicon-list-alt'></i>
                  </a>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="2px">{{defect.id}}</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="1.5px">{{defect.status}}</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="1.5px">{{defect.queue}}</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="1.5px">{{defect.defectSystem}}</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="1.5px">{{defect.agingFormat}}</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="1.5px">{{defect.pingPong}}</font>
                </td>

                <td class="text-center" style="padding:0">
                    <font size="1.5px">{{defect.trgSystem}}</font>
                </td>
                
            </tr>


        </tbody> 
    </table>

    <!--<oiModal :id="'modalEdit' +  title.replaceAll(' ', '').replaceAll('.', '').replaceAll('(', '').replaceAll(')', '')" :title="'Seleção de ' + title" size="l">-->
    <oiModal :id="'DefectDetail' + id" :title="'Detalhamento Defeito'" size="l">
        <oiShowDefectDetail slot="body"/>
    </oiModal>
    <!--<pre slot="body">{{defects}}</pre>-->

  </div>
</template>

<style>

</style>
