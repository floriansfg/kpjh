<template>
    <div class="ModalWrapper">
        
        <div class="Modal">
            <svg viewBox="0 0 45 45" stroke="black" class="closeButton" xmlns="http://www.w3.org/2000/svg" @click="close">
                <path d="M11.3137 10.9602L33.5876 33.234" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.9602 33.234L33.2341 10.9602" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <slot>
                

            </slot>
        </div>
        <div class="Backdrop" @click="close">
            
        </div>

    </div>
</template>
<script>
    
    export default {
        emits: [
            "close"
        ],
        methods: {
            close() {
                this.$emit("close")
            }
        }
    }
    

</script>
<style scoped>
    .Backdrop {
        height: 100%;
        width: 100%;
        background-color: rgb(39, 42, 42);
        opacity: 0.6;
        position: fixed;

    }
    .ModalWrapper {
        top: 0;
        position: fixed;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        z-index: 10;
    }
    .Modal {
        width: 500px;
        align-self: center;
        background-color: white;
        z-index: 11;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
    }
    .closeButton {
        width: 25px;
        position: absolute;
        top: 5px;
        right: 5px;
        stroke: white;
        z-index:12;
    }
    .Modal::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25px;
        background-image: linear-gradient(rgba(35, 34, 34, 0.326), rgba(0, 0, 0, 0));
    } 
</style>