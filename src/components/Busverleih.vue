<template>
    <form class="form">
        <h4>Date Ranges</h4>
            <div class="flex flex-col items-center mb-6">
            <DatePicker v-model="range" is-range :attributes="this.attr" />
            </div>
    </form>
</template>
<script>

    import {Calendar,DatePicker} from 'v-calendar'

    export default {
        components: {Calendar,DatePicker},
        data() {
            return {
                showsmth:true,
                range: {
                    start: new Date(2022, 9, 6),
                    end: new Date(2022, 9, 23),
                },
                attr: [{
                    highlight: 'red',
                    contentStyle: {
                        color: 'white',
                    },
                    dates: [
                        {
                        start: new Date(2022, 9, 2),
                        end: new Date(2022, 9, 4),
                        }
                    ],
                }]
            }
        }    
    }
    
</script>
<style scoped>
   .form {
    background-color: white;
    height: 800px;
   }
</style>