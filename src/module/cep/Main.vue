<script>
  import oiInputCep from './comp/InputCep.vue'

  export default {
    name: 'MainCep',

    components: { oiInputCep },

    data () {
      return {
      }
    },

    methods: {
      addTask (task) {
        this.tasks.push(task)
      }
    }
  }
</script>

<template>
  <div class="container">
    <oi-input-cep/>
  </div>
</template>

<style scoped>
</style>
