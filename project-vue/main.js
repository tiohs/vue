const app = Vue.createApp({
  data() {
    return {
      task: '',
      tasks: []
    }
  },
  methods: {
    newItem() {
      this.tasks.push({ name : this.task })
      this.task = ''
    },
    delItem(task) {
      return this.tasks = this.tasks.filter(item => item !== task)
    }
  }
})

app.mount('#app')