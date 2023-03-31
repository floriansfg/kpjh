<template>
    <header></header>
    <div class="timeline">
        <div class="event" v-for="event in this.events.items">
            <img class="icon" :src="event.icon.url" />
            <div class="content">
                <b>{{ event.dateDisplay }}</b>
                <RichTextRenderer :document="event.description.json" />
            </div>
        </div>
    </div>
</template>

<script>
import DefaultView from '../components/DefaultView.vue';
import gql from 'graphql-tag'
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

export default {
    components: {
        DefaultView,
        RichTextRenderer
    },
    data() {
        return {
            events: {}
        }
    },
    apollo: {
        events: {
            query: gql`{
                events: eventsCollection(limit:0, order: [date_ASC]) {
                    items {
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
            }`,
            result(data, key) {
                console.log(this.events.items[0])
            }
        }
    }
}

</script>

<style scoped>

header {
    width: 100%;
    height: 500px;
    background: url(../assets/header.svg);
    background-size: 100% 100%;
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
    width: 40px;
    height: 40px;
}

.event:not(:last-child)::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    left: 0;
    right: 0;
    margin: auto;
    top: 80px;
    background: #d0d0d0;
    overflow: hidden;
}

.content {
    width: 40%;
}

.event:nth-of-type(2n-1) .content {
    margin-left: auto;
}

.event:nth-of-type(2n) .content {
    margin-right: auto;
}
</style>