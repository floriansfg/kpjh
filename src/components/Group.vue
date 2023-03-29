<template>
    <Transition>
    <Modal v-if="this.showDetails" @close="this.showDetails=false" buttonColor="white">
        <GroupDetails :groupData="this.gruppe"/>
    </Modal>
</Transition>

    <div class="group" @click="this.showDetails=true">
        <img class="cover" :src="this.gruppe.images.items[0].url" />
        <p class="name">{{this.gruppe.name}}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
    </div>

</template>
<script>
    import Modal from "./Modal.vue"
    import GroupDetails from "./GroupDetails.vue"
import { onMounted } from "vue";

    export default {
        props: [
            'gruppe'
        ],
        components: {
            Modal, GroupDetails
        },
        data() {
            return {
                showDetails: false
            }
        }
    }
</script>

<style scoped>
    .group {
		background: white;
		width: 280px;
		padding: 25px;
		display: flex;
		align-items: center;
		flex-direction: column;
		box-shadow: 0px 0px 25px #304c5c3e;
		cursor: pointer;
		transition: all 0.2s;
        border-radius: 8px;
    }

    .cover {
			width: 100%;
			height: 260px;
			object-fit: cover;
            object-position: center;
		}
    .name {
        font-family: 'ylee MHIM';
        font-size: 50px;
        text-align: center;
        margin: 0;
        margin-top: 10px;
        position: relative;
    }
    svg {
        margin-top: 5px;
        height: 20px;
        fill: rgb(91, 91, 91);
        transition: all 0.2s;
    }

    .name::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 0px;
        height: 1px;
        background-color: black;
        transition: all 0.2s;
    }

    .group:hover .name::after {
        width: 100%;
    }
</style>