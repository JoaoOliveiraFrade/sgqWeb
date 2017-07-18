export default {
  addTask (state, {task}) {
    state.tasks.push(task)
  },
  completeTask (state, {task}) {
    task.completed = !task.completed
  }
}
