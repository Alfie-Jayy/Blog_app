<template>
    <div>

        <h1>My Job Projects</h1>

        <div v-if="jobs">
            <JobList :jobs='jobs'></JobList>
        </div>
        
        <div v-else>
            <p>Loading...</p>
        </div>
        
    </div>
</template>

<script>

import { ref } from 'vue';
import JobList from '../components/JobList.vue'
import getPosts from '../composables/getPosts';

    export default {
    
        components: { JobList },
        
        setup(){
            
            let {load, jobs, error} = getPosts();
            
            load()
                       
            return {jobs, error}

        }
    }
</script>

<style>

</style>