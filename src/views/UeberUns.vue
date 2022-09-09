<template>
    <DefaultView titel="Über Uns">
        <h3>Echte Frönde stonnt tesaame...</h3>
        <div class="txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ...unter diesem Motto steht die katholische Pfarrjugend Hüls seit 1978. <br>
            Spielerisch lernen unsere jungen Mitglieder durch verschiedene Aktivitäten die Bedeutung von Freundschaft, Zusammenhalt und Verantwortung. 
            <br>
            Neben unseren wöchentlichen Gruppenstunden organisiert die Leiterrunde über das Jahr verteilt verschiedene Aktivitäten wie eine große Radtour, einen gemeinsamen Ausflug und natürlich das große 
            Highlight: 
            <br>
            Unser zwei-wöchiges Zeltlager in den Sommerferien!
            <br>
            Jeden November können sich Kinder ab der vierten Klassen in die neu entstehenden Mädchen- bzw. Jungengruppen einteilen lassen oder jederzeit in eine gleichaltrige Gruppe eintreten. Die Gruppen treffen sich wöchentlich für 90 Minuten mit ihren Leitern im Heinrich-Joeppen-Haus, um zu spielen, kochen, backen, toben und viel zu lachen.
            Dies stärkt ganz besonders den Zusammenhalt und die Gruppendynamik, sodass nach ein paar Jahren aus der anfangs bunten Truppe meist ein enger Freundeskreis wird. Ebenso lernen die Kinder für andere Verantwortung zu übernehmen, indem sie zum Beispiel Gruppenstunden in Zweierteams vorbereiten oder Aufgaben spielerisch und als Team lösen müssen.
            <br>
            Über das Jahr verteilt organisiert die Leiterrunde verschiedene Ausflüge in Spaßbäder oder Freizeitparks, eine Nachtwanderung durch das Hülser Bruch oder eine Stadtrallye mit anschließendem Lagerfeuer. Highlight ist natürlich das große Zeltlager in der vierten und fünften Woche der Sommerferien. Die Favoriten im Programm sind sicher der Sing Sang am Lagerfeuer und die verschiedenen Stafetten, aber auch der gemeinsame Küchen- , Toiletten- oder Ordnungsdienst macht eine Menge Spaß.
            <br>
            Hast du Lust bekommen? Besuch uns doch mal oder fordere mehr Infos über unser Kontaktformular an.
        </div>
    </DefaultView>
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
</style>