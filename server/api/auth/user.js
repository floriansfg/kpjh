export default defineEventHandler((event) => {
    if (event.context.auth) {
        return event.context.auth
    }
})
