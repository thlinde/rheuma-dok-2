<template>
  <w-app>
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <app-navigation />
    <router-view />
  </w-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNavigation from '/@/components/AppNavigation.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppNavigation,
  },
});
</script>

<style>
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
