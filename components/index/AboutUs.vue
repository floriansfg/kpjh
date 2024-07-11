<template>
    <div class="b-container">
        <div class="text-center">
            <h3>Echte Frönde stonnt tesaame...</h3>
        </div>
        <div class="grid-container">
            <p class="grid header">
                .....unter diesem Motto steht die Katholische Pfarrjugend Hüls
                seit 1978. Spielerisch lernen unsere jungen Mitglieder durch
                verschiedene Aktivitäten die Bedeutung von Freundschaft,
                Zusammenhalt und Verantwortung. Neben unseren wöchentlichen
                Gruppenstunden organisiert die Leiterrunde über das Jahr
                verteilt verschiedene Aktivitäten.
            </p>
            <div class="grid pic-1">
                <img
                    class="grid-pic"
                    src="/images/buellingen.jpg"
                />
            </div>
            <p class="grid text-1">
                Jeden November können sich Kinder ab der vierten Klassen in neu
                entstehende Mädchen- bzw. Jungengruppen einteilen lassen oder
                jederzeit in eine gleichaltrige Gruppe eintreten. Die Gruppen
                treffen sich wöchentlich für 90 Minuten mit ihren Leiter:innen
                im Heinrich-Joeppen-Haus, um zu spielen, kochen, backen,
                basteln, toben und viel zu lachen. Dies stärkt ganz besonders
                den Zusammenhalt, sodass aus der anfangs bunten Truppe meist ein
                enger Freundeskreis wird.
            </p>
            <div class="grid pic-2">
                <img
                    class="grid-pic"
                    src="/images/Lagerwochenende-225.jpg"
                />
            </div>
            <p class="grid text-2">
                Über das Jahr verteilt organisiert die Leiterrunde verschiedene
                Ausflüge ins Spaßbad oder den Freizeitpark sowie das
                Kartoffelfeuer mit einer Rallye oder Fahrradtour und
                Nachtwanderung mit anschließendem Lagerfeuer. Highlight des
                Jahres ist unser Zeltlager in der vierten und fünften Woche der
                Sommerferien. Die Favoriten im Programm sind sicher der Singsang
                am Lagerfeuer, die verschiedenen Stafetten und das
                Brennball-Turnier, aber auch der gemeinsame Küchen-, Toiletten-
                oder Ordnungsdienst macht eine Menge Spaß.
            </p>
            <div class="grid pic-3">
                <img
                    class="grid-pic"
                    src="/images/Irrel2018_12_Party.jpg"
                />
            </div>
            <p class="grid text-3">
                Seit 2021 sind wir als Ortsgruppe „KjG Pfarrjugend Hüls“ der
                Katholischen jungen Gemeinde (KjG) im Bistum Aachen aktiv. Dies
                ermöglicht uns spezielle Angebote für unsere Kindergruppen und
                Leiter:innen wie Gruppenstundenangebote, Erlebniswochenenden
                oder Fortbildungen anzubieten.
            </p>
            <div class="grid pic-4">
                <img
                    class="grid-pic"
                    src="/images/Zeltlager2017_Feuer.jpg"
                />
            </div>
            <p class=" footer">
                Hast du Lust bekommen, ein Teil der KPJH zu werden? Dann besuch
                uns doch mal oder schreibe uns auf <a href="https://www.instagram.com/kpjhuels">Instagram</a>, <a href="https://www.facebook.com/kpjh.huels/"> Facebook</a> oder per <a href="mailto:info@kpjh.de">E-Mail</a>!
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    padding: 2rem;
    margin-top: 6rem;
}

h3 {
    font-family: 'ylee MHIM';
    font-size: 50px;
}
a {
    color: black;
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
    line-height: 2;
    margin: 4rem 5rem;
    justify-content: space-between;
    align-items: center;
    grid-gap: 1rem;
    margin-bottom: 2rem;
}

.grid {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
}

.header {
    grid-area: header;
}

.text-1 {
    grid-area: text;
}
.pic-1 {
    grid-area: pic;
    @media (min-width: 901px) {
        transform: rotate(5deg) translateX(10px);
    }
}
.text-2 {
    grid-area: text2;
}

.pic-2 {
    grid-area: pic2;
    @media (min-width: 901px) {
        transform: rotate(-5deg) translateX(-25px);
    }
}

.text-3 {
    grid-area: text3;
}

.pic-3 {
    grid-area: pic3;
    @media (min-width: 901px) {
        transform: rotate(5deg) translateX(10px);
    }
}

.pic-4 {
    @media (min-width: 901px) {
        display: none;
    }
}

.footer {
    grid-area: footer;
}

.grid-pic {
    align-self: center;
    width: 100%;
    height: auto;
    border-radius: 15px;
}

@media (max-width: 900px) {
    .grid-container {
        display: block;
        margin: 1rem 1rem;
        align-items: center;
        translate: none;
    }
    .grid-pic {
        width: 95%;
        @media (min-width: 901px) {
            width: 70%;
            transform: translateX(+10px);
        }
        border-radius: 15px;
    }
    .board {
        display: block;
        margin: 1rem;
    }
}
</style>
