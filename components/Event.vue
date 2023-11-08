<template>
	<Modal :show="showEvent" @close="showEvent=false" buttonColor="black">
		<div class="eventDetail">
			<img class="icon" :src="event.icon.url">
			<h4 class="text-center"><strong>{{ event.title }}</strong></h4>
			<RichTextRenderer :document="event.description.json" />
		</div>
	</Modal>
	<img class="icon" :src="event.icon.url" />
	<div class="content">
		<b>{{ event.dateDisplay }}</b>
		<div class="">{{ event.title }}</div>
		<RichTextRenderer :document="event.description.json" />
	</div>
</template>
<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

export default {
	props: [
		'event'
	],
	components: { RichTextRenderer },
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
	word-wrap: break-word;
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