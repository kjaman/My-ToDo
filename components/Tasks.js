import Task from "./Task.js"
import TaskTags from "./TaskTags.js"
export default{
  components:{
    Task,TaskTags
  },
    template:`
    <div class="list-container mb-3" v-show="tasks.length">
            <div class="d-flex justify-content-between align-items-center mb-3 border-bottom">
              <h3>{{title}}</h3>
              <span class="badge bg-secondary rounded-pill">{{tasks.length}}</span>
            </div>
            <task-tags @change="currentTag = $event" :inital-tags="tasks.map(a => a.tag)" :current-tag="currentTag"></task-tags>
  
            <div class="list-group">
              <task v-for="item in filteredTask" :key="item.id" :task="item"></task>
            </div>
    </div>

    `,
    props:{
      title: String,
      tasks: Array
    },

    data(){
      return{
        currentTag: "all"
      }
    },

    computed:{
      filteredTask(){
        if(this.currentTag === 'all')
        return this.tasks
        return this.tasks.filter(i => i.tag === this.currentTag); 
      }
    }

}