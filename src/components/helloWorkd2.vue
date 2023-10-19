<script>
import {ref, onMounted,watch} from 'vue'
const myHome2 = ref([])
const addToHome2 = manga => {
	myHome2.value.push({
	id:manga.mal_id,
	title:manga.title,
	image:manga.images.jpg.image_url,
	total_episodes:manga.episodes,
	total_chapters:manga.chapters,
	description:manga.synopsis,
	watched_episodes:0
	})

	
localStorage.setItem('myHome2', JSON.stringify(myHome2.value))


onMounted(() => {
	myHome2.value = JSON.parse(localStorage.getItem('myHome2')) || []

})

return myHome2.value

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
	addToHome2
</script>