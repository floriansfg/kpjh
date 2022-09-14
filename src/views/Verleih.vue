<template>
    <DefaultView titel="Bus & Zeltverleih">
        <div class="container">
            <div class="p1">Busverleih</div>
            <div class="p2">Zeltverleih</div>
        </div>
        <Busverleih></Busverleih>
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
        // data() {
        //     return {
        //         showsmth:true
        //     }
        // }
        // methods: {
        //     toggleVerleih() {

        //     }
        // }
    }
    
</script>
<style scoped>
    .container {
        margin: 20px;
        margin-bottom: 0;
        
    }
    .p1 {
        background-color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        display: inline-block;
        text-align: center;
        align-self: center;
        width: 50%;
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
        width: 50%;
        border-top-right-radius: 10px;
        margin-left: 0;
        box-shadow: 0 0 15px rgb(104 103 103 / 30%);
        /*TODO hier muss oben noch die ecke weggemacht werden-nur wie? */
        clip-path: inset(0px 0px 0px -18px);
        }
</style>