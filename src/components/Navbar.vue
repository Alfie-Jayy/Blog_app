<template>
    <div class="nav" >
        <div class="nav-parent">
            <div class="nav-title">Bloggy Blogs</div>
            <div class="space-x-5 text-xl">
                <router-link class="text-slate-600 hover:text-rose-400 transition duration-500 font-normal " to="/">Home</router-link>
                <router-link class="text-slate-600 hover:text-rose-400 transition duration-500 font-normal " :to="{name: 'create'}" >Create</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>