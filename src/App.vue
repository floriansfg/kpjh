<template>
  <Navbar />
  <router-view v-slot="{ Component, route }">
    <!-- <transition :duration="1000" name="nested" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition> -->

    <transition name="fade">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
  <Footer/>
</template>

<script>

import 'v-calendar/dist/style.css';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {Navbar, Footer}
}
</script>

<style>
:root {
  --contentWidth: 1500px;
}

/* .nested-enter-active::after,
.nested-leave-active::after{
  transition: all 0.5s ease;
  content: '';
  position: absolute;
  width: 100vw;
  height: 0;
  top: 0;
  background-color: #1f4053;
  z-index: 200;
}


.nested-enter-from::after,
.nested-leave-to::after {
  height: 100vh;
} */

</style>