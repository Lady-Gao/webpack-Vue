<template>
    <div id="app">
        {{a}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                a:"Hello World"
            }
        },
        mounted(){
            // console.log(process.env.NODE_ENV,"9")
        }
    }
</script>

<style scoped>

</style>