export const useLogout = () => {
	useCookie('token').value = null
	useState('loggedIn').value = false
	useState('userType').value = null
}

export const useLogin = () => {
	useState('showLogin').value = true
}