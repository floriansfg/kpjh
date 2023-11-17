export default defineNuxtRouteMiddleware(async (to, from) => {
    const { data } = await useFetch('/api/auth/user')
    if (data.value && data.value.userType) {
        useState('loggedIn').value = true
        useState('userType').value = data.value.userType
    }
})
