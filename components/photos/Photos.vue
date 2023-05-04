<template>
	<div v-for="image in images" :key="image.name">
		<img :src="image.thumbnailLink" alt="">
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			images: [],
		};
	},
	async created() {
		try {
			const response = await fetch('/api/listImages');
			if (!response.ok) {
				throw new Error(`Failed to fetch images (${response.status} ${response.statusText})`);
			}
			this.images = await response.json();
		} catch (error) {
			console.error(error);
		}
	},
};
</script>
  