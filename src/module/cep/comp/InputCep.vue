<script>
  export default {
    name: 'inputCep',

    data () {
      return {
        cep: '',
        dados: ''
      }
    },

    methods: {
      checkCep () {
        this.$http.get('http://api.postmon.com.br/v1/cep/' + this.cep)
        .then(r => { this.dados = r.data })
      }
    }
  }
</script>

<template>
  <section>
    <label>Digite o CEP</label>
    <input type="text" 
      v-model="cep"
      @blur="checkCep"
    >
    <pre>{{dados}}</pre>
  </section>
</template>

<style scoped>
</style>
