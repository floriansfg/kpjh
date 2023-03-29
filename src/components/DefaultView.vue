<template>
    
    <div class="header">
        <svg viewBox="0 0 1440 49" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M381.765 9.5C236.064 9.5 70.549 35.5665 0 48.5997V0H1440V24.5225C1373.95 19.515 1255.77 48.5997 1021.21 48.5997C728.005 48.5997 563.892 9.5 381.765 9.5Z" fill="var(--primaryBg)"/>
        </svg>
        {{titel}}
    </div>
    <div class="content">
        <slot></slot>
    </div>
    <Footer/>

</template>

<script>
    import Footer from '../components/Footer.vue'
    export default {
        props: [
            'titel'
        ],
        components: {Footer}
    }
</script>
<style scoped>
    .header {
        background-color: #304C5C;
        background-color: var(--primaryBg);
        text-align: center;
        margin: 0;
        color: white;
        font-size: 25pt;
        font-weight: 400;
        padding: 50px 0;
        position: relative;
        margin-bottom: 50px;
        height: 100px;
        transition: all 0.5s ease;
    }

    .header svg {
        position: absolute;
        left: 0;
        width: 100%;
        height: 20px;
        top: 99%;
    }

    .content {
        max-width: var(--contentWidth);
        margin: auto;
        margin-top: 80px;
    }
</style>