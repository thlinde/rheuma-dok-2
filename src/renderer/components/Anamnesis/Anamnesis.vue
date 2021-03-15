<template>
  <div class="column main-container">
    <div class="p-col box-header">
      <h4>Anamnese</h4>
    </div>
    <div class="p-d-flex">
      <div class="p-col button-container">
        <ScrollPanel class="scroll-container">
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
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
          <!--          Thomas<br>-->
        </ScrollPanel>
      </div>
    </div>
    <div class="p-d-flex">
      <div class="p-col textarea-container">
        Linde
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ScrollPanel from 'primevue/scrollpanel';

export default defineComponent({
  name: 'Anamnese',
  components: {
    ScrollPanel,
  },
  setup() {

    return {
    };
  },
});
</script>

<style scoped lang="scss">
.button {
  margin-top: 0.5em;
}
.main-container {
  height: 100%;
  margin: 0;
  background-color: var(--surface-0);
  border-style: solid;
  border-width: 0.1rem;
  border-color: var(--surface-500);
}
.box-header {
  background-color: var(--surface-d);
  border-bottom-color: var(--surface-500);
  border-bottom-style: solid;
  border-bottom-width: 0.1rem;
}
.button-container {
  height: calc(100vh - 480px);
  width: 100%;
  //background-color: #848484;

  .scroll-container {
    height: calc(100vh - 500px);
    width: 100%;
  }
}
.textarea-container {
  height: 300px;
  //background-color: #42b983;
  border-top-color: var(--surface-500);
  border-top-style: solid;
  border-top-width: 0.1rem;
}
</style>
