<template>
    <header></header>
    <div class="timeline">
        <div class="event">
            <img class="icon" src="../assets/img.svg"/>
            <div class="content">
                <b>12. Oktober</b>
                <ul>
                    <li>Fotos des Zeltlagers anguckensdfklsdlksdfljk</li>
                    <li>mit Popcorn</li>
                    <li>im Ö</li>
                </ul>
            </div>
        </div>
        <div class="event">
            <img class="icon" src="../assets/img.svg"/>
            <div class="content">
                Dia Nachmittag
            </div>
        </div>
        <div class="event">
            <img class="icon" src="../assets/img.svg"/>
            <div class="content">
                Dia Nachmittag
            </div>
        </div>
    </div>
</template>

<script>
    import DefaultView from '../components/DefaultView.vue';
    
    export default {
        components: {
            DefaultView
        }
    }
    
</script>

<style scoped>

    header {
        width: 100%;
        height: 500px;
        background: url(../assets/header.svg);
        background-size:100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
    .txt {
        margin: 160px;
        line-height: 2.8;
        text-indent: 10px;
        margin-top: 100px;
    }
    h3 {
        margin: 100px;
        margin-left: 180px;
    }

    .timeline {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }

    .event {
        display: flex;
        flex-direction: row;
        width: 80%;
        max-width: 600px;
        height: 200px;
        position: relative;
        overflow: hidden;
        padding: 15px;
        flex-wrap: wrap;
    }
    li {
        float: left;
        width: 100%;
        clear: both;
        overflow-wrap: break-word;
    }

    .icon {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: 30px;
    }

    .event:not(:last-child)::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 2px;
        left: 0;
        right: 0;
        margin: auto;
        top: 60px;
        background: gray;
        overflow: hidden;
    }

    .content {
        width: 40%;
    }

    .event:nth-of-type(2n-1) .content{
        margin-left: auto;
    }

    .event:nth-of-type(2n) .content {
        margin-right: auto;
    }
    

</style>