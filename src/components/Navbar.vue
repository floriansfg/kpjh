<template>
<div class="nav">
		<div class="wrapper">
			<router-link :to="{name:'home'} " class="logo">
				<img src="../assets/logo.png"/>
				Katholische<br/>Pfarrjugend Hüls
			</router-link>
			<div class="links">
                <router-link :to="{name:'ueberuns'}">Über Uns</router-link>
                <router-link :to="{name: 'gruppen'}">Gruppen</router-link>
                <router-link :to="{name: 'fotos'}">Fotos</router-link>
                <router-link :to="{name: 'verleih'}">Bus & Zeltverleih</router-link>
			</div>
		</div>
	</div>
</template>
<style>
    .nav {
    background-color: #304C5C;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .nav .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1500px;
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

    .links a {
    margin-left: 40px;
    color: white;
    text-decoration: none;
    }
</style>