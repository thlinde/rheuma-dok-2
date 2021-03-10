<template>
  <w-toolbar
    bg-color="grey-dark5"
    color="grey-light5"
    class="justify-center el"
  >
    <w-button
      class="mr3"
      bg-color="primary-light3"
      color="grey-dark5"
      icon="pi pi-user"
      lg
    />
    <div class="title2">
      Title
    </div>
    <div class="spacer" />
    <span class="ml2">Item 1</span>
    <span class="ml2">Item 2</span>
    <span class="ml2">Item 3</span>
  </w-toolbar>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {

  },
});
</script>

<style scoped lang="scss">
.el {
  min-height: 60px;
}
</style>
