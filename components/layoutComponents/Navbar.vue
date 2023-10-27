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
			<svg class="menuButton" @click="openMenu = !openMenu" viewBox="0 0 28 18" fill="white" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z"/>
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
        },
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
		text-align: center;
		width: 100%;
		margin-top: 10px;
		a {
			padding: 20px;
			font-size: 20px;
		}
	}

	.menuButton {
		display: block;
		position: absolute;
		width: 30px;
		right: 20px;
		top: 35px;
		transition: all 0.2s;
	}

	.nav.open {
		height: 80px;
		.menuButton {
			transform: rotate(180deg);
		}
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
    align-items: center;
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
	a, button {
		margin-left: 40px;
		color: white;
		text-decoration: none;
	}
}
</style>
