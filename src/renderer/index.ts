import {createApp} from 'vue';
import App from './App.vue';
import router from '/@/router';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';

import '@fontsource/roboto';
// import 'font-awesome/css/font-awesome.min.css';
// import '@mdi/font/css/materialdesignicons.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Menu from 'primevue/menu';

const app = createApp(App);

new WaveUI(app, {
  // Some Wave UI options.
});

app.use(router);
app.use(PrimeVue);
app.component('Menu', Menu);
app.mount('#app');
