<template>
    <div class="container-fluid footer">
        <div v-if="isLargeScreen" class="sponsors">
            <div v-if="sponsors" v-for="sponsor in sponsors">
                <img class="sponsor" :src="sponsor.logo.url"/>
            </div>
        </div>
        <ImageSlider v-else :items="sponsors">
            <template v-slot:item="{ item }">
                <nuxt-img :src="item.logo.url" class="slider-img"/>
            </template>
        </ImageSlider>
        <div class="row wrapper">
            <div class="col">
                <img src="~/assets/logo-big.png" />
            </div>
            <div class="col links">
                <NuxtLink to="/">Home </NuxtLink>
                <NuxtLink to="/ueberuns">Über Uns</NuxtLink>
                <NuxtLink to="/gruppen">Gruppen</NuxtLink>
                <NuxtLink to="/fotos">Fotos</NuxtLink>
            </div>
            <div class="col">
            <div class="col logo">
                <svg viewBox="0 0 19 23" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5001 0C4.25643 0 0 4.17113 0 9.30938C0 12.2277 1.37244 15.0195 3.07909 17.2965C5.48048 20.5017 8.48178 22.6625 8.50812 22.6818C9.09883 23.1061 9.90117 23.1061 10.4919 22.6818C10.5183 22.6625 13.5197 20.5017 15.9209 17.2965C17.6276 15.0194 19 12.2276 19 9.30938C19 4.17099 14.7434 0 9.4999 0H9.5001ZM9.5001 5.47636C11.6588 5.47636 13.412 7.19422 13.412 9.30957C13.412 11.4251 11.6588 13.143 9.5001 13.143C7.34141 13.143 5.58816 11.4251 5.58816 9.30957C5.58816 7.19422 7.34141 5.47636 9.5001 5.47636Z"/>
				</svg>
                <p>Herrenweg 6, 47839 Krefeld-Hüls</p>
            </div>
                <div class="col logo">
                    <svg viewBox="0 0 19 23" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5001 0C4.25643 0 0 4.17113 0 9.30938C0 12.2277 1.37244 15.0195 3.07909 17.2965C5.48048 20.5017 8.48178 22.6625 8.50812 22.6818C9.09883 23.1061 9.90117 23.1061 10.4919 22.6818C10.5183 22.6625 13.5197 20.5017 15.9209 17.2965C17.6276 15.0194 19 12.2276 19 9.30938C19 4.17099 14.7434 0 9.4999 0H9.5001ZM9.5001 5.47636C11.6588 5.47636 13.412 7.19422 13.412 9.30957C13.412 11.4251 11.6588 13.143 9.5001 13.143C7.34141 13.143 5.58816 11.4251 5.58816 9.30957C5.58816 7.19422 7.34141 5.47636 9.5001 5.47636Z"/>
                    </svg>
                    <p>info@kpjh.de</p>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
import gql from 'graphql-tag'

export default {
    async setup() {
        const isLargeScreen = false;
        console.log(isLargeScreen)
        const query = gql`
            query {
                sponsors: sponsorsCollection(limit: 0) {
                    items {
                        title,
                          logo {
                              url
                          }
                    }
                }
            }
        `
        const { data: { value: {sponsors: {items: sponsors} } }} = await useAsyncQuery(query)
        return {sponsors, isLargeScreen}
    },

    mounted(){

    }
}

</script>
  
  <style lang="scss" scoped>
  .footer {
    background-color: var(--primaryBg);
    z-index: 15;
    position: inherit;
  }

  .slider-img {
    margin-top: 2rem;
    width: 110px;
  }
  .footer .wrapper {
    display: flex;
  align-items: center;
  max-width: var(--contentWidth);
  padding: 20px 50px;
  }
  
  .logo {
  color: white;
  font-weight: 400;
  font-size: 13pt;
  text-decoration: none;
  display: flex;
  }
  .logo img {
  margin-right: 15px;
  height: 40px;
  }
  
  .links a {
    display: flex;
    flex-direction: column;
    color: white;
    text-decoration: none;
    padding: 1rem;
  }

  .sponsor {
      width: 120px;
      margin: 30px;
      padding-top: 2rem;
    }
    .sponsors {
        display: flex;
        flex-wrap: wrap;
        max-width: 900px;
        justify-content: center;
        margin: auto;
  }
  svg {
        height: 20px;
        width: 25px;
        padding-right: 10px;
    }
  </style>