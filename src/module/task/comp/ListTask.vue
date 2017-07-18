<script>
  export default {
    name: 'ListTask',

    computed: {
      sortedTasks: function () {
        // let sorted = this.$VuexStoreTask.state.tasks
        let sorted = []
        return sorted.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name === b.name) return 0
          return 1
        })
      },
      tasks: function () {
        return this.$VuexStoreTask.state.tasks
      }
    }
  }
</script>

<template>
  <span>
    <div v-for="task in sortedTasks" style="text-align: center">
      <input type="checkbox"  v-model="task.completed">
      <span v-text="task.name" :class="{ completedTask: task.completed }"/>
    </div>
  </span>
</template>

<style scoped>
  .completedTask {
    text-decoration: line-through;
  }
</style>
