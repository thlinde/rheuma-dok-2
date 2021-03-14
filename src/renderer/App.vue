<template>
  <w-app>
    <header>
      <Header />
    </header>
    <w-flex grow>
      <aside>
        <SideNav />
      </aside>
      <main
        class="grow pa5 main"
      >
        <router-view />
      </main>
    </w-flex>
    <footer>
      <Footer />
    </footer>
  </w-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from '/@/components/Layout/Header.vue';
import Footer from '/@/components/Layout/Footer.vue';
import SideNav from '/@/components/Layout/SideNav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    SideNav,
  },
});
</script>

<style lang="scss">
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
}

.main {
  background-color: var(--surface-100);
}
</style>
