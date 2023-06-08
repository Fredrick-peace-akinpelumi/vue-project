<template>
    <p>{{id}}</p>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            // id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>