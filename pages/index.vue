<template>
    <div>
        <svg class="svg">
            <clipPath id="wave" clipPathUnits="objectBoundingBox"><path d="M1,0 H0 V1 L0,0.999 C0,0.999,0,1,0,1 C0.049,0.985,0.164,0.955,0.265,0.955 C0.321,0.955,0.374,0.964,0.434,0.974 L0.434,0.974 C0.509,0.986,0.595,1,0.709,1 C0.805,1,0.873,0.988,0.922,0.98 C0.956,0.974,0.981,0.97,1,0.972 L1,0"></path></clipPath>
        </svg>
        <header>
			<Diashow  v-if="diashows" v-for="diashow in diashows" :images="diashow.images.items.map(image => image.url)" currentImg="3" height="500px" repeat/>
        </header>
        <section>
            <h4 class="text-center">Aktuelles</h4>
            <div class="timeline">
                <div class="event" v-if="events" v-for="event in events">
                    <Event v-if="event" :event="event"/>
                </div>
            </div>
            <Map/>
            <svg class="wave" viewBox="0 0 1440 139" fill="var(--secondaryBg)" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M381.765 99.5C236.064 99.5 70.549 125.567 0 138.6V0H1440V114.522C1373.95 109.515 1255.77 138.6 1021.21 138.6C728.005 138.6 563.892 99.5 381.765 99.5Z" />
            </svg>
        </section>
        <AboutUs />
    </div>    
</template>

<script>
import gql from 'graphql-tag'

export default {
    async setup() {
        const query = gql`
            query {
                events: eventsCollection(limit:0, order: [date_ASC]) {
                    items {
                        title,
                        icon {
                            url
                        },
                        dateDisplay,
                        description {
                            json
                        },
                        additionalInfo {
                            json
                        }
                    }
                },
                diashow: homepageCollection(limit:0) {
                    items {
                        images: diashowCollection(limit:0) {
                            items {
                                url(transform: {
									format: JPG_PROGRESSIVE,
									quality: 20
								})
                            }
                        }
                    }
                }
            }
        `
       
        const { data: { value: {events: {items: events}, diashow: {items: diashows}} }} = await useAsyncQuery(query)
    //    const { data} = await useAsyncQuery(query2)

        //const { data: { value: {images: {items: diashow}} }} = await useAsyncQuery(query2)
        return {events, diashows}
    }
}

</script>

<style scoped lang="scss">

header {
    width: 100%;
    background: url(../assets/header.svg);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 50px;
    filter:drop-shadow(0px 0px 16px rgb(0 0 0 / 0.5));
}

header :deep(img) {
    clip-path: url(#wave);

}

section {

    background: var(--secondaryBg);
    position: relative;
    svg {
        position: absolute;
        left: 0;
        width: 100%;
        height: 40px;
        top: 99%;
        z-index: -1;
        filter: drop-shadow(0px 0px 16px rgb(0 0 0 / 0.5));
    }
}

.svg {
    height: 0;
    width: 0;
    position: absolute;
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
    position: relative;
    overflow: hidden;
    padding: 0px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.event:not(:last-child)::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 60px;
    background: #373737;
    opacity: 0.2;
    overflow: hidden;
}

:deep(.event:nth-of-type(2n-1) .content) {
    margin-left: auto;
}

:deep(.event:nth-of-type(2n) .content) {
    margin-right: auto;
}
</style>