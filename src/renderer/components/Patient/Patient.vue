<template>
  <div
    class="p-flex-column p-ai-stretch vertical-container"
  >
    <div
      class="p-col box-header"
    >
      <h4>
        Patient
      </h4>
    </div>
    <div
      class="p-col box-stretched"
    >
      <div
        v-if="patientModel.id"
      >
        <div
          class="p-d-flex p-ai-center p-jc-between"
        >
          <div class="patient-name">
            {{ patientName }}
          </div>
          <div class="row">
            <Button
              icon="pi pi-ellipsis-h"
              class="p-button-rounded p-button-sm p-mr-2"
            />
            <Button
              icon="las la-database"
              class="p-button-rounded p-button-sm"
            />
          </div>
        </div>
        <w-divider class="my2" />
      </div>
      <div
        v-if="patientModel.id"
      >
        <div
          class="p-d-flex p-ai-center p-jc-between"
        >
          <div>
            <div>
              Diagnose(n):
            </div>
            <div>
              Rheumatoide Arthritis, Rheumatoide Arthritis,Rheumatoide Arthritis,Rheumatoide Arthritis,Rheumatoide Arthritis,Rheumatoide Arthritis,Rheumatoide Arthritis,Rheumatoide Arthritis,Rheumatoide Arthritis,Rheumatoide Arthritis,Rheumatoide Arthritis,
            </div>
          </div>
          <div>
            <Button
              icon="pi pi-ellipsis-h"
              class="p-button-rounded p-button-sm"
            />
          </div>
        </div>
        <w-divider class="my2" />
      </div>

      <!--      <div v-if="patientModel.id">-->
      <!--        {{ patientModel.id }}-->
      <!--      </div>-->
      <!--      <div v-if="patientModel.id">-->
      <!--        {{ patientModel.firstName }}-->
      <!--      </div>-->
      <!--      <div v-if="patientModel.id">-->
      <!--        {{ patientModel.lastName }}-->
      <!--      </div>-->
      <!--      <div v-if="patientModel.id">-->
      <!--        {{ patientModel.dateOfBirth }}-->
      <!--      </div>-->
      <!--      <div v-if="patientModel.id">-->
      <!--        {{ patientModel.sex }}-->
      <!--      </div>-->
    </div>
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
.box-header {
  background-color: var(--surface-d);
  border-bottom-color: var(--surface-500);
  border-bottom-style: solid;
  border-bottom-width: 0.1rem;
}

.box-stretched {
  height: 100%;
}

.vertical-container {
  margin: 0;
  height: 100%;
  background-color: var(--surface-0);
  border-style: solid;
  border-width: 0.1rem;
  border-color: var(--surface-500);
}

.patient-name {
  font-size: 1.1em;
}
</style>
