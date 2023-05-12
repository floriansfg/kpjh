<template>
    <div>
        <Modal v-if="showLogin" buttonColor="var(--primaryBg)" @close="showLogin = false">
            <div class="loginForm">
				<svg viewBox="0 0 34 41" xmlns="http://www.w3.org/2000/svg" fill="#304C5C">
					<path d="M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z"/>
				</svg>
                <div class="form-group">
					<select class="form-select" v-model="selectedUserType">
						<option v-for="userType in userTypes" :value="userType.value">
							{{ userType.text }}
						</option>
                	</select>
                    <input type="password" class="form-control" id="passwordInput" placeholder="Password"/>
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
				<button class="btn btn-primary" @click="useLogin()">Anmelden</button>
            </div>
			<div class="info">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-label="Warning:">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
				</svg>
				<div>
					An example alert with an icon
				</div>
			</div>
        </Modal>
    </div>
</template>

<script>
import { USER_TYPES } from "/enums/enums.js";

export default {
    data() {
        return {
            selectedUserType: USER_TYPES.user,
            userTypes: [
                { text: "Nutzer", value: USER_TYPES.user },
                { text: "Gruppenleiter", value: USER_TYPES.groupLeader },
            ],
            password: "",
            showLogin: useState("showLogin"),
            loading: false,
        };
    },
    methods: {
        async submit() {
            const { data } = await useFetch("/api/auth/login", {
                method: "POST",
                body: {
                    userType: this.selectedUserType,
                    password: this.password,
                },
                onRequest: () => (this.loading = true),
                onResponse: ({ response }) => {
                    setTimeout(() => {
                        this.loading = false;
                        if (response.ok) {
                            this.showLogin = false;
                            useState("userType").value = this.selectedUserType;
                            useState("loggedIn").value = true;
                        }
                    }, 500);
                },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.loginForm {
    padding: 40px;
    background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	svg {
		width: 30px;
		margin: 30px
	}
	.form-select {
		margin: 10px 0;
	}

	button {
		margin-top: 30px
	}
}
</style>
