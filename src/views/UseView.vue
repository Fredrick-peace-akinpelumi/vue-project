<template>
  <div class="text-center">List Of users</div>
    <div class="card shadow-sm m-2" v-for="user in allUsers" v-bind:key="user.id">
        <p>{{user.name}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            allUsers:[]
        }
    },
    mounted(){
        this.getUsers();
    },
    methods:{
        getUsers(){
            let url = 'https://jsonplaceholder.typicode.com/users';
            axios.get(url).then((response)=>{
                this.allUsers = response.data;
            })
        }
    }
}
</script>

<style>

</style>