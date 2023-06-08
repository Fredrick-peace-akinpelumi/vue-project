<script >
    // import { RouterLink, RouterView } from 'vue-router'
    // import HelloWorld from './components/HelloWorld.vue'
  export default({
    methods:{
      redirect(){
          this.$router.push('/jobs')
        },
        back(){
          this.$router.go(-1)
        },
        front(){
          this.$router.go(1)
        }
    }
  })
</script>
<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="">
      <HelloWorld msg="You did it!" />

      <nav class="p-3 d-flex gap-3">
    <RouterLink class="text-white btn btn-primary w-25" to="/music">New</RouterLink>
    <RouterLink class="text-white btn btn-primary w-25" to="/popular">Popular</RouterLink>

        <!-- <RouterLink to="/music">Home</RouterLink>| -->
        <!-- <RouterLink :to="{name:'about'}">About</RouterLink>|
        <RouterLink :to="{name:'jobs'}">Jobs</RouterLink>| -->
        <!-- <RouterLink :to="{name:'music'}">music</RouterLink> -->
      </nav>
    </div>
  </header>
  

  <RouterView />
   <!-- <div>
    <button class="btn btn-info" @click="redirect">Redirect</button>
    <button class="btn btn-danger" @click="back">Go Back</button>
    <button class="btn btn-success" @click="front">Go Front</button>
  </div> -->
</template>

<style scoped>

</style>
