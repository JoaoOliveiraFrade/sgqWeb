<script>
  import oiHeaderTask from './comp/HeaderTask.vue'
  import oiInputTask from './comp/InputTask.vue'
  import oiListTask from './comp/ListTask.vue'

  export default {
    name: 'MainTask',
    components: { oiHeaderTask, oiInputTask, oiListTask }
  }
</script>

<template>
  <div class="container">
    <oi-header-task/>
    <oi-input-task/>
    <oi-list-task/>
  </div>
</template>

<style scoped>
</style>
