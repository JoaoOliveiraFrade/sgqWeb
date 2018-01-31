<script>
  import oiModal from '@/genComp/modal/Modal2.vue'

  export default {
    name: 'ShowRule',

    components: { oiModal }
  }
</script>

<template>
  <span style="padding:0; margin:0">
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#averageTimeRegrasModal">
        Regra
    </button>
    <oiModal id="averageTimeRegrasModal" title="Regras para Cálculo do 'Tempo Médio'">   
      <div style="margin:0; padding:10px" slot="body">
        <label class="fd-label">
            <p style="text-align:left">
                Tempo útil em horas (entre 9 e 18 horas, exceto fins de semana) de defeitos fechados, dividido pela quantidade de defeitos fechados.
            </p>
            <p style="text-align:left">
                São considerados os tempos de todos os Status e Agentes por onde o defeito passou.
            </p>

            <p style="text-align:left">
                São considerados somente defeitos das etapas de TI e UAT.
            </p>
            
            <p style="text-align:left">
                Os valores de referência para resolução dos defeitos, são: Low: 16h, Medium: 8h e High: 4h.
            </p>       
        </label>
      </div>
    </oiModal>
  </span>
</template>

<style scoped>
  .fd-label {
    font-weight: normal;
    text-align: left;
  }
</style>
