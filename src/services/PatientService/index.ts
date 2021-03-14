import { reactive } from 'vue';
import { PatientGdtModel } from '../../models/patient';
import {useElectron} from '../../renderer/use/electron';
const { requestPatientdata, receive } = useElectron();

let patientGdtModel = reactive<PatientGdtModel>({dateOfBirth: '', firstName: '', id: '', lastName: '', sex: ''});

const getPatientdata = () => {
  requestPatientdata();
  receive('recieve-patientdata', (data: PatientGdtModel) => {
    console.log('data:',data);
    patientGdtModel.id = data.id;
    patientGdtModel.firstName = data.firstName;
    patientGdtModel.lastName = data.lastName;
    patientGdtModel.dateOfBirth = data.dateOfBirth;
    patientGdtModel.sex = data.sex;
  });
};

const clearPatientData = () => {
  patientGdtModel = {dateOfBirth: '', firstName: '', id: '', lastName: '', sex: ''};
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function usePatientService() {
  return {
    patientGdtModel,
    getPatientdata,
    clearPatientData,
  };
}
