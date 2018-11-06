<template>
    <div id="app">
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'APP',
        data(){
            return {
                a:"Hello World"
            }
        },
        components: {
        },
        mounted(){
            // console.log(process.env.NODE_ENV,"9")
        }
    }
</script>

<style scoped>

</style>