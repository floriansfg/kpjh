export const useLogout = () => {
    // useCookie('token').value = null
    const authCookie = useCookie('token')
    authCookie.value = null
    useState('loggedIn').value = false
    useState('userType').value = null
    console.log('logged out')
}

export const useLogin = () => {
    useState('showLogin').value = true
}
