import { EmergencyContact } from "./EmergencyContact";

export class Patient {

  patientId:number;
  title: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  age: number;
  gender: string;
  race: string;
  ethnicity: string;
  languages: string;
  email: string;
  contactNo: string;
  address: string;
  emergencyContact:EmergencyContact;
  
}
