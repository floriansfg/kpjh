<template>
    <div class="form">hi</div>
</template>
<script>
    export default {
        data() {
            return {
                showsmth:true
            }
        }    
    }
    
</script>
<style scoped>
   .form {
    background-color: white;
    margin: 20px;
    margin-top: 0;
    height: 800px;
    position: absolute;
   }
   .form::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0 15px rgb(104 103 103 / 30%);
    clip-path: inset(-18px 0px 0px 0px);
    z-index: 20;
   }
</style>