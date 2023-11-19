<template>
    <div class="pictures">
        <div class="d-flex">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="px-3 py-3"
            >
                <slot
                    name="item"
                    :item="item"
                ></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
    },
}
</script>

<style lang="scss" scoped>
.pictures {
    overflow-x: scroll;
    scrollbar-color: pink;
}

* {
    user-select: none;
}
</style>
