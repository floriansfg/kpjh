<template>
    <DefaultView titel="Gruppen">
    <head>
		<title>KPJH - Gruppen</title>
	</head>
        <div class="groups">
            <div class="group-grid">
                <Group v-for="group in groups" :gruppe="group" />
            </div>
        </div>
    </DefaultView>
</template>
<script>
// import Modal from "../components/Modal.vue"
import gql from 'graphql-tag'

export default {
    async setup() {
        const query = gql`
            query {
                groups: groupCollection(limit: 0) {
                    items {
                        name,
                        supervisor,
                        year,
                        images: imagesCollection(limit:0) {
                            items {
                                url(transform: {
									format: JPG_PROGRESSIVE,
									quality: 20
								})
                            }
                        }
                    }
                }
            }
        `
        const { data: { value: {groups: {items: groups} } }} = await useAsyncQuery(query)

        return {groups}
    }
}

</script>

<style scoped>
.groups {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
	width: 100%;
}

.group-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    width: 100%;
    gap: 50px;
    justify-items: center;
}
@media (max-width: 901px) {
    .groups {
        padding: 20px 10px;
    }
}
</style>