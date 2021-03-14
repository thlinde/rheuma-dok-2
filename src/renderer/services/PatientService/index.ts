import { reactive } from 'vue';
import { PatientDbModel } from '../../models/patient';
import { useElectron } from '../../use/electron';
const { requestGdtPatient, receive } = useElectron();

// let patientGdtModel = reactive<PatientGdtModel>({dateOfBirth: '', firstName: '', id: '', lastName: '', sex: ''});
let patientModel = reactive<PatientDbModel>({
  dateOfBirth: '',
  diagnosis: '',
  firstName: '',
  id: '',
  immunsuppressiveTherapy: '',
  laboratoryItems: '',
  lastName: '',
  manifestations: '',
  sex: '',
  timeOfFirstDiagnosis: '',
  timeOfFirstManifestation: '',
  title: '',
});

const getGdtPatient = () => {
  requestGdtPatient();
  receive('recieve-gdt-patient', (data: PatientDbModel) => {
    patientModel.id = data.id;
    patientModel.firstName = data.firstName;
    patientModel.lastName = data.lastName;
    patientModel.dateOfBirth = data.dateOfBirth;
    patientModel.sex = data.sex;
  });
};

const clearPatient = () => {
  patientModel = {
    dateOfBirth: '',
    diagnosis: '',
    firstName: '',
    id: '',
    immunsuppressiveTherapy: '',
    laboratoryItems: '',
    lastName: '',
    manifestations: '',
    sex: '',
    timeOfFirstDiagnosis: '',
    timeOfFirstManifestation: '',
    title: '',
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function usePatientService() {
  return {
    patientModel,
    getGdtPatient,
    clearPatient,
  };
}
