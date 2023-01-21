export default{
    template:`
            <div class="list-group-item">
                <label class="checkbox">
                  <input type="checkbox" v-model="task.status">
                  <span class='indicator'></span>
                  {{task.title}}
                </label>
            </div>
    `,
    props:{
        task: Object
    }
}
