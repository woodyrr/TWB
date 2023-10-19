<script setup>
import Watching from '../components/Watching.vue'
import Completed from '../components/Completed.vue'
import addToHome from '../components/homeStorage.vue'
import {ref , onMounted} from 'vue'
import navigation from '../components/nav.vue'
import series from '../components/series.vue'

const currentTab = ref('Watching')

const tabs = {
    Watching,
  Completed
}
</script>
<template>
    <navigation />
    <div class="pt-20 flex flex-col gap-10 w-full">
        <series />
        <div class="text-center ">
            <button
            v-for="(_, tab) in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab"
            class="text-xl p-3 rounded-full"
            >
            {{ tab }}
            </button>
	        <component :is="tabs[currentTab]"></component>
        </div>
        
    </div>
    <!-- <div class="list-1 flex">
        <addToHome />
    </div> -->
</template>

<style>
.tab-button.active {
    background-color:#eff3ec ;
    font-weight: bold;
}
</style>