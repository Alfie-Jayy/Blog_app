<template>
    <div >
        <h3 class="cloud-title font-quicksand">Tag clouds</h3>
        <div class="cloud-parent">
                <div v-for="tag in uniqueTags" class="cloud" >
                    <router-link :to="{name: 'tag', params:{tag: tag}  }" >{{ tag }}</router-link>
                </div>
        </div>
    </div>
</template>

<script>
import { ref} from "vue";
    export default {
        props: ['posts'],

        setup(props){

            let tags = ref([]);
            
            props.posts.forEach( (post)=>{
                return post.tags.forEach( (tag)=> {                    
                    tags.value.push(tag)
                } )
            } )

            let uniqueTags = tags.value.filter( (tag, index, array)=>{
                return array.indexOf(tag) === index
            } )

             

            return {uniqueTags}
        }

    }
</script>

<style>
.router-link-active{
    color: #334155;
}
</style>