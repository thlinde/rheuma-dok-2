<template>
  <w-toolbar
    bg-color="grey-dark5"
    color="grey-light5"
    class="justify-center el"
  >
    <Button
      class="p-button-rounded p-mr-5"
      icon="pi pi-user"
      @click="getGdtPatient"
    />
    <h3>
      {{ headerPatient }}
    </h3>
    <div class="p-mx-5" />
    <h3>
      {{ headerId }}
    </h3>
    <div class="spacer" />
    <Calendar
      id="icon"
      v-model="sessionDate"
      :show-icon="true"
      class="p-filled calendar-el"
    />
  </w-toolbar>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { usePatientService } from '../../services/PatientService';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import { DateTime } from 'luxon';

export default defineComponent({
  name: 'Header',
  components: {
    Calendar, Button,
  },
  setup() {
    const { patientModel, getGdtPatient } = usePatientService();

    const headerPatient = computed(() => {
      return patientModel.id ? `${patientModel.firstName} ${patientModel.lastName} - ${patientModel.dateOfBirth}` : '';
    });
    const headerId = computed(() => {
      return patientModel.id ? `ID: ${patientModel.id}` : '';
    });

    let sessionDate = ref(DateTime.now().toLocaleString());

    return { headerId, headerPatient, getGdtPatient, sessionDate };
  },
});
</script>

<style scoped lang="scss">
.el {
  min-height: 60px;
}
.calendar-el {
  width: 9rem;
}
</style>
