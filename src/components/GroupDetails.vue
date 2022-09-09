<template>
    <div class="pics">
        <img :src="this.groupData.images[0]"/>
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
        ]
    }
</script>
<style scoped>
    .pics {
        width: 100%;
        height: 280px;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
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
</style>