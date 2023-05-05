<template>
    <div>
        <header></header>
        <h4 class="text-center">Aktuelles</h4>
        <div class="timeline">
        	<div class="event" v-if="events" v-for="event in events">
                <Event v-if="event" :event="event"/>
            </div>
        </div>
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
                }
            }
        `
        const { data: { value: {events: {items: events} } }} = await useAsyncQuery(query)

        return {events}
    }
}

</script>

<style scoped lang="scss">

header {
    width: 100%;
    height: 500px;
    background: url(../assets/header.svg);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 50px;
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