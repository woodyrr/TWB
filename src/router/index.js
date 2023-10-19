import {createRouter, createWebHistory} from 'vue-router'
import manga  from '../views/manga.vue'
import anime  from '../views/anime.vue'
import home  from '../views/home.vue'
import Watching  from '../components/Watching.vue'
import Completed  from '../components/Completed.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component:home
        },
        {
            path:"/anime",
            name:"anime",
            component:anime
        },
        {
            path:"/manga",
            name:"manga",
            component:manga
        },
        {
            path:"/Watching",
            name:"Watching",
            component:Watching
        },
        {
            path:"/Completed",
            name:"Completed",
            component:Completed
        }
    ]
})

export default router