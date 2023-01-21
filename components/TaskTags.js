export default{
    template: 
    `
    <div class="tags-list mb-3">
              <span @click="$emit('change', tag)" class="badge bg-secondary rounded-pill"
              :class="
              {
                'bg-success': tag === currentTag
              }
              "
              v-for="tag in tags">{{tag}}</span>
            </div>
    `,
    props:{
        initalTags: Array,
        currentTag: String
    },
    computed:{
        tags(){
            return ['all',...new Set (this.initalTags)]
          }
    }
}