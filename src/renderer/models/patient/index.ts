export interface PatientGdtModel {
  id: string;
  lastName: string,
  firstName: string,
  dateOfBirth: string,
  sex: string,
}

export interface PatientDbModel extends PatientGdtModel {
  title: string,
  diagnosis: string,
  timeOfFirstManifestation: string,
  timeOfFirstDiagnosis: string,
  laboratoryItems: string,
  manifestations: string,
  immunsuppressiveTherapy: string,
}
