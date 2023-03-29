<template>
    <div class="pictures">
        <svg viewBox="0 0 28 18" fill="white" class="prevButton" xmlns="http://www.w3.org/2000/svg" @click="prevImage">
            <path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z"/>
        </svg>
        <img v-for="(image,index) in this.images" :src="image.url" v-show="index==this.currentImg"/>
        <svg viewBox="0 0 28 18" fill="white" class="nextButton" xmlns="http://www.w3.org/2000/svg" @click="nextImage">
            <path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z"/>
        </svg>
    </div>

</template>

<script>
    export default {
        props: ['images'],
        data() {
            return {
                currentImg: 0
            }
        },
        methods: {
            prevImage() {
                this.currentImg--;
                if(this.currentImg<0) this.currentImg = this.images.length-1
            },
            nextImage() {
                this.currentImg++;
                if(this.currentImg>=this.images.length) this.currentImg = 0
            }
        }
    }
</script>

<style scoped>

    .pics {
        width: 100%;
        height: 280px;
    }
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

    svg {
        width: 20px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        opacity: 0.8;
        transition: all 0.2s;
    }

    svg:hover {
        opacity: 1;
    }

    .prevButton {
        transform: rotate(90deg);
        left: 10px;
    }

    .nextButton {
        transform: rotate(-90deg);
        right: 10px;
    }
</style>