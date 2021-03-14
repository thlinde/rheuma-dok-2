<template>
  <w-toolbar
    bg-color="grey-dark5"
    color="grey-light5"
    class="justify-center el"
  >
    <Button
      class="p-button-rounded p-mr-5"
      icon="pi pi-user"
      @click="getPatientdata"
    />
    <h3>
      {{ headerPatient }}
    </h3>
    <div class="spacer" />
    <h3>
      {{ headerId }}
    </h3>
  </w-toolbar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePatientService } from '../../../services/PatientService';

export default defineComponent({
  name: 'Header',
  setup() {
    const { patientGdtModel, getPatientdata } = usePatientService();

    const headerPatient = computed(() => {
      return patientGdtModel.id ? `${patientGdtModel.firstName} ${patientGdtModel.lastName} - ${patientGdtModel.dateOfBirth}` : '';
    });
    const headerId = computed(() => {
      return patientGdtModel.id ? `ID: ${patientGdtModel.id}` : '';
    });

    return { headerId, headerPatient, getPatientdata };
  },
});
</script>

<style scoped lang="scss">
.el {
  min-height: 60px;
}
</style>
