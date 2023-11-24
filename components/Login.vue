<template>
    <Transition>
        <Modal
            :show="showLogin"
            button-color="var(--primaryBg)"
            @close="showLogin = false"
        >
            <form
                class="loginForm"
                @submit.prevent="submit"
            >
                <svg
                    viewBox="0 0 34 41"
                    class="lockIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#304C5C"
                >
                    <path
                        d="M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z"
                    />
                </svg>
                <div class="form-group">
                    <select
                        v-model="selectedUserType"
                        class="form-select"
                    >
                        <option
                            v-for="(userType, index) in userTypes"
                            :key="index"
                            :value="userType.value"
                        >
                            {{ userType.text }}
                        </option>
                    </select>
                    <input
                        id="passwordInput"
                        v-model="password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                    />
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                    @click="submit()"
                >
                    Anmelden
                </button>
                <div class="info">
                    <svg
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.5 4.16439e-05C7.71516 4.16439e-05 5.04456 1.10634 3.07539 3.07542C1.1063 5.04451 0 7.71543 0 10.5C0 13.2846 1.1063 15.9554 3.07539 17.9246C5.04448 19.8937 7.7154 21 10.5 21C13.2846 21 15.9554 19.8937 17.9246 17.9246C19.8937 15.9555 21 13.2846 21 10.5C21 8.65693 20.5148 6.84622 19.5932 5.25001C18.6717 3.6538 17.3462 2.3283 15.75 1.40675C14.1538 0.485209 12.343 0 10.5 0L10.5 4.16439e-05ZM11.9001 15.8667C11.9001 16.3669 11.6332 16.829 11.2 17.0792C10.7668 17.3293 10.2332 17.3293 9.79996 17.0792C9.36683 16.829 9.09991 16.3669 9.09991 15.8667V9.80006C9.09991 9.29989 9.36684 8.83781 9.79996 8.58764C10.2332 8.33748 10.7668 8.33748 11.2 8.58764C11.6332 8.8378 11.9001 9.29989 11.9001 9.80006V15.8667ZM10.5 6.53339C10.1287 6.53339 9.77262 6.38593 9.51008 6.12323C9.24755 5.8607 9.09992 5.50456 9.09992 5.13331C9.09992 4.76205 9.24755 4.40593 9.51008 4.14339C9.77261 3.88086 10.1287 3.7334 10.5 3.7334C10.8713 3.7334 11.2274 3.88086 11.4899 4.14339C11.7525 4.40593 11.9001 4.76206 11.9001 5.13331C11.9001 5.50457 11.7525 5.86069 11.4899 6.12323C11.2274 6.38593 10.8713 6.53339 10.5 6.53339Z"
                            fill="#304C5C"
                        />
                    </svg>
                    <span
                        >Melde dich bei deinem Leiter um das Passwort zu
                        erhalten</span
                    >
                    <div></div>
                </div>
            </form>
        </Modal>
    </Transition>
</template>

<script>
import { USER_TYPES } from "../enums/enums.js"

export default {
    data() {
        return {
            selectedUserType: USER_TYPES.user,
            userTypes: [
                { text: 'Nutzer', value: USER_TYPES.user },
                { text: 'Gruppenleiter', value: USER_TYPES.groupLeader },
            ],
            password: '',
            showLogin: useState('showLogin'),
            loading: false,
        }
    },
    methods: {
        async submit() {
            await useFetch('/api/auth/login', {
                method: 'POST',
                body: {
                    userType: this.selectedUserType,
                    password: this.password,
                },
                onRequest: () => (this.loading = true),
                onResponse: ({ response }) => {
                    setTimeout(() => {
                        this.loading = false
                        if (response.ok) {
                            this.showLogin = false
                            useState('userType').value = this.selectedUserType
                            useState('loggedIn').value = true
                            this.password = ''
                        }
                    }, 500)
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.loginForm {
    padding: 35px 50px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    .lockIcon {
        width: 30px;
        margin: 30px;
    }
    .form-group {
        width: 100%;
    }
    .form-select {
        margin: 10px 0;
    }

    button {
        margin: 30px 0;
    }
}

.info {
    display: flex;
    align-items: center;
    svg {
        margin: 10px;
        width: 20px;
    }
    span {
        font-size: 10pt;
        width: 200px;
        color: #7e7e7e;
    }
}
</style>
