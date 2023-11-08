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
		<Diashow :firstImageId="clickedImage" 
			:images="images.map(image => image.thumbnailLink)" 
			@nextImage="nextImage" @prevImage="prevImage" width="80vw"/>
		<div v-if="!images[clickedImage].loaded" class="loader"></div>
		<svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="white" class="downloadButton" @click="downloadImage(clickedImage)" fill="currentColor" viewBox="-1 -1 19 19">
			<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
			<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
		</svg>
	</Modal>
</template>

<script>
import saveAs from 'file-saver'

export default {
    props: ['folderId', 'open'],
	data() {
		return {
			folders: [],
			images: [],
			openedChild: null,
			showImageModal: false,
			loading: false,
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
			if(index-1>=0) {
				this.loadImage(index-1)
				this.clickedImage--
			}
		},
		nextImage(index) {
			if(index+1<this.images.length) {
				this.loadImage(index+1)
				this.clickedImage++
			}
		},
		downloadImage(index) {
			saveAs(this.images[index].thumbnailLink, this.images[index].name);
		}
	}
};
</script>

<style lang="scss" scoped>

.accordion {
	width: 100%;
}
.accordion-button {
	color: black;
	background-color: white;
}
.accordion-button:not(.collapsed)::after {
	background-image: var(--bs-accordion-btn-icon);
}
.accordion-button:focus {
	box-shadow: none;
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

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	position: fixed;
	z-index: 50;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 

.downloadButton {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 20px;
	margin: auto;
	width: 25px;
	fill: white;
	filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 1));
}



</style>