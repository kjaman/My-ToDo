import BaseFooter from './components/BaseFooter.js'
import BaseNav from './components/BaseNav.js'
import BaseCard from './components/BaseCard.js'
import TaskAdd from './components/TaskAdd.js'
import Tasks from './components/Tasks.Js'
export default{
  components:{
   BaseFooter,
   BaseNav,
   BaseCard,
   TaskAdd,
   Tasks
  },
    template: `
    <base-nav></base-nav>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <tasks :tasks="filters.inprogress" title="In Progress"></tasks>
          <tasks :tasks="filters.completed" title="Completed"></tasks>
          <div class="mb-3 border-bottom pt-2">
            <h3>Add a new task</h3>
          </div>
          <base-card>
          <task-add @addnewtask="AddTask"></task-add>
          </base-card>
        </div>
      </div>
    </div>
    <base-footer></base-footer>

    `,
    data(){
      return{
        tasks:[
          {title: 'Task one', status: false, tag:'Math', id: 1},
          {title: 'Task two', status: false, tag:'Science', id: 2},
          {title: 'Task Three', status: false, tag:'Reading', id: 3},
          {title: 'Task Four', status: false, tag:'Math', id: 4},
        ]
      }
    },
    computed:{

      filters(){
        return{
          inprogress: this.tasks.filter(i => !i.status),
          completed: this.tasks.filter(i => i.status)
        }
      }
    },
    methods: {
      AddTask(name){
        this.tasks.push(
          {
            title:name,
            status: false,
            tag:'Math',
            id: this.tasks.length + 1 
          }
        )
      }
    },
}