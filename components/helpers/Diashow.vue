<template>
    <div class="pictures">
		<div @click="prevImage" class="prevButton">
			<svg v-if="images.length>1" viewBox="0 0 28 18" fill="white" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z"/>
			</svg>
		</div>
        <nuxt-img v-if="images.length>0" v-for="(image,index) in images" :src="image" v-show="index==currentImg" :style="{ 'width': width , 'height': height }"/>
        <!-- <img v-else src="../assets/imageError.svg"/> -->
		<div @click="nextImage" class="nextButton">
			<svg v-if="images.length>1" viewBox="0 0 28 18" fill="white" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z"/>
			</svg>
		</div>
    </div>
</template>

<script>
    export default {
        props: {
			images: Array,
			firstImageId: {
				type: Number,
				default: 0
			},
			repeat: Boolean,
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '100%'
			},
		},
		data() {
			return {
				currentImg: this.firstImageId
			}
		},
		emits: [
            "prevImage",
			"nextImage"
        ],
        methods: {
            prevImage() {
                if(this.currentImg-1 <0) {
					if(this.repeat) this.currentImg = this.images.length-1
				} else {
					this.currentImg--
				}
				this.$emit("prevImage", this.currentImg)
            },
            nextImage() {
                if(this.currentImg+1>=this.images.length) {
					if(this.repeat) this.currentImg = 0
				} else {
					this.currentImg++
				}
				this.$emit("nextImage", this.currentImg)
            }
        }
    }
</script>

<style lang="scss" scoped>
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        user-select: none;
    }

    .pictures {
        position: relative;
    }

	* {
		user-select: none;
	}

    .prevButton, .nextButton {
        width: 25%;
		height: 100%;
		top: 0;
        position: absolute;
        margin: auto;
		cursor: pointer;
		z-index: 1;
		transition: all 0.5s;
		svg {
			top: 0;
			bottom: 0;
			margin: auto;
        	position: absolute;
			width: 20px;
			transition: all 0.2s;
			opacity: 0.8;
			filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 1));
		}
    }

    .prevButton {
		left: 0;
		svg {
			transform: rotate(90deg);
			left: 18px;
		}
		&:hover {
			box-shadow: inset 64px 0px 58px -50px rgba(0,0,0,0.37);
			svg {
				opacity: 1;
				left: 10px;
			}	
		}
    }

    .nextButton {
		right: 0;
		svg {
			transform: rotate(-90deg);
			right: 18px;
		}
		&:hover {
			box-shadow: inset -64px 0px 58px -50px rgba(0,0,0,0.37);
			svg {
				opacity: 1;
				right: 10px;
			}
		}
    }
</style>