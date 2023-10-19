<script setup>
    import {ref, onMounted} from 'vue'
    import { RouterLink } from 'vue-router';
    import addToHome from './HelloWorld.vue';
    const baseUrl = "https://api.jikan.moe/v4/anime";
    const baseUrl2 = "https://api.jikan.moe/v4/top/manga";
    const baseUrl3 = "https://api.jikan.moe/v4/recommendations/manga"
    const animelist = ref([]);
    animelist.value = await fetch(`${baseUrl2}`)
    .then(res => res.json())
    .then(data => data.data);
// localStorage.removeItem(animeHome);

const newnote = ref([])
    const toasts = ref(false)
    const newbro = ref([])
    let lastarr = newbro.value[newnote.value.length - 1]
    

const addTotost = note => {
newnote.value.push({
        Series:note.title
})

	
localStorage.setItem('newnote', JSON.stringify(newnote.value))


// onMounted(() => {
	newnote.value = JSON.parse(localStorage.getItem('newnote')) || []
//}


return newnote.value,newbro
}

</script>

<template>
    <div v-for="anime in animelist" :key="anime.mal_id" :anime="anime" >
        <!-- bg-[#8bacd4] p-4 h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] -->
        <a  target="_blank" class="flex  gap-3 text-lg font-bold w-full items-center bg-gray-200 rounded-lg drop-shadow-lg"  >
            <!-- <div  class="transition duration-500 ease-in-out hover:text-green-500 relative "> -->
                <img :src="anime.images.jpg.large_image_url" :alt="anime.title +' poster'" class="h-[200px] md:h-[200px] lg:h-[250px] xl:h-[300px] w-[200px] md:w-[250px] lg:w-[200px]  border border-black rounded-l-lg" />
                <!-- <button @click.prevent="addToHome(anime)" class="bg-red-200 p-4 absolute w-full top-0  opacity-0  transition duration-300 ease-in-out hover:opacity-100 ">add</button> -->
            <!-- </div> -->
            <div class="space-y-3 text-center justify-center">
                <h3 class="text-sm md:text-base lg:text-xl">{{ anime.title }}</h3>
                <button  @click.prevent="addToHome(anime), toasts = true,addTotost(anime) " class="bg-red-200 p-2  transition duration-300 ease-in-out hover:opacity-100 text-sm md:text-base rounded-lg">add to home</button>
                <!-- <button @click="usetoast">yoo</button> -->
                
            </div>
            
		</a>

    </div>
    <div  v-if="toasts" class="w-full flex justify-center  ">
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
                <!-- w-6 h-6  -->
            </section>
    </div>
</template>
<style scoped>
	img{
		object-fit: cover;
		border-radius: 16px;
	}

</style>