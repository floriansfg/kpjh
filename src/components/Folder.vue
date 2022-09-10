<template>
    <div class="container">
        <div class="place">
            {{this.folder.place}}
        </div>
        <div class="event">
            {{this.folder.event}}
        </div> 
        <div class="date">
            {{this.folder.date}}
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            "folder"
        ]
    }
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        justify-content: space-between;
        background-color: white;
        /* box-shadow: 0px 0px 5px #5c30303e; */
        padding: 15px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        border-radius: 11px;
        max-width: 1500px;
        width: auto;
    }
    .container:hover {
    box-shadow: 0px 0px 10px #0000003e;
    transition: all 0.5s;
    }
    
</style>  
