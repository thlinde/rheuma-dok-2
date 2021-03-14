<template>
  <w-toolbar
    bg-color="grey-dark5"
    color="grey-light5"
    class="justify-center el"
  >
    <Button
      class="p-button-rounded p-mr-2"
      icon="pi pi-user"
    />
    <h2>
      Title
    </h2>
    <div class="spacer" />
    <span class="p-ml-2">Item 1</span>
    <span class="p-ml-2">Item 2</span>
    <span class="p-ml-2">Item 3</span>
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
