<script>
  import { Task } from '@/module/task/models/Task'

  export default {
    name: 'inputTask',

    data () {
      return {
        taskName: ''
      }
    },

    methods: {
      addTask () {
        let task = this.createTask(this.taskName)
        console.log(task)
        // this.$VuexTask.commit('addTask', { task })
        this.clearFields()
      },
      createTask (value) {
        let task = new Task()
        task.completed = false
        task.name = value
        return task
      },
      clearFields () {
        this.taskName = ''
      }
    }
  }
</script>

<template>
  <span>

    <input type="text" 
      class="new-todo" 
      placeholder="O que precisa ser feito?"
      v-model="taskName"
      @keyup.enter="addTask"
    >

  </span>
</template>

<style scoped>
</style>
