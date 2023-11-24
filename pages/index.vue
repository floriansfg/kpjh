<template>
    <div>
        <head>
            <title>KPJH</title>
        </head>
        <svg class="svg">
            <clipPath
                id="wave"
                clipPathUnits="objectBoundingBox"
            >
            <path
                id="path272"
                d="M 1,0 H 0 V 1 0.999 0.953 C 0.07338835,0.962484 0.16696688,0.9876246 0.24601002,0.9905464 0.41720789,0.9968744 0.56553662,0.96840898 0.70699957,0.9527569 0.86558789,0.93520999 0.9115516,0.94172711 1,0.953 V 0"
            />
            </clipPath>
        </svg>
        <header>
            <Diashow
                v-for="(diashow, index) in diashows"
                :key="index"
                :images="diashow.images.items.map((image) => image.url)"
                :first-image-id="3"
                height="500px"
                :transition="800"
                repeat
            />
        </header>
        <section>
            <h4 class="text-center">Aktuelles</h4>
            <div class="timeline">
                <div
                    v-for="(event, index) in events"
                    :key="`event-${index}`"
                    class="event"
                >
                    <Event
                        v-if="event"
                        :event="event"
                    />
                </div>
            </div>
            <Downloads :downloads="downloads" />
            <svg
                class="wave"
                viewBox="0 0 1440 139"
                fill="var(--secondaryBg)"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M381.765 99.5C236.064 99.5 70.549 125.567 0 138.6V0H1440V114.522C1373.95 109.515 1255.77 138.6 1021.21 138.6C728.005 138.6 563.892 99.5 381.765 99.5Z"
                />
            </svg>
        </section>
        <AboutUs />
    </div>
</template>

<script>
import { gql } from 'graphql-tag'

export default {
    async setup() {
        const query = gql`
            query {
                events: eventsCollection(limit: 0, order: [date_ASC]) {
                    items {
                        title
                        icon {
                            url
                        }
                        dateDisplay
                        description {
                            json
                        }
                        additionalInfo {
                            json
                        }
                    }
                }
                diashow: homepageCollection(limit: 0) {
                    items {
                        images: diashowCollection(limit: 0) {
                            items {
                                url(
                                    transform: {
                                        format: JPG_PROGRESSIVE
                                        quality: 80
                                    }
                                )
                            }
                        }
                    }
                }
                downloads: downloadsCollection(limit: 0) {
                    items {
                        title
                        pdf {
                            url
                        }
                    }
                }
            }
        `

        let {
            data: {
                value: {
                    events: { items: events },
                    diashow: { items: diashows },
                    downloads: { items: downloads },
                },
            },
        } = await useAsyncQuery(query)
        //    const { data} = await useAsyncQuery(query2)

        diashows = diashows || []
        events = events || []
        downloads = downloads || []
        // const { data: { value: {images: {items: diashow}} }} = await useAsyncQuery(query2)
        return { events, diashows, downloads }
    },
}
</script>

<style scoped lang="scss">
header {
    width: 100%;
    background: url(../assets/header.svg);
    background-size: 100% 95%;
    background-position: top;
    background-repeat: no-repeat;
    margin-bottom: 50px;
    filter: drop-shadow(0px 0px 16px rgb(0 0 0 / 0.5));
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100px;
        z-index: 3;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.547) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        position: absolute;
    }
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
    padding-top: 3rem;
    height: 0;
    width: 0;
    position: absolute;
}

.timeline {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
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
