<script setup>
import {ref} from 'vue'
import animebase from '../components/AnimeBase.vue'
import { RouterLink } from 'vue-router';
import navigation from '../components/nav.vue'
import Skeleton from '../components/skeleton.vue'
import addToHome2 from '../components/helloWorkd2.vue';
import addToHome from '../components/HelloWorld.vue';
const baseUrl = "https://api.jikan.moe/v4/anime";
const baseUrl2 = "https://api.jikan.moe/v4/top/anime";
// function searchAnime(){
const search_query = ref("");
const animelist = ref([]);
const handle_search = async () => {
  animelist.value = await fetch(`${baseUrl}?q=${search_query.value}&limit=15`)
  .then(res => res.json())
  .then(data => data.data);
  search_query.value = ''
  console.log(animelist.value);
}
//test1

const newnote = ref([])
    const toasts = ref(false)
    const newbro = ref([])
  
    

const addTotost = note => {
newnote.value.push({
	    series:note.title
})

	
localStorage.setItem('newnote', JSON.stringify(newnote.value))



	newnote.value = JSON.parse(localStorage.getItem('newnote')) || []



return newnote.value,newbro
}



</script>
<template>
    <navigation />
    <div class="pt-20 ">

    <main class="text-center flex flex-col items-center justify-center gap-10">
      <h1 class=" text-5xl head">THREEB</h1>
      <form class="w-full px-[12%] lg:px-[35%]"  @submit.prevent="handle_search">
        <input type="search" placeholder="Search for an Anime..." class="border border-gray-300 rounded-lg px-4 py-3 text-lg w-full outline-none drop-shadow-lg bg-gray-100  " v-model="search_query"/>
      </form>
    </main>
    <div  v-if="animelist.length > 0" class="px-[4%] xl:px-[8%] gap-10 lg:gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-20 content-center">
      <div v-for="anime in animelist" :key="anime.mal_id" :anime="anime" >
			  <div class="flex  gap-3 text-lg font-bold w-full items-center bg-gray-200 rounded-lg drop-shadow-lg" >
          
          <img :src="anime.images.jpg.large_image_url" :alt="anime.title +' poster'" class="h-[200px] md:h-[200px] lg:h-[250px] xl:h-[300px] w-[200px] md:w-[250px] lg:w-[200px]  border border-black rounded-l-lg" />
				  <div class="space-y-3 text-center justify-center">
            <h3>{{ anime.title }}</h3>
            <button  @click.prevent="addToHome(anime), toasts = true,addTotost(anime)" class="bg-red-200 p-2  transition duration-300 ease-in-out hover:opacity-100 text-sm md:text-base rounded-lg">add to home</button>
          </div>
          <!-- , addToHome2(manga)  -->
          <!-- v-for="manga in mangalist" :key="manga.mal_id" :manga="manga"   -->
        </div>
		  </div>
      <div  v-if="toasts" class="w-full flex justify-center ">
            <!-- <noti/>  -->
            <section class="bg-blue-100 flex gap-2 rounded-md items-center top-20 lg:right-0 fixed z-[9999] mx-[4%] p-2 animate-bounce">
                <div class="shrink-0">
                    <i class="fa-solid fa-circle-info text-gray-500 text-xl "></i>
                </div>
                <RouterLink to="/" class="flex gap-2">
                    <h2 class="font-base  text-blue-900 text-center">Added</h2>
                    <div class="text-sm text-blue-800 md:text-lg font-bold">{{ newnote.slice(-1)}}</div>
                </RouterLink>
                <div class="shrink-0">
                    <button @click.prevent="toasts = false" class="text-gray-500 hover:text-blue-200 p-0.5  rounded-md">
                        <i class="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>
            </section>
      </div>
      
      <!-- anime in animelist" :key="anime.mal_id" :anime="anime" -->
    </div> 
    <div class="flex flex-col gap-10 pt-20" v-else>
        <div class="text-center text-xl md:text-2xl lg:text-3xl font-bold">POPULAR</div>
        <div class="px-[4%] xl:px-[8%] gap-10 lg:gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  lg:pt-20 content-center">
          <Suspense>
            <template #default>
              <animebase />
            </template>
            <template #fallback>
              <!-- <p class="text-xl">Loading..</p> -->
              <div class="absolute w-[90%]">
                <Skeleton />
              </div>
              
            </template>
          </Suspense>
            
        </div>
    </div> 
      

  </div>
</template>

<style scoped>
	img{
		object-fit: cover;
		border-radius: 16px;
	}

</style>