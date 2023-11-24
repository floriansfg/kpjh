export default defineNuxtPlugin((nuxtApp) => {
    // access cookie for auth
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nuxtApp.hook('apollo:auth', ({ client, token }) => {
        // `client` can be used to differentiate logic on a per client basis.
        // apply apollo client token
        token.value = useRuntimeConfig().contentfulToken
    })
})
