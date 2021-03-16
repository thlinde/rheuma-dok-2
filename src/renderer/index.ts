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
// import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/themes/fluent-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

new WaveUI(app, {
  // Some Wave UI options.
});

app.use(router);
app.use(PrimeVue, {locale: {
    startsWith: 'Starts with',
    contains: 'Contains',
    notContains: 'Not contains',
    endsWith: 'Ends with',
    equals: 'Equals',
    notEquals: 'Not equals',
    noFilter: 'No Filter',
    lt: 'Less than',
    lte: 'Less than or equal to',
    gt: 'Greater than',
    gte: 'Greater than or equal to',
    dateIs: 'Date is',
    dateIsNot: 'Date is not',
    dateBefore: 'Date is before',
    dateAfter: 'Date is after',
    clear: 'Löschen',
    apply: 'Anwenden',
    matchAll: 'Match All',
    matchAny: 'Match Any',
    addRule: 'Add Rule',
    removeRule: 'Remove Rule',
    accept: 'Ja',
    reject: 'Nein',
    choose: 'Auswählen',
    upload: 'Hochladen',
    cancel: 'Abbrechen',
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['Son', 'Mon', 'TDie', 'Mit', 'Don', 'Fri', 'Sam'],
    dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
    monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Heute',
    weekHeader: 'Wo',
    firstDayOfWeek: 1,
    dateFormat: 'dd.mm.yy',
    weak: 'Woche',
    medium: 'Medium',
    strong: 'Strong',
    passwordPrompt: 'Enter a password',
    emptyFilterMessage: 'No results found',
    emptyMessage: 'No available options',
  },
});
app.mount('#app');
