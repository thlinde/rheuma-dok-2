import {createRouter, createWebHashHistory} from 'vue-router';
import Patient from '/@/components/Patient/Patient.vue';

const routes = [
  {path: '/', name: 'Patient', component: Patient},
  {path: '/anamnesis', name: 'Anamnesis', component: () => import('/@/components/Anamnesis/Anamnesis.vue')},
  {path: '/medical-examination', name: 'MedicalExamination', component: () => import('/@/components/MedicalExamination/MedicalExamination.vue')},
  {path: '/scores', name: 'Scores', component: () => import('/@/components/Scores/Scores.vue')},
  {path: '/laboratory', name: 'Laboratory', component: () => import('/@/components/Laboratory/Laboratory.vue')},
  {path: '/imaging', name: 'Imaging', component: () => import('/@/components/Imaging/Imaging.vue')},
  {path: '/epicrisis', name: 'Epicrisis', component: () => import('/@/components/Epicrisis/Epicrisis.vue')},
  {path: '/settings', name: 'Settings', component: () => import('/@/components/Settings/Settings.vue')},
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
