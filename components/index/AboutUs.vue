<template>
    <div class="b-container">

        <div class="text-center">
            <h2>Das sind wir</h2>
            <h3>Echte Frönde stonnt tesaame...</h3>
        </div>
        <div class="txt text-right">
            ...unter diesem Mo4o steht die Katholische Pfarrjugend Hüls seit 1978. Spielerisch lernen
            unsere jungen Mitglieder durch verschiedene AkFvitäten die Bedeutung von FreundschaI,
            Zusammenhalt und Verantwortung. Neben unseren wöchentlichen Gruppenstunden
            organisiert die Leiterrunde über das Jahr verteilt verschiedene AkFvitäten.
        </div>
        <img class="pic-left" src="~/assets/buellingen_all.jpg" />
        <div class="txt text-left">
            Jeden November können sich Kinder ab der vierten Klassen in neu entstehende Mädchenbzw. Jungengruppen einteilen lassen oder jederzeit in eine gleichaltrige Gruppe eintreten.
            Die Gruppen treffen sich wöchentlich für 90 Minuten mit ihren Leiter:innen im HeinrichJoeppen-Haus, um zu spielen, kochen, backen, basteln, toben und viel zu lachen. Dies stärkt
            ganz besonders den Zusammenhalt, sodass aus der anfangs bunten Truppe meist ein enger
            Freundeskreis wird.
        </div>
        <img class="pic-right" src="~/assets/buellingen_all.jpg" />
        <div class="txt text-right">
            Über das Jahr verteilt organisiert die Leiterrunde verschiedene Ausflüge ins Spaßbad oder
            den Freizeitpark sowie das Kartoffelfeuer mit einer Rallye oder Fahrradtour und
            Nachtwanderung mit anschließendem Lagerfeuer. Highlight des Jahres ist unser Zeltlager in
            der vierten und fünIen Woche der Sommerferien. Die Favoriten im Programm sind sicher
            der Singsang am Lagerfeuer, die verschiedenen Stafe4en und das Brennball-Turnier, aber
            auch der gemeinsame Küchen-, Toile4en- oder Ordnungsdienst macht eine Menge Spaß.
        </div>
        <img class="pic-left" src="~/assets/buellingen_all.jpg" />
        <div class="txt text-right">
            <div class="txt text-right">
            Über das Jahr verteilt organisiert die Leiterrunde verschiedene Ausflüge ins Spaßbad oder
            den Freizeitpark sowie das Kartoffelfeuer mit einer Rallye oder Fahrradtour und
            Nachtwanderung mit anschließendem Lagerfeuer. Highlight des Jahres ist unser Zeltlager in
            der vierten und fünIen Woche der Sommerferien. Die Favoriten im Programm sind sicher
            der Singsang am Lagerfeuer, die verschiedenen Stafe4en und das Brennball-Turnier, aber
            auch der gemeinsame Küchen-, Toile4en- oder Ordnungsdienst macht eine Menge Spaß.
        </div>
        <img class="pic-left" src="~/assets/buellingen_all.jpg" />
        </div>
        <img class="pic-left" src="~/assets/buellingen_all.jpg" />
        <div class="txt text-right">
            Hast du Lust bekommen, ein Teil der KPJH zu werden? Dann besuch uns doch mal oder
            fordere mehr Infos über unser Kontakiormular an.
        </div>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">

.b-container {
    display: absolute;
}

h3 {
    font-family: 'ylee MHIM';
    font-size: 50px;
}

h2 {
    padding: 4rem;
}

.text-center {
    align-self: center;
}
.txt {
    margin: 20px;
    line-height: 2.8;
    text-indent: 10px;
    margin-top: 100px;
    display: flex;
    position: inherit;
}

.text-right {
    text-align: right;
}

.text-left {
    align-self: left;
}

.pic-right {
    align-self: right;
    width: 350px;
    height: 100%;
    z-index: 0;
    transform: rotate(7deg);
    opacity: 0.6;

}

.pic-left {
    align-self: left;
    width: 350px;
    height: 100%;
    z-index: 0;
    transform: rotate(-7deg);
    opacity: 0.6;
    position: relative;
}

</style>
