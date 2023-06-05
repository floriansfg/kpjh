<template>
    <div>
        <svg class="svg">
  <clipPath id="wave" clipPathUnits="objectBoundingBox"><path d="M1,0 H0 V1 L0,0.999 C0,0.999,0,1,0,1 C0.049,0.985,0.164,0.955,0.265,0.955 C0.321,0.955,0.374,0.964,0.434,0.974 L0.434,0.974 C0.509,0.986,0.595,1,0.709,1 C0.805,1,0.873,0.988,0.922,0.98 C0.956,0.974,0.981,0.97,1,0.972 L1,0"></path></clipPath>
</svg>
        <header>
			<Diashow  v-if="diashows" v-for="diashow in diashows" :images="diashow.images.items.map(image => image.url)" currentImg="3" height="500px" repeat/>
        </header>
        <h4 class="text-center">Aktuelles</h4>
        <div class="timeline">
        	<div class="event" v-if="events" v-for="event in events">
                <Event v-if="event" :event="event"/>
            </div>
        </div>
        <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5001 0C4.25643 0 0 4.17113 0 9.30938C0 12.2277 1.37244 15.0195 3.07909 17.2965C5.48048 20.5017 8.48178 22.6625 8.50813 22.6818C9.09883 23.1061 9.90117 23.1061 10.4919 22.6818C10.5183 22.6625 13.5197 20.5017 15.9209 17.2965C17.6276 15.0194 19 12.2276 19 9.30938C19 4.17099 14.7434 0 9.4999 0H9.5001ZM9.5001 5.47636C11.6588 5.47636 13.412 7.19422 13.412 9.30957C13.412 11.4251 11.6588 13.143 9.5001 13.143C7.34141 13.143 5.58816 11.4251 5.58816 9.30957C5.58816 7.19422 7.34141 5.47636 9.5001 5.47636Z" fill="#7AA1B7"/>
</svg>

		<Map/>
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
        // console.log(diashow.filter(image => image.images.items))
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
    filter: drop-shadow(0px 0px 16px rgb(0 0 0 / 0.5));
}

header :deep(img) {
    clip-path: url(#wave);

}

.svg {
    height: 0;
    width: 0;
    position: absolute;
}

.txt {
    margin: 160px;
    line-height: 2.8;
    text-indent: 10px;
    margin-top: 100px;
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