new Vue({
  el: '#app',

  data: {
    tasks: [
      { body: 'Go to the store', completed: false }
    ],
    newTask: ''
  },

  methods: {
    addTask: function(e){

      e.preventDefault();

      this.tasks.push({
        body: this.newTask,
        completed: false
      });

      this.newTask = '';
    },
    removeTask: function(task){
      this.tasks.$remove(task);
    }
  }
})
