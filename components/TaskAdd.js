export default{
    template: `
            <form @submit.prevent="addTask">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Task Title" v-model="newTask">
                  <button class="btn btn-outline-success" type="submit">Add Task</button>
                </div>
            </form>
    `,
    data(){
      return{
        newTask: ''
      }
    },
    methods: {
      addTask(){
        this.$emit('addnewtask', this.newTask)
        this.newTask=''
      }
    },
}