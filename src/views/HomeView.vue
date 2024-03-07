<template>
    <div class="main">

        <div v-if="error">
            <h1>{{ error }}</h1>
        </div>
        
        <div v-else-if="posts.length > 0">
            <BlogList :posts='posts'></BlogList>
        </div>
        
        <div v-else>
            <Spinner></Spinner>
        </div>
        
    </div>
</template>

<script>


import Spinner from '../components/Spinner'
import BlogList from '../components/BlogList.vue'
import getPosts from '../composables/getPosts';

    export default {
    
    components: {
    Spinner, BlogList },
        
        setup(){
            
            let {load, posts, error} = getPosts();
            
            load()
                       
            return {posts, error}

        }
    }
</script>

<style>

</style>