<template>
    <div class="main" >
        <div class="flex justify-between" >
            <div class="text-3xl font-pacifico text-rose-500">Bloggy Blogs</div>
            <div class="space-x-3">
                <router-link class="text-slate-500 hover:text-rose-600 transition duration-500 text-lg font-semibold " to="/">Home</router-link>
                <router-link class="text-slate-500 hover:text-rose-600 transition duration-500 text-lg font-semibold " :to="{name: 'create'}" >Create</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .router-link-active{
        color: crimson;
    }
</style>