<template>
    <img v-if="imageUrl" :src="imageUrl" />
</template>

<script>
export default {
    data() {
        return {
            imageUrl: null,
        };
    },
    props: ["id"],
    async created() {
        try {
            const response = await fetch("/api/image?id=" + this.id);
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch images (${response.status} ${response.statusText})`
                );
            }
            const array = await response.arrayBuffer();
            const blob = new Blob([array], { type: "image/jpeg" });
            const url = URL.createObjectURL(blob);
            this.imageUrl = url;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        getImageUrl(image) {
            const blob = new Blob([new Uint8Array(image.data.data)], {
                type: image.mimeType,
            });
            console.log(blob.size);
            const url = URL.createObjectURL(blob);
            console.log(`Created URL for image '${image.name}': ${url}`);
            return url;
        },
        handleImageError(event) {
            console.error("Failed to load image:", event.target.src);
        },
    },
};
</script>
