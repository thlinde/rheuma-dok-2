<template>
  <div class="p-card main-container">
    <div class="header-container p-d-flex p-ai-center">
      <h4 class="p-ml-2">
        Scores/Klassifikationen
      </h4>
    </div>
    <ScrollPanel class="scroll-container custombar">
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
      Thomas<br>
    </ScrollPanel>
    <div class="textarea-container">
      Linde
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ScrollPanel from 'primevue/scrollpanel';

export default defineComponent({
  name: 'Scores',
  components: {
    ScrollPanel,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
#root {
  height: 100%;
  width: 100%;
}
.main-container {
  height: 100%;
  width: 100%;
  border-style: solid;
  border-width: 0.1rem;
  border-color: var(--surface-500);
}
.header-container {
  height: 40px;
  width: 100%;
  background-color: var(--surface-d);
  border-bottom-color: var(--surface-500);
  border-bottom-style: solid;
  border-bottom-width: 0.1rem;
}
.scroll-container {
  width: 100%;
  //height: calc(100% - 340px);
  height: calc(100vh - 450px);
}
.textarea-container {
  width: 100%;
  padding: 0.5rem;
  border-top-color: var(--surface-500);
  border-top-style: solid;
  border-top-width: 0.1rem;
}
::v-deep(.p-scrollpanel) {
  &.custombar {
    .p-scrollpanel-wrapper {
      border-right: 9px solid var(--surface-b);
    }

    .p-scrollpanel-bar {
      background-color: var(--surface-400);
      border-radius: 4em 4em;
      opacity: 1;
      transition: background-color .2s;
    }
  }
}
</style>
