<template>
    <div class="nav" :class="{ fixed: fixedBar, open: openMenu }">
        <div class="wrapper">
            <NuxtLink to="/" class="logo">
                <img src="~/assets/logo.png" />
                Katholische<br />Pfarrjugend Hüls
            </NuxtLink>
            <div class="links">
                <NuxtLink to="/gruppen">Gruppen</NuxtLink>
                <NuxtLink to="/fotos">Fotos</NuxtLink>
				<a v-if="useState('loggedIn').value" @click="useLogout()" class="btn-primary">Abmelden</a>
				<a v-else @click="useState('showLogin').value=true" class="btn-primary">Anmelden</a>
            </div>
			<svg class="menuButton" @click="openMenu = !openMenu" viewBox="0 0 448 512" fill="white" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
			</svg>
        </div>
		<Login/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fixedBar: false,
			openMenu: false
        };
    },
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(e) {
            this.fixedBar = window.scrollY > 40;
        }
    },
};

</script>

<style lang="scss" scoped>
.nav {
    background-color: #304c5c00;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: fixed;
    height: 120px;
    transition: 0.4s all;
}

.menuButton {
	display: none;
}

@media only screen and (max-width: 730px) {
	.nav .links, .wrapper {
		flex-direction: column;
	}
	.nav {
		height: 80px;
		overflow: hidden;
	}

	.links {
        display: block;
		text-align: left;
		width: 100%;
		margin-top: 15px !important;
		a {
			padding: 10px 0px;
			font-size: 15px;
            margin: 0 !important;
		}
	}

	.menuButton {
		display: block;
		position: absolute;
		width: 25px;
		right: 30px;
		top: 35px;
		transition: all 0.2s;
	}

	.nav.open {
		height: 80px;
	}
}
.nav.fixed {
    background-color: var(--primaryBg);
    height: 90px;
}

.nav.open {
	background-color: var(--primaryBg);
	height: auto;
}
.nav .wrapper {
    display: flex;
    align-items: left;
    justify-content: space-between;
    width: 100%;
    max-width: var(--contentWidth);
    padding: 20px 50px;
}

.logo {
    display: flex;
    align-items: center;
    color: white;
    font-weight: 400;
    font-size: 13pt;
    text-decoration: none;
}
.logo img {
    margin-right: 15px;
    height: 40px;
}

.links { 
	display: flex;
    margin: auto 0;
	a, button {
		margin-left: 40px;
		color: white;
		text-decoration: none;
	}
}
</style>
