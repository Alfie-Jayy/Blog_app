<template>
    <div>

        <h1>My Job Projects</h1>

        <div v-if="error">
            <h1>{{ error }}</h1>
        </div>
        
        <div v-else-if="jobs.length > 0">
            <JobList :jobs='jobs'></JobList>
        </div>
        
        <div v-else>
            <Spinner></Spinner>
        </div>
        
    </div>
</template>

<script>


import Spinner from '../components/Spinner'
import JobList from '../components/JobList.vue'
import getPosts from '../composables/getPosts';

    export default {
    
        components: {
    Spinner, JobList },
        
        setup(){
            
            let {load, jobs, error} = getPosts();
            
            load()
                       
            return {jobs, error}

        }
    }
</script>

<style>

</style>