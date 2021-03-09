import { createApp } from 'vue';
import App from './App.vue';
import router from '/@/router';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import '@fontsource/roboto';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';

const app = createApp(App);

new WaveUI(app, {});

app
  .use(router)
  .use(PrimeVue)
  .mount('#app');
