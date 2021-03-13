<template>
  <h2>
    Anamnese
  </h2>
  <Button @click="readTextdata">
    Textdata
  </Button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useElectron} from '../../use/electron';
const { requestTextdata, receive, send } = useElectron();

export default defineComponent({
  name: 'Anamnese',
  setup() {
    const readTextdata = () => {
      requestTextdata();
      // send('request-textdata', null);
      // const recieveData = () => {
      //   return new Promise( (resolve, reject) => {
      //     receive('recieve-textdata', (data) => data);
      //   });
      // };
      // recieveData().then((data: string) => {
      //   console.log('recievedData:',data);
      //   textdata = data;
      // });
      let textdata = 'test';
      receive('recieve-textdata',async (data) => {
        textdata = await data;
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
</style>
