<template>
    <Navbar />
    <div class="header">
        {{titel}}
    </div>
    <slot></slot>

</template>

<script>
    import Navbar from './Navbar.vue';
    
    export default {
        components: {
            Navbar
        },
        props: [
            'titel'
        ]
    }
</script>
<style scoped>
    .header {
    background-color: #304C5C;
    text-align: center;
    margin: 0;
    color: white;
    font-size: 25pt;
    font-weight: 400;
    padding: 50px 0;
    }
</style>