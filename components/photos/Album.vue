<template>
    <div class="wrapper">
		<div class="backButton">
			<svg viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.16478 22.2354C-0.388259 20.7286 -0.388259 18.2714 1.16478 16.7646L17.2934 1.11633C18.8275 -0.37211 21.3011 -0.37211 22.8352 1.11633C24.3883 2.62312 24.3883 5.08036 22.8352 6.58715L9.28584 19.5L22.8352 32.4128C24.3883 33.9196 24.3883 36.3769 22.8352 37.8837C21.3011 39.3721 18.8275 39.3721 17.2934 37.8837L1.16478 22.2354Z" fill="#3D5C6D" fill-opacity="0.4"/>
			</svg>
		</div>

        <h3 class="title">{{ album.title }}</h3>
		<div class="map">
		<Map v-if="album.location" :location="[album.location.lat, album.location.lon]"/>
	</div>
    </div>

    <!-- <Modal v-if="this.showModal" @close="this.showModal=false" buttonColor="black">
        Heyy
    </Modal> -->
</template>
<script>
export default {
    props: [
        "album"
    ]
}
</script>
<style lang="scss" scoped>

	.title {
        font-family: 'ylee MHIM';
        font-size: 50px;
        text-align: center;
        margin: 0;
		margin-bottom: 20px;
	}
    .wrapper {
		background: white;
		padding: 50px 70px;
		width: 80%;
		border-radius: 10px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 900px;
	}

	.map {
		width: 80%;
		height: 300px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);
		border-radius: 10px;
		overflow: hidden;
	}

	.backButton {
		position: absolute;
		left: 50px;
		top: 50px;
		padding: 10px;
		transition: all 0.2s;
		cursor: pointer;
		&:hover {
			transform: translateX(-8px);
		}
		svg {
			height: 25px;
		}
	}
    
</style>  
