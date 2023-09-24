<template>
    <div class="b-container">
        <div class="text-center">
            <h2>Das sind wir</h2>
            <h3>Echte Frönde stonnt tesaame...</h3>
        </div>
        <div class="grid-container">
            <div class="grid header">...unter diesem Motto steht die Katholische Pfarrjugend Hüls seit 1978. Spielerisch lernen unsere jungen Mitglieder durch verschiedene Aktivitäten die Bedeutung von Freundschaft, Zusammenhalt und Verantwortung. Neben unseren wöchentlichen Gruppenstunden organisiert die Leiterrunde über das Jahr verteilt verschiedene Aktivitäten.</div>
            <div class="grid text-1">Jeden November können sich Kinder ab der vierten Klassen in neu entstehende Mädchen- bzw. Jungengruppen einteilen lassen oder jederzeit in eine gleichaltrige Gruppe eintreten. Die Gruppen treffen sich wöchentlich für 90 Minuten mit ihren Leiter:innen im Heinrich-Joeppen-Haus, um zu spielen, kochen, backen, basteln, toben und viel zu lachen. Dies stärkt ganz besonders den Zusammenhalt, sodass aus der anfangs bunten Truppe meist ein enger Freundeskreis wird.</div>
            <div class="grid pic-1"><img class="grid-pic" src="~/assets/buellingen.jpg" /></div>
            <div class="grid text-2">Über das Jahr verteilt organisiert die Leiterrunde verschiedene Ausflüge ins Spaßbad oder den Freizeitpark sowie das Kartoffelfeuer mit einer Rallye oder Fahrradtour und Nachtwanderung mit anschließendem Lagerfeuer. Highlight des Jahres ist unser Zeltlager in der vierten und fünften Woche der Sommerferien. Die Favoriten im Programm sind sicher der Singsang am Lagerfeuer, die verschiedenen Stafetten und das Brennball-Turnier, aber auch der gemeinsame Küchen-, Toiletten- oder Ordnungsdienst macht eine Menge Spaß.</div>
            <div class="grid pic-2"><img class="grid-pic" src="~/assets/buellingen.jpg" /></div>
            <div class="grid pic-3"><img class="grid-pic" src="~/assets/buellingen.jpg" /></div>
            <div class="grid text-3">Seit 20XX sind wir als Ortsgruppe „KjG Pfarrjugend Hüls“ der Katholischen jungen Gemeinde (KjG) im Bistum Aachen aktiv. Dies ermöglicht uns spezielle Angebote für unsere Kindergruppen und Leiter:innen wie Gruppenstundenangebote, Erlebniswochenenden oder Fortbildungen anzubieten.</div>
            <div class="grid footer">Hast du Lust bekommen, ein Teil der KPJH zu werden? Dann besuch uns doch mal oder fordere mehr Infos über unser Kontaktformular an.</div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">

h2 {
    padding: 4rem;
    margin-top: 6rem;
}

h3 {
    font-family: 'ylee MHIM';
    font-size: 50px;
}

.text-center {
    align-self: center;
}

.grid-container {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    'header header header'
    'text text pic'
    'pic2 text2 text2'
    'text3 text3 pic3'
    'footer footer footer';
    margin: 20px;
    line-height: 2;
    margin: 10rem;
    margin-bottom: 80px;
    justify-content: space-between;
    align-items: center;
}

.grid {
    margin-bottom: 2rem;
}

.header {
    grid-area: header;
}

.text-1{
    grid-area: text;
}
.pic-1{
    grid-area: pic;
    transform: rotate(7deg);

}
.text-2{
    grid-area: text2;
}

.pic-2 {
    grid-area: pic2;
    transform: rotate(-7deg) translateX(-30px);
}

.text-3{
    grid-area: text3;
}

.pic-3 {
    grid-area: pic3;
    transform: rotate(7deg) translateX(10px);
}

.footer {
    grid-area: footer;
}

.grid-pic {
    align-self: center;
    width: 100%;
    height: auto;
}



</style>
