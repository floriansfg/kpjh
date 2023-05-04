<template>
    <DefaultView titel="Fotos">
		<img v-for="image in images" referrerpolicy="no-referrer" :src="image.thumbnailLink"/>
    </DefaultView>
</template>
<script>

export default {
    data() {
        return {
            images: {},
        };
    },
    async created() {
        try {
            const response = await fetch("/api/listImages");
            this.images = await response.json()
        } catch (error) {
            console.error(error);
        }
    },
};
</script>
<style scoped>
.folders {
    max-width: var(--contentWidth);
    margin: 20px;
}
</style>
