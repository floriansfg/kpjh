export default defineNuxtRouteMiddleware((to, from) => {
    const transition = {
        name: to.path === '/' || from.path === '/' ? 'fullfade' : 'fade',
        mode: 'out-in',
    }

    from.meta.pageTransition = transition
    to.meta.pageTransition = transition
})
