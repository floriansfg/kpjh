<template>
	<div class="container">
		<div class="tabs">
			<span :class="{active: showIndex==1 }" @click="showIndex=1">{{title1}}</span>
			<span :class="{active: showIndex==2 }" @click="showIndex=2">{{title2}}</span>
		</div>
		<div class="content">
			<div v-show="showIndex==1"><slot name="content1"></slot></div>
			<div v-show="showIndex==2"><slot name="content2"></slot></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title1','title2'],
		data() {
			return {
				showIndex: 1
			}
		}
	}
</script>

<style scoped>
	.container {
        margin: 20px;
        margin-bottom: 0;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 15px rgb(104 103 103 / 30%);
    }

	.tabs span {
		background-color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        display: inline-block;
        text-align: center;
        align-self: center;
		width: 50%;
		cursor: pointer;
	}

	.tabs span:not(.active) {
		opacity: 0.8;
		background-color: rgb(213, 220, 223);
		box-shadow: inset -5px -5px 15px 20px rgba(0, 0, 0, 0.2);
		box-shadow: -15px -15px 15px -10px rgba(0, 0, 0, 0.1) inset;
	}

	.tabs span:last-of-type:not(.active) {
		box-shadow: 15px -15px 15px -10px rgba(0, 0, 0, 0.1) inset;
	}

	.content {
		width: 100%;
		height: 500px;
		background: white;
		padding: 30px;
	}
</style>