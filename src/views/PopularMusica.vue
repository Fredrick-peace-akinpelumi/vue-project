<template>
<div class="container mt-5 mx-auto  " >
    <h1 v-if="loading" >Loading.........</h1>
</div>

  <div class="container-fluid">
        <div class="d-flex flex-wrap justify-content-around ">
    <div class="card w-25 shadow-sm shadow-sm m-2" v-for="song in allNewSongs" v-bind:key="song.id">
       <div class="card-body text-center">
         <img class="card-img w-50" :src="song.cover" alt="">
        <h3 class="card-title">{{song.artist}}</h3>
        <h3 class="card-title">{{song.title}}</h3>
        <audio :src="song.audio" controls></audio>
        <p>{{song.duration}}</p>
       </div>
    </div>
        </div>
  </div>
</template>

<script>
    import axios from "axios";
export default {
    mounted(){
        this.getNew();
    },
    data(){
        return {
            allNewSongs:[],
            loading: true
        }
    },
    methods:{
        getNew(){
            let url = 'https://musica-api.up.railway.app/popular';
            axios.get(url).then((response,)=>{
                this.allNewSongs = response.data;
                this.loading= false
            }).catch({
                if (error) {
                    alert(error.message)
                    this.loading= false
                }
            })
        }
    }

}
</script>

<style>

</style>