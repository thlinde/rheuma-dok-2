<template>
  <div class="column main-container">
    <div class="p-d-flex">
      <!--      <div class="p-col button-container">-->
      <!--        Tho-->
      <!--      </div>-->
      <ScrollPanel class="button-container">
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
  //height: calc(100% - 10px);
  //height: calc(100% + 15px);
  background-color: chartreuse;
}
.button-container {
  //height: 100%;
  height: 200px;
  //height: calc(100vh - 440px);
  width: 100%;
  background-color: #848484;
}
.textarea-container {
  height: 300px;
  background-color: #42b983;
}
</style>
