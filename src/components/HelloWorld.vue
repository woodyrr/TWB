<script>
import {ref, onMounted,watch} from 'vue'

const myHome = ref([])


const addToHome = anime => {
	myHome.value.push({
	id:anime.mal_id,
	title:anime.title,
	image:anime.images.jpg.image_url,
	total_episodes:anime.episodes,
	total_chapters:anime.chapters,
	description:anime.synopsis,
	watched_episodes:0
	})

	
localStorage.setItem('myHome', JSON.stringify(myHome.value))


// onMounted(() => {
// 	animeHome.value = JSON.parse(localStorage.getItem('animeHome')) || []

// })

return myHome.value

}



// const increaseWatch = anime => {
// anime.watched_episodes++
// localStorage.setItem('aniemHome', JSON.stringify(animeHome.value))
// }
// const decreaseWatch = anime => {
// anime.watched_episodes--
// localStorage.setItem('aniemHome', JSON.stringify(animeHome.value))
// }


export default
	addToHome

</script>



