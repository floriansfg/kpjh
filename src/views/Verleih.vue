<template>
    <DefaultView titel="Bus & Zeltverleih">
        <div class="container">
            <div class="p1">Busverleih</div>
            <div class="p2">Zeltverleih</div>
        </div>
        <Busverleih/>
        <Zeltverleih/>
    </DefaultView>
</template>
<script>
    import DefaultView from '../components/DefaultView.vue'
    import Busverleih from '../components/Busverleih.vue'
    import Zeltverleih from '../components/Zeltverleih.vue'

    export default {
        components: {
            DefaultView, Busverleih, Zeltverleih
        }
    }
    
</script>
<style scoped>
    .container {
        margin: 20px;
       
    }
    .p1 {
        background-color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        display: inline-block;
        text-align: center;
        align-self: center;
        width: 49%;
        border-top-left-radius: 10px;
        background-color: rgb(200, 200, 200);
        opacity: 0.5;
        
    }
    .p2 {
        background-color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        display: inline-block;
        align-self: center;
        text-align: center;
        width: 49%;
        border-top-right-radius: 10px;
        
    }
</style>