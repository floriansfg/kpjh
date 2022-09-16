<template>
    <DefaultView titel="Fotos">
        <div class="folders">
            <Folder v-for="_folder in this.folders" :folder="_folder"></Folder>
        </div>
    </DefaultView>
</template>
<script>
    import DefaultView from '../components/DefaultView.vue'
    import Folder from '../components/Folder.vue'

    export default {
        components: {
            DefaultView, Folder
        },
        data () {
            return {
                folders: [
                    {
                        place: "Fischbach", 
                        event: "Zeltlager", 
                        date: "1996"
                    },
                    {
                        place: "Oberthal", 
                        event: "Zeltlager", 
                        date: "1997"
                    },
                    {
                        place: "Diemelsee", 
                        event: "Zeltlager", 
                        date: "2010"
                    },
                    {
                        place: "Büllingen", 
                        event: "Zeltlager", 
                        date: "2022"
                    },
                    {
                        place: "Töpper See", 
                        event: "Kartoffelfeuer", 
                        date: "2018"
                    }
                ]
            }
        }
    }
    
</script>
<style scoped>
    .folders {
        max-width: var(--contentWidth);
        margin: 20px;
    }
</style>