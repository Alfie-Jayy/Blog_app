<template>
    <div>
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