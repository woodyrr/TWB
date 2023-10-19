<script setup>
import {ref, onMounted, computed} from 'vue'

import animeHome from './HelloWorld.vue'
    
    // const myHome = ref([])
    // const addToHome = anime => {
    //     myHome.value.push({
    //     id:anime.mal_id,
    //     title:anime.title,
    //     image:anime.images.jpg.image_url,
    //     total_episodes:anime.episodes,
    //     watched_episodes:0
    // })

    // localStorage.setItem('myHome', JSON.stringify(myHome.value))
    // return myHome

    // }
    
// const increaseWatch = anime => {
// anime.watched_episodes++
// localStorage.setItem('aniemHome', JSON.stringify(animeHome.value))
// }
// const decreaseWatch = anime => {
// anime.watched_episodes--
// localStorage.setItem('aniemHome', JSON.stringify(animeHome.value))
// }

    
    // export default addToHome
    // console.log(localStorage.myHome)
const myHome = ref([])
const watch1 = ref([])
const watch2 = ref([])
// myHome.value = JSON.parse(localStorage.getItem('myHome'))

const increaseWatch = anime => {
        anime.watched_episodes++
    localStorage.setItem('animeHome', JSON.stringify(animeHome.value))
    }

    const decreaseWatch = anime => {
        anime.watched_episodes--
        localStorage.setItem('animeHome', JSON.stringify(animeHome.value))
    }


    // onMounted(() => {
    myHome.value = JSON.parse(localStorage.getItem('myHome')) || []
    
    // })
</script>

<template>
    <!-- <div v-for="anime in addToHome.value" :key="anime.mal_id" :anime="anime" >
        <a :href="anime.url" target="_blank" class="flex flex-col gap-3 text-lg font-bold transition duration-500 ease-in-out hover:text-green-500 " >
			<img  :src="anime.images.jpg.large_image_url" :alt="anime.title +' poster'" class="h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] border border-black " />
			<h3>{{ anime.title }}</h3>
		</a>
        :anime=""
    </div> -->
    <div class="md:px-[8%] gap-10 lg:gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-20 ">
        <div  v-for="anime in myHome" :key="myHome.value" class="text-lg font-bold w-full">
            <!-- <a  target="_blank" class="" > -->
                <div class="flex gap-2  bg-gray-200 items-center  rounded-md justify-center mx-2 relative">
                    <img  :src="anime.image" :alt="anime.title +' poster'" class=" w-[150px] md:w-[250px] h-[230px] md:h-[250px] border flex border-black rounded-l-md" />
                    <div class="flex flex-col gap-4 px-1 ">
                        <h3 class="transition duration-500 ease-in-out hover:text-green-500  ">{{ anime.title }}</h3>
                        <p v-if="anime.description" :title="anime.description" class="text-sm">
                            {{ anime.description.slice(0,120) }}...
                        </p>
                        <div class="flex justify-around pt-4">
                            <button v-if="anime.watched_episodes > 0" @click="decreaseWatch(anime)" class="bg-[#eff3ec] px-3">-</button>
                            <h3>{{ anime.watched_episodes}} / {{ anime.total_episodes || anime.total_chapters }}</h3>
                            <button v-if="anime.total_episodes !== anime.watched_episodes" @click="increaseWatch(anime)" class="bg-[#eff3ec] px-3">+</button>
                        </div>
                        
                    </div>
			        <!-- <button class="bg-[#eff3ec] absolute bottom-0  right-[25%] p-2 rounded-xl ">
                            Remove
                    </button> -->
                    
                </div>
			    
                
                
                <div></div>
		    <!-- </a> -->
        </div>
        
    </div>
</template>