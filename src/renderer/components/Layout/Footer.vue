<template>
  <w-toolbar
    bg-color="grey-dark5"
    color="grey-light5"
    class="justify-center el"
  >
    <div class="spacer" />
    <span class="ml2">Rheuma.Dokumentation / &copy; thlinde 2021</span>
  </w-toolbar>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {

  },
});
</script>

<style scoped lang="scss">
.el {
  min-height: 40px;
}
</style>
