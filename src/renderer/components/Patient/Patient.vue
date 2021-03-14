<template>
  <h2>
    Patient
  </h2>

  <div class="column">
    <div v-if="patientGdtModel.id">
      {{ patientGdtModel.id }}
    </div>
    <div v-if="patientGdtModel.id">
      {{ patientGdtModel.firstName }}
    </div>
    <div v-if="patientGdtModel.id">
      {{ patientGdtModel.lastName }}
    </div>
    <div v-if="patientGdtModel.id">
      {{ patientGdtModel.dateOfBirth }}
    </div>
    <div v-if="patientGdtModel.id">
      {{ patientGdtModel.sex }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePatientService } from '../../../services/PatientService';

export default defineComponent({
  name: 'Patient',
  setup() {
    const { patientGdtModel, getPatientdata } = usePatientService();

    return {patientGdtModel, getPatientdata};
  },
});
</script>

<style scoped lang="scss">
.button {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
