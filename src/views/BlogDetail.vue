<template>
        
    <div class="main">
        <div v-if="error">
            <p>{{ error }}</p>
        </div>
        <div v-else-if="post" class="blog" >
            <h3 class="title"> {{ post.title }}</h3>
            <p>{{ post.detail }}</p>
            <div class="tag-parent">
                <div v-for="tag in post.tags" class="tag" >
                    <p>{{ tag }}</p>
                </div>
            </div>

            <div>
                <button class="delete-btn" @click="deleteBlog" >Delete</button>
            </div>

        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>

</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost.js'
import { useRoute, useRouter } from 'vue-router';
import {db} from '../firebase/config'
    
export default {
    components: { Spinner },
        
        props: ['id'],
        //this.$route.params.id

        setup(props){
            
            let route = useRoute()
            let router = useRouter()
            
            let {load, post, error} = getPost(route.params.id);            
            load();

            let id = props.id
            let deleteBlog = async() => {
                await db.collection('posts').doc(id).delete()
                router.push('/')

            }

            return { post, error, deleteBlog}
        }
    }
</script>
