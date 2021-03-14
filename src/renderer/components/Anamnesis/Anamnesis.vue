<template>
  <h2>
    Anamnese
  </h2>
  <Button
    label="Textdata"
    class="p-button-outlined p-button-sm button"
    @click="readTextdata"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useElectron} from '../../use/electron';
const { requestTextdata, receive } = useElectron();
import Button from 'primevue/button';

export default defineComponent({
  name: 'Anamnese',
  components: {
    Button,
  },
  setup() {
    const readTextdata = () => {
      requestTextdata();

      let textdata = 'test';
      receive('recieve-textdata', (data) => {
        textdata = data;
      });

      function logTextdata() {
        console.log('textdata:',textdata);
      }
      setTimeout(logTextdata, 10);
    };

    return {
      readTextdata,
    };
  },
});
</script>

<style scoped lang="scss">
.button {
  margin-top: 0.5em;
}
</style>
