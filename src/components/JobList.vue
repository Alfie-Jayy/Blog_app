<template>
    <div>
        <div v-for="job in jobs">
            <SingleJob :job="job"></SingleJob>
        </div>
    </div>
</template>

<script>
   
import SingleJob from './SingleJob'
export default {
  
        components: { SingleJob },
  
        props: ['jobs'],

    }
</script>

<style>

</style>