<template>
    <div class="blog">
        <router-link :to="{name: 'detail', params: {id: post.id} }" class="title" ><h2>{{ post.title }}</h2></router-link>
        <p class="detail" >{{ cutBlogDetail }} ...</p>
        <div class="tag-parent">
                <div v-for="tag in post.tags" class="tag" >
                    <p>{{ tag }}</p>
                </div>
        </div>
    </div>
</template>

<script>
    import { computed } from 'vue';
    export default {
        
        props: ['post'],

        setup(props) {
            
            let cutBlogDetail = computed( ()=>{
                return props.post.detail.substring(1, 100);
            } )

            return {cutBlogDetail}
        }

    }
</script>

<style >

</style>