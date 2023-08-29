<template>
    <div class="accordion accordion-flush">
        <div class="accordion-item" v-for="(folder,index) in folders">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + folder.id" aria-expanded="false" @click="openedChild=index" >
                    {{ folder.name }}
                </button>
            </h2>
            <div :id="folder.id" class="accordion-collapse collapse" ref="item">
                <div v-if="folder.id" class="accordion-body">
                    <Folder :folderId="folder.id" :open="openedChild==index" />
                </div>
            </div>
        </div>
    </div>
    <div v-if="images" class="photoGrid">
        <img v-for="(image, index) in images" :key="image.name" :src="image.thumbnailLink" @click="openImage(index, image.id)" referrerpolicy="no-referrer" />
    </div>
	<Modal :show="showImageModal" @close="showImageModal=false">
		<Diashow :firstImageId="clickedImage" :images="images.map(image => image.thumbnailLink)" @nextImage="nextImage" @prevImage="prevImage" width="80vw"/>
	</Modal>
</template>

<script>
export default {
    props: ['folderId', 'open'],
	data() {
		return {
			folders: [],
			images: [],
			openedChild: null,
			showImageModal: false,
			clickedImage: 0
		}
	},
	async created() {
		if(this.open) this.loadFolder()
	},
	watch: { // It listens to the change in prop name
		open: async function () {
			this.loadFolder()
		},
  	},
	methods: {
		async loadFolder() {
			if (useState("loggedIn").value && (this.folders.length == 0 && this.images.length == 0)) {
				const {data: {value: {files}}} = await useFetch("/api/listImages?id=" + this.folderId)
				if(files) {
					this.folders = files.filter(file => file.mimeType === 'application/vnd.google-apps.folder');
					this.images = files.filter(file => file.mimeType !== 'application/vnd.google-apps.folder');
				}
			}
		},
		async openImage(index) {
			this.clickedImage = index
			this.showImageModal = true
			await this.loadImage(index)

			if(index+1<this.images.length) await this.loadImage(index+1)
			if(index-1>=0) await this.loadImage(index-1)
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
				const blob = new Blob([array], { type: "image/png" });
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
			if(index-1>=0) this.loadImage(index-1)
		},
		nextImage(index) {
			if(index+1<this.images.length) this.loadImage(index+1)
		},
	}
};
</script>

<style lang="scss" scoped>

.accordion {
	width: 100%;
}
.photoGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 100%;
    gap: 50px;
    justify-items: center;
	padding: 10px 5px;
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