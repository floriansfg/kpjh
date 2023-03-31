<template>
    <DefaultView titel="Gruppen">
        <div class="groups">
            <div class="group-grid">
                <Group v-for="group in this.groups.items" :gruppe="group" />
            </div>
        </div>
    </DefaultView>
</template>
<script>
import Group from "../components/Group.vue"
import DefaultView from "../components/DefaultView.vue"
// import Modal from "../components/Modal.vue"
import gql from 'graphql-tag'


export default {

    components: {
    Group,
    DefaultView
},
    data() {
        return {
            groups: {}
        }
    },
    apollo: {
        groups: {
            query: gql`{
                    groups: groupCollection(limit: 0) {
                        items {
                            name,
                            supervisor,
                            year,
                            images: imagesCollection(limit:0) {
                                items {
                                    url
                                }
                            }
                        }
                    }
                }`,
            result(data, key) {
                //console.log(this.groups.items)
            }
        }
    }
}

</script>

<style scoped>
.groups {
    display: flex;
    align-items: center;
    justify-content: center;
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