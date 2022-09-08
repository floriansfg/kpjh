<template>
<div class="nav">
		<div class="wrapper">
			<div class="logo">
				<img src="../assets/logo.png"/>
				Katholische<br/>Pfarrjugend Hüls
			</div>
			<div class="links">
				<a href="ueberuns.html">Über Uns</a>
				<a href="index.html">Gruppen</a>
				<a href="fotos.html">Fotos</a>
				<a href="verleih.html">Bus & Zeltverleih</a>
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