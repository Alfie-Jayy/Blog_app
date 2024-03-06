<template>
    <div v-if="error">
        <p>{{ error }}</p>
    </div>
    <div v-else>
        <h3>Title - {{ post.title }}</h3>
        <h3>Level -{{ post.level }}</h3>
        <p>{{ post.detail }}</p>
    </div>
</template>

<script>
    import getPost from '../composables/getPost.js'
    export default {
        
        props: ['id'],

        setup(props){
            
            let {load, post, error} = getPost(props.id);
            
            load();

            return { post, error}
        }
    }
</script>
