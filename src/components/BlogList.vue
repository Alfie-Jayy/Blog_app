<template>
    <div>
        <router-link to="/"><h1 class="nav">My Blogs</h1></router-link>
        <!-- <router-link ><h1 class="header">My Blogs</h1></router-link> -->
        <div v-for="post in posts" :key="post" >
            <SingleBlog :post="post"></SingleBlog>
        </div>
    </div>
</template>

<script>
   
import SingleBlog from './SingleBlog'
export default {
  
        components: { SingleBlog },
  
        props: ['posts'],

    }
</script>

<style>

</style>