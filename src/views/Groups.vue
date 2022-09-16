<template>
    <DefaultView titel="Gruppen">
        <div class="groups">
            <div class="group-grid">
                <Group v-for="group in this.groups" :gruppe="group"/>
            </div>
        </div>
    </DefaultView>  
</template>
<script>
    import Group from "../components/Group.vue"
    import DefaultView from "../components/DefaultView.vue"
    // import Modal from "../components/Modal.vue"

    
    export default {

        components: {
            Group, DefaultView
        },
        data() {
            return {
                groups: [
                    {
                        name: "St.Werner",
                        supervisor: "Inge+Felix",
                        year: "1994/1995",
                        images: [
                            "https://kpjh.de/wp-content/uploads/2016/03/2015_KPJH_Zeltlager_Oberthal-3749-750x500.jpg",
                            "https://kpjh.de/wp-content/uploads/2016/03/IMG_1124-750x500.jpg"
                        ]
                    },
                    {
                        name: "St.Maus",
                        supervisor: "Inge+Felix",
                        year: "1994/1995",
                        images: [
                            "https://kpjh.de/wp-content/uploads/2016/03/2015_KPJH_Zeltlager_Oberthal-3749-750x500.jpg"
                        ]
                    },
                    {
                        name: "St.Werner",
                        supervisor: "Inge+Felix",
                        year: "1994/1995",
                        images: [
                            "https://kpjh.de/wp-content/uploads/2016/03/2015_KPJH_Zeltlager_Oberthal-3749-750x500.jpg"
                        ]
                    },{
                        name: "St.Werner",
                        supervisor: "Inge+Felix",
                        year: "1994/1995",
                        images: [
                            "https://kpjh.de/wp-content/uploads/2016/03/2015_KPJH_Zeltlager_Oberthal-3749-750x500.jpg"
                        ]
                    }
                ]
            }
        }
    }
        
</script>

<style scoped>
    
.groups {
	display:flex; align-items: center; justify-content: center; 
	margin: 50px 30px;
}
.group-grid {
	display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	width: 100%;
	gap: 50px;
	justify-items: center;
}
</style>