<template>
	<Transition v-if="this.event.additionalInfo">
		<Modal v-if="this.showEvent" @close="this.showEvent=false" buttonColor="black">
			<div class="eventDetail">
				<img class="icon" :src="this.event.icon.url">
				<h4 class="text-center"><strong>{{ this.event.title }}</strong></h4>
				<RichTextRenderer :document="this.event.description.json" />
			</div>
		</Modal>
	</Transition>
	<img class="icon" :src="this.event.icon.url" />
	<div class="content">
		<b>{{ this.event.dateDisplay }}</b>
		<RichTextRenderer :document="this.event.description.json" />
		<a class="btn btn-link" v-if="this.event.additionalInfo" @click="this.showEvent=true">mehr...</a>
	</div>
</template>
<script>
import Modal from './Modal.vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

export default {
	props: [
		'event'
	],
	components: { Modal, RichTextRenderer },
	data() {
		return {
			showEvent: false
		}
	}
}

</script>

<style lang="scss" scoped>

:deep(ul) {
	margin: 0;
}

:deep(li) {
    float: left;
    width: 100%;
    clear: both;
    overflow-wrap: break-word;
	margin-top: 20px;
	p {
		margin: 0;
	}
}

.icon {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 40px;
    height: 40px;
}

.content {
    width: 40%;
}

.eventDetail {
	padding: 50px;
	display: flex;
	flex-direction: column;
	.icon {
		position: relative;
		margin-bottom: 40px;
	}
}


</style>