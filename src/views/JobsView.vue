<template>
  <h4>Jobs components</h4>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="'/jobs/'+job.id">
    <h4>{{job.title}}</h4>
    </router-link>
  </div>
 
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {
                    id:1,
                    title:'Software developer',
                    description:'Mern stack developer',
                    salary:1000,
                    location:'Location 1',
                    company:'Company 1',
                    type:'Full Time',
                    category:'Category 1',
                 },
                {
                    id:2,
                    title:'UI/UX',
                    description:'A user interface designer',
                    salary:2000,
                    location:'Location 2',
                    company:'Company 2',
                    type:'Part Time',
                    category:'Category 2',
                },
                {
                    id:3,
                    title:'Artist',
                    description:'Musician',
                    salary:3000,
                    location:'Location 3',
                    company:'Company 3',
                    type:'Full Time',
                    category:'Category 3',
                 },
                {
                    id:4,
                    title:'Trader',
                    description:'Crypto trader and analyst',
                    salary:4000,
                    location:'Location 4',
                    company:'Company 4',
                    type:'Part Time',
                    category:'Category 4',
                 },
                {
                    id:5,
                    title:'Bet analyst',
                    description:'Sporty bet analyst',
                    salary:5000,
                    location:'Location 5',
                    company:'Company 5',
                    type:'Full Time',
                    category:'Category 5',
                 },
            ]
        }
    },
  
}
</script>

<style>

</style>