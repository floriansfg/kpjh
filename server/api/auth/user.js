export default defineEventHandler(async (event) => {
    if (event.context.auth) {
        return event.context.auth
    }
})
