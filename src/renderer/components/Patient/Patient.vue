<template>
  <h2>
    Patient
  </h2>

  <div class="column">
    <Button
      label="Patienten-Daten"
      class="p-button-sm p-button-outlined button"
      @click="getPatientdata"
    />
    <div>
      {{ patientdata.id }}
    </div>
    <div>
      {{ patientdata.firstName }}
    </div>
    <div>
      {{ patientdata.lastName }}
    </div>
    <div>
      {{ patientdata.dateOfBirth }}
    </div>
    <div>
      {{ patientdata.sex }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import {PatientModel} from '../../../models/patient';
import {useElectron} from '../../use/electron';
const { requestPatientdata, receive } = useElectron();

export default defineComponent({
  name: 'Patient',
  setup() {
    const patientdata = reactive<PatientModel>({dateOfBirth: '', firstName: '', id: '', lastName: '', sex: ''});

    const getPatientdata = () => {
      requestPatientdata();
      receive('recieve-patientdata', (data: PatientModel) => {
        patientdata.id = data.id;
        patientdata.firstName = data.firstName;
        patientdata.lastName = data.lastName;
        patientdata.dateOfBirth = data.dateOfBirth;
        patientdata.sex = data.sex;
      });
    };

    return {patientdata, getPatientdata};
  },
});
</script>

<style scoped lang="scss">
.button {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
