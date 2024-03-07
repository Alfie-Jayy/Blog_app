<template>
        
    <div v-if="error">
        <p>{{ error }}</p>
    </div>
    <div v-else-if="post">
        <h3>Title - {{ post.title }}</h3>
        <h3>Level -{{ post.level }}</h3>
        <p>{{ post.detail }}</p>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost.js'
    export default {
    components: { Spinner },
        
        props: ['id'],

        setup(props){
            
            let {load, post, error} = getPost(props.id);
            
            load();

            return { post, error}
        }
    }
</script>
