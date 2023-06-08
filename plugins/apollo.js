export default defineNuxtPlugin((nuxtApp) => {
	// access cookie for auth
	nuxtApp.hook('apollo:auth', ({ client, token }) => {
		// `client` can be used to differentiate logic on a per client basis.
		// apply apollo client token
		token.value = useRuntimeConfig().contentfulToken
	})
  })