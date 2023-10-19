<template>
    <header class="header bg-[#eff3ec] fixed w-full top-0 right-0  border border-b-black z-[9999] flex justify-between items-center py-3 px-[3%] overflow-x-hidden">
        <div class="text-2xl">
          <h1 class="">FDB</h1>
        </div>
      
        <div class="text-black ">
            <input type="text" placeholder="search.." class="py-1 px-2 border-black rounded-xl border">
        </div>
        <div class="flex gap-5 justify-center items-center">
            <div class="hidden md:block text-2xl">
                <i class="fa-regular fa-bell"></i>
            </div>
            <div class="hidden md:block">
              <div class=" p-2 rounded-full text-lg bg-[#8bacd4]">WR</div>
            </div>
            <button ref="nav-open-button" class="nav-open-btn flex flex-col pt-1 gap-2 ">
                <span class="line duration-500 w-[42px] h-[2px]"></span>
                <span class="line duration-500 w-[42px] h-[2px]"></span>
                <span class="line duration-500 w-[42px] h-[2px] "></span>
            </button>
            
        </div>
        
    </header>
    <div class="overlay-1 duration-500 bg-gray-100 h-full fixed top-14 w-full flex flex-col gap-4">
      <div class="flex flex-col gap-4 justify-center items-center pb-4">
          <div class="pt-2 flex">
              <div class=" p-3 rounded-full text-lg bg-[#8bacd4]">WR</div>
          </div>
          <div class="px-[10%] self-center">
              <input id="input-one" class="border border-white p-2 rounded-2xl font-bold bg-[#b4cab436]" type="text" placeholder="Search..">
          </div>
      </div>
      <div class=" flex flex-col gap-5">
          <div class="flex justify-between px-[2%]">
              <div class="flex gap-2">
                  <i class="fa-solid fa-house hover:text-gray-600 hover:underline hover:underline-offset-8 pt-1"></i>
                  <h2>MY HOME</h2>
              </div>
              
          </div>
          <div class="flex justify-between px-[2%]">
              <div class="flex gap-2">
                  <i class="fa-solid fa-tv hover:text-gray-600 hover:underline hover:underline-offset-8 pt-1"></i>
                  <h2>ANIME</h2>
              </div>
              <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="flex justify-between px-[2%]">
              <div class="flex gap-2">
                  <i class="fa-solid fa-scroll hover:text-gray-600 hover:underline hover:underline-offset-8 pt-1"></i>
                  <h2>MANHWA</h2>
              </div>
              <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="flex justify-between px-[2%]">
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
          </div>
          

      </div>

      <div class="absolute bottom-20 right-3">
          <button class="bg-gray-300 p-2 rounded-full">HELP</button>
      </div>
  </div>
</template>
<style>
.overlay-1{
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.9s ease-out , visibility 0s;
  display: hidden;
  width: 100%;
}
.overlay-1.active{
  transform: translateX(0%);
  opacity: 1;
  transition: transform 0.4s ease-out, visibility 0s;
  display: block;
}
</style>