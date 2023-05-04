<template>
  <div>
    <Navbar/>
	<NuxtLoadingIndicator />
    <NuxtPage/>
  </div>
</template>

<script setup>
// get token from runtime config
const { contentfulToken } = useRuntimeConfig();

// init cookie for github token
const cookie = useCookie("contentful-token");

// set cookie value if not set
cookie.value = cookie.value || contentfulToken;
</script>


<style lang="scss">

body {
  background-color: var(--secondaryBg) !important;
}

.fade-enter-from, .fade-leave-to {
  .header {
    color: rgba(255, 255, 255, 0) !important;
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