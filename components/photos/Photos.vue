<template>
	<div>
		{{useState('loggedIn')}}
	<div v-for="image in images" :key="image.name">
		<img referrerpolicy="no-referrer" :src="image.thumbnailLink" alt="">
	</div>
</div>
</template>
  
<script>
export default {
	data() {
		return {
			images: []
		}
	},
	async setup() {
		let images = []
		if(useState('loggedIn').value) {
			await useFetch('/api/listImages').then((response) => {
				images = response.data.value
			})
		}
		return {images}
	}
};
</script>
  