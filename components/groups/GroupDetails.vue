<template>
    <div class="pics">
        <Diashow :images="this.groupData.images.items"/>
    </div>
    <div class="name">{{this.groupData.name}}</div>
    <div class="info">
        <p>Jahrgang: {{this.groupData.year}}</p>
        <p>Gruppenstunde: Freitag 18:30-20:00</p>
        <p>Leiter:in: {{this.groupData.supervisor}}</p>
    </div>

</template>
<script>
    export default {
        props: [
            "groupData"
        ],
    }
</script>
<style scoped>
    
    .name {
        font-family: 'ylee MHIM';
        font-size: 37px;
        text-align: center;
        margin: 0;
        margin-top: 10px;
        position: relative;
    }
    .info {
        padding: 35px;
        padding-top: 0;
    }

    .info p {
        margin: 0;
        margin-top: 10px;
    }

    .pics::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25px;
        background-image: linear-gradient(rgba(35, 34, 34, 0.326), rgba(0, 0, 0, 0));
    } 
</style>