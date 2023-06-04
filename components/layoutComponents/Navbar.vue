<template>
    <div class="nav" :class="{ fixed: fixedBar }">
        <div class="wrapper">
            <NuxtLink to="/" class="logo">
                <img src="~/assets/logo.png" />
                Katholische<br />Pfarrjugend Hüls
            </NuxtLink>
            <div class="links">
                <NuxtLink to="/ueberuns">Über Uns</NuxtLink>
                <NuxtLink to="/gruppen">Gruppen</NuxtLink>
                <NuxtLink to="/fotos">Fotos</NuxtLink>
				<a v-if="useState('loggedIn').value" @click="useLogout()" class="btn-primary">Abmelden</a>
				<a v-else @click="useState('showLogin').value=true" class="btn-primary">Anmelden</a>
            </div>
        </div>
		<Login/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fixedBar: false,
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
.nav.fixed {
    background-color: var(--primaryBg);
    height: 90px;
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
	a, button {
		margin-left: 40px;
		color: white;
		text-decoration: none;
	}
}
</style>
