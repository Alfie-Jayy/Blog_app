<template>
    <div class="main" >
        
        <div v-if="error">
            <h3>{{ error }}</h3>
        </div>
        
        <div v-else-if="posts.length" class="layout" >
            <div class="first-layout"> <TagCloud :posts = 'posts' ></TagCloud> </div>
            <div class="sec-layout"><BlogList :posts='filterPosts'></BlogList></div>            
        </div>

        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>

<script>
    import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import BlogList from '../components/BlogList'
import { computed } from 'vue';
    import getPosts from '../composables/getPosts';
    export default {
  components: {
    TagCloud,
    Spinner, BlogList },
        props: ['tag'],

        setup(props) {
            
            let {posts, error, load} = getPosts()
            
            load();

            let filterPosts = computed( ()=>{
                return posts.value.filter( (post)=>{
                    return post.tags.includes(props.tag)
                } )
            } )

            return {posts, error, filterPosts}
        }
    }
</script>
