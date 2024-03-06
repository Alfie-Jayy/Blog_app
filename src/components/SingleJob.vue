<template>
    <div>
        <router-link :to="{name: 'detail', params: {id: job.id} }" ><h2>Title - {{ job.title }}</h2></router-link>
        <h3>Level - {{ job.level }}</h3>
        <p>Detail - {{ cutJobDetail }} ...</p>
    </div>
</template>

<script>
    import { computed } from 'vue';
    export default {
        
        props: ['job'],

        setup(props) {
            
            let cutJobDetail = computed( ()=>{
                return props.job.detail.substring(1, 100);
            } )

            return {cutJobDetail}
        }

    }
</script>

<style >

</style>