<script setup>
  import { RouterLink } from 'vue-router';
  import {ref} from 'vue';
  const overlay = ref(false)
</script>
<template>
    <header class="header bg-[#eff3ec] fixed w-full top-0 right-0  border border-b-black z-[9999] flex justify-between items-center py-3 px-[5%] overflow-x-hidden ">
        <div class="text-2xl">
          <h1 class="">TWB</h1>
        </div>
        <div class="md:flex gap-10 hidden ">
          <RouterLink to="/" class="flex gap-2">
              <i class="fa-solid fa-house pt-1"></i>
              <h2 class=" hover:text-gray-600 hover:underline hover:underline-offset-8 home">MY HOME</h2>
          </RouterLink>
          <RouterLink to="/anime" class="flex gap-2">
            <i class="fa-solid fa-tv pt-1"></i>
            <h2 class=" hover:text-gray-600 hover:underline hover:underline-offset-8">ANIME</h2>
          </RouterLink>
          <RouterLink to="/manga" class="flex gap-2">
            <i class="fa-solid fa-scroll pt-1"></i>
            <h2 class=" hover:text-gray-600 hover:underline hover:underline-offset-8">MANGA/MANHWA</h2>
          </RouterLink>
        </div>
        <button  @click="overlay = !overlay "  class=" flex flex-col pt-1 gap-2 md:hidden">
          <transition name="line1">
            <span class="line duration-500 w-[42px] h-[2px]"></span>
          </transition>
          <transition name="line2">
            <span class="line duration-500 w-[42px] h-[2px]"></span>
          </transition>
          <transition name="line3">
            <span class="line duration-500 w-[42px] h-[2px]"></span>
          </transition>
          <!-- <span class="line duration-500 w-[42px] h-[2px]"></span>
          <span class="line duration-500 w-[42px] h-[2px] "></span> -->
        </button>
        
    </header>
    <transition name="nav">
      <div v-if="overlay"  class="overlay-1 duration-500 fixed w-full h-full top-14 flex flex-col gap-4 z-[99999] text-black bg-gray-100 border border-black">
          <div class="flex flex-col gap-4 justify-center items-center pb-4">
              <div class="pt-2 flex">
                  <div class=" p-3 rounded-full text-2xl bg-[#8bacd4]">WR</div>
              </div>
              <!-- <div class="px-[10%] self-center">
                  <input id="input-one" class="border border-white p-2 rounded-2xl font-bold bg-[#b4cab436]" type="text" placeholder="Search..">
              </div> -->
          </div>
          <div class=" flex flex-col gap-8 text-lg">
              
              <RouterLink to="/" class="flex justify-between px-[2%]">
                <div class="flex gap-2">
                      <i class="fa-solid fa-house hover:text-gray-600 hover:underline hover:underline-offset-8 pt-1"></i>
                      <h2>MY HOME</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right"></i>
              </RouterLink>
              
              <RouterLink to="/anime" class="flex justify-between px-[2%]">
                <div class="flex gap-2">
                      <i class="fa-solid fa-tv hover:text-gray-600 hover:underline hover:underline-offset-8 pt-1"></i>
                      <h2>ANIME</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right"></i>
              </RouterLink>
              
              <RouterLink to="/manga" class="flex justify-between px-[2%]">
                <div class="flex gap-2">
                      <i class="fa-solid fa-scroll hover:text-gray-600 hover:underline hover:underline-offset-8 pt-1"></i>
                      <h2>MANGA/MANHWA</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right"></i>
              </RouterLink>
              <!-- <div class="flex justify-between px-[2%]">
                  <div class="flex gap-2">
                      <i class="fa-solid fa-book-open-reader hover:text-gray-600 hover:underline hover:underline-offset-8 pt-1"></i>
                      <h2>NOVEL</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right"></i>
              </div>

              <div class="flex justify-between px-[2%]">
                  <div class="flex gap-2">
                      <i class="fa-solid fa-people-roof hover:text-gray-600 hover:underline hover:underline-offset-8 pt-1"></i>
                      <h2>COMMUNITY</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div class="flex justify-center ">
                  <button class=" bg-[#acd1ac]  py-3 px-[30%] rounded-lg">Login</button>
              </div> -->
              

          </div>
          
          
      </div>
    </transition>

</template>
<style scoped>

/* .overlay-1{
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.9s ease-out , visibility 0s;
  display: hidden;
  width: 100%;
}
.overlay-1:active{
  transform: translateX(0%);
  opacity: 1;
  transition: transform 0.4s ease-out, visibility 0s;
  display: block;
} */

.nav-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.nav-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.nav-enter-active {
  transition: all transform 0.4s ease-out, visibility 2s;
}
.line1-enter-from {
  transform: translateX(0);
  width: 42px;
}
.line1-enter-to {
  transform: translateY(10px) rotate(-45deg);
  width: 39px;
}
.line1-enter-active {
  transition: transform 0.4s ease-out, visibility 0s;
 
}
/* .nav-open-btn .line:nth-child(1):hover {
  transform: translateY(10px) rotate(-45deg);
  width: 39px;
}
.nav-open-btn .line:nth-child(3):hover {
  transform: translateY(-10px) rotate(45deg);
  width: 39px;
  
}
.nav-open-btn .line:nth-child(2):hover {
  opacity: 0;
} */
</style>
<!-- .line1-enter-from {
  width: 42px;
}
.line1-enter-to {
  transform: translateY(10px) rotate(-45deg);
  width: 39px;
} -->