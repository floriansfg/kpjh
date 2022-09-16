<template>
    <DefaultView titel="Bus & Zeltverleih">
        <!-- <div class="container">
            <div class="p1">Busverleih</div>
            <div class="p2">Zeltverleih</div>
        </div>
        <Busverleih></Busverleih>
        <Zeltverleih/> -->
        <TabView title1="Busverleih" title2="Zeltverleih">
            <template v-slot:content1>
                <Busverleih />
            </template>
            <template v-slot:content2>
                <Zeltverleih />
            </template>
        </TabView>
    </DefaultView>
</template>
<script>
import DefaultView from '../components/DefaultView.vue'
import Busverleih from '../components/Busverleih.vue'
import Zeltverleih from '../components/Zeltverleih.vue'
import TabView from '../components/TabView.vue';

export default {
    components: {
        DefaultView,
        Busverleih,
        Zeltverleih,
        TabView
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


</style>