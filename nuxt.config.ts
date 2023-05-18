import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/apollo',
		'@nuxt/image-edge'
	],
	components: [
		{
		  path: '~/components', // will get any components nested in let's say /components/test too
		  pathPrefix: false,
		},
	],
	apollo: {
		clients: {
			default: {
				httpEndpoint: process.env.CONTENTFUL_API,
				tokenName: 'contentful-token',
				connectToDevTools: true,
			}
		},
	},
	image: {
		domains: ['images.ctfassets.net']
	},
	runtimeConfig: {
		// The private keys which are only available server-side
		contentfulToken: process.env.CONTENTFUL_TOKEN,
		googleToken: process.env.GOOGLE_KEY
	},
	css: [
		'@/assets/scss/styles.scss',
		'leaflet/dist/leaflet.css'
	],
	// devServer: {
	//   https: {
	//     key: 'localhost-key.pem',
	//     cert: 'localhost.pem'
	//   }
	// },
	app: {
		head: {
			viewport: 'width=device-width, initial-scale=1',
		},
	}
}) 