<template>
	<div class="photos">
		<div class="photoGrid">
			<img v-if="images" v-for="(image, index) in images" :key="image.name" :src="image.thumbnailLink" @click="openImage(index, image.id)" referrerpolicy="no-referrer">
		</div>
		<Modal :show="showImageModal" @close="showImageModal=false">
			<Diashow :firstImageId="clickedImage" :images="images.map(image => image.thumbnailLink)" @nextImage="nextImage" @prevImage="prevImage" width="80vw"/>
		</Modal>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			images: [],
			showImageModal: false,
			clickedImage: 0
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
	},
	methods: {
		async openImage(index) {
			await this.loadImage(index)
			this.clickedImage = index
			this.showImageModal = true

			if(index<this.images.length) await this.loadImage(index+1)

			if(index>=0) await this.loadImage(index-1)
		},
		async getImageUrl(id) {
			try {
				const response = await fetch("/api/image?id=" + id);
				if (!response.ok) {
					throw new Error(
						`Failed to fetch images (${response.status} ${response.statusText})`
					);
				}
				const array = await response.arrayBuffer();
				const blob = new Blob([array], { type: "image/jpeg" });
				const url = URL.createObjectURL(blob);
				return url;
			} catch (error) {
				console.error(error);
			}
		},
		async loadImage(index) {
			let url = null
			if(!this.images[index].loaded) url = await this.getImageUrl(this.images[index].id);
			
			if(url) {
				this.images[index].thumbnailLink = url
				this.images[index].loaded = true
			}
		},
		prevImage(index) {
			if(index>=0) this.loadImage(index-1)
		},
		nextImage(index) {
			if(index<this.images.length) this.loadImage(index+1)
		}
	}
};
</script>

<style lang="scss" scoped>
.photos {
    display: flex;
    align-items: center;
    justify-content: center;
	padding: 40px 0;
	width: 100%;
}

.photoGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 100%;
    gap: 50px;
    justify-items: center;
	img {
		width: 230px;
		height: 160px;
		object-fit: cover;
		box-shadow: 0 0 26px rgba(0, 0, 0, 0.358);
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s;
		&:hover {
			transform: scale(1.02);    
		}
	}
}
</style>