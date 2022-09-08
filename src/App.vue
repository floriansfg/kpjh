<template>
  <!-- <DefaultView titel="Gruppen">
    <Groups/>
  </DefaultView> -->
  <DefaultView titel="Über Uns">
    <!-- <Groups/> -->
    <UeberUns>

    </UeberUns>
  </DefaultView>
</template>

<script>
  import DefaultView from './components/DefaultView.vue';
  import Groups from './components/Group/Groups.vue'
  import UeberUns from './components/UeberUns.vue'

  export default {
      components: {
        DefaultView, Groups, UeberUns
      }
  }
</script>