<template>
  <Navbar />
  <router-view v-slot="{ Component, route }">

    <transition :name="route.meta.transition" mode="out-in">
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

<style lang="scss">
:root {
  --contentWidth: 1500px;
}

.fade-enter-from .view, .fade-leave-to .view {
  .header {
    color: rgba(255, 255, 255, 0);
  }
  .content {
    opacity: 0;
  }
}

.fade-enter-active, .fade-enter-active * ,
.fade-leave-active, .fade-leave-active * {
  transition: all .5s;
} 


.fullfade-enter-active, .fullfade-leave-active, .fullfade-enter-active::after, .fullfade-leave-active::after {
  transition: all .5s;
}

.fullfade-enter-active::after, .fullfade-leave-active::after {
  content: '';
  position: fixed;
  z-index: 29;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--primaryBg);
  opacity: 0;
}

.fullfade-enter-from::after, .fullfade-leave-to::after {
  opacity: 1;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>