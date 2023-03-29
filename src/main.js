import { createApp, h } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'

// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const cache = new InMemoryCache()

const apolloProvider = createApolloProvider({
	defaultClient: new ApolloClient({
		cache,
		uri: 'https://graphql.contentful.com/content/v1/spaces/r7d67u2dckd4?access_token=koZNNknlTAmIxW9VueUCrUN00pRxWJwCBZ-b9Y5VwQ8',
	  }),
  })

const store = createStore({
state: {
		loading: false
},
mutations: {
	setLoading(state, val) {
		state.loading = val
	}
}
})

const app = createApp(App)
router.app = app

app.use(router)
app.use(apolloProvider)
app.use(store)

app.mount('#app')
