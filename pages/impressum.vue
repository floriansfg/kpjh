<template>
    <DefaultView titel="Impressum">
        <div class="body">
            <h3>
                1.	Angaben gemäß § 5 TMG
            </h3>
            <p>Diese Webseite wird gemeinsam vom Förderverein der Pfarrjugend Hüls e.V. sowie der KjG Pfarrjugend Hüls (Teil des „Katholische junge Gemeinde (KjG) e.V.“) betrieben.</p>
            <b>Förderverein der Pfarrjugend Hüls e.V.</b>
            <div v-html="html" text="hiii"></div>
        </div>
    </DefaultView>
</template>
<style scoped lang="scss">
    .body {
        display: block;
        margin: 2rem;
    }
</style>
