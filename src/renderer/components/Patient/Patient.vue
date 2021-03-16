<template>
  <div class="p-card main-container">
    <div class="header-container p-d-flex p-ai-center">
      <h4 class="p-ml-2">
        Patientendaten
      </h4>
    </div>
    <ScrollPanel class="scroll-container custombar">
      <div class="p-col box-stretched p-pr-3">
        <div v-if="patientModel.id">
          <div class="p-d-flex p-ai-center p-jc-between">
            <div class="patient-name">
              {{ patientName }}
            </div>
            <div class="row">
              <Button
                icon="pi pi-ellipsis-h"
                class="p-button-rounded p-button-outlined p-button-sm p-mr-2"
              />
              <Button
                icon="las la-database"
                class="p-button-rounded p-button-outlined p-button-sm"
              />
            </div>
          </div>
          <w-divider class="my2" />
        </div>
        <div v-if="patientModel.id">
          <div class="p-d-flex p-ai-start p-jc-between">
            <div>
              <div class="diagnosis">
                Diagnose(n):
              </div>
              <div>
                Rheumatoide Arthritis,<br>Osteoarthrose,<br>chronische Schmerzstörung<br>
              </div>
            </div>
            <div>
              <Button
                icon="pi pi-ellipsis-h"
                class="p-button-rounded p-button-outlined p-button-sm"
              />
            </div>
          </div>
          <w-divider class="my2" />
        </div>
      </div>
    </ScrollPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { usePatientService } from '../../services/PatientService';
import Button from 'primevue/button';
import ScrollPanel from 'primevue/scrollpanel';

export default defineComponent({
  name: 'Patient',
  components: {
    Button, ScrollPanel,
  },
  setup() {
    const { patientModel } = usePatientService();

    const patientTitle = ref<string>('');
    // patientTitle.value = '';
    const patientName = computed(() => {
      if (patientModel.id && patientTitle.value) {
        return `${patientTitle.value} ${patientModel.firstName} ${patientModel.lastName}`;
      } else if(patientModel.id && !patientTitle.value) {
        return `${patientModel.firstName} ${patientModel.lastName}`;
      }
      return '';
    });

    return { patientModel, patientName };
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
  height: calc(100vh - 167px);
}
::v-deep(.p-scrollpanel) {
  &.custombar {
    .p-scrollpanel-wrapper {
      border-right: 9px solid var(--surface-b);
    }

    .p-scrollpanel-bar {
      background-color: var(--surface-d);
      border-radius: 0;
      opacity: 1;
      transition: background-color .2s;
    }
  }
}
.patient-name {
  font-size: 1.1em;
}
.diagnosis {
  font-weight: bolder;
}
</style>
