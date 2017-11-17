<script>
  import oiModal from '@/comp/modal/Modal2.vue'

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
        data-target="#densityShowRule">
        Regra
    </button>
    <oiModal id="densityShowRule" title="Regras para Cálculo da 'Densidade'">   
      <div style="margin:0; padding:10px" slot="body">

        <label class="fd-label">
          <p style="text-align:left">
              Defeitos (CLOSED de CONSTRUÇÃO) divididos pelos CTs (diferentes de CANCELADO, NO RUN e MASSA), multiplicados por 100.
          </p>
          <p style="text-align:left">
              São considerados somente defeitos e CTs das etapas de TI e UAT.
          </p>
          <p style="text-align:left">
              Devido a este painel exibir os dados em uma régua de tempo, totalizamos os defeitos relacionados aos CTs, no mês/ano de execução destes CTs.
          </p>
          <!--
          <p style="text-align:left">
              Em outros locais onde os dados não são exibidos em uma régua de tempo, não consideramos o relacionamento entre Defeitos e CTs. Isto é, contemplamos também defeitos avulsos (sem relacionamento com CTs).
          </p>
          -->
          <p style="text-align:left">
              Os valores de referência: Aceitável, Moderada e Alta, são respectivamente: 10%, 20% e 30%.
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
