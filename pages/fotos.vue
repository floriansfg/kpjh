<template>
    <DefaultView titel="Fotos">
		<Album v-if="albums" v-for="album in albums" :album="album" />
		<Login/>
    </DefaultView>
</template>
<script>

export default {
    async setup() {
        const query = gql`
			query {
  				albums: albumCollection(limit: 0) {
    				items {
      					title,
      					location {
        					lat,
        					lon
      					},
      					folderId
    				}
  				}
			}
        `
        const { data: { value: {albums: {items: albums} } }} = await useAsyncQuery(query)
        return {albums}
    },
	data() {
		return { images: []}
	},
    async created() {
        try {
            const response = await fetch("/api/listImages");
            this.images = await response.json()
        } catch (error) {
            //console.error(error);
        }
    },
};
</script>
<style scoped>
/*Test*/
</style>
