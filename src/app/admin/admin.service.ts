
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Patient } from './model/patient.model';
import { Staff } from './model/Staff.model';
import { User } from './model/user.model';



@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  allPatients: Patient[] = [];
  allUsers: User[];
  private baseurl: string;
  response: any;
  constructor(private http: HttpClient) {
    this.baseurl = 'http://localhost:8085/admin/';
  }

  getAllPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseurl}patient-list`);
  }

  getAllUsers(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.baseurl}user-list`);
  }

  editPatientStatus(allPatient: Patient[]) {
    return this.http.put<Patient>(
      `${this.baseurl}patient/editstatus`,
        allPatient
    );
  }
  editEmployeeStatus(allEmployee : Staff[]) {
    return this.http.put<Staff>(
      `${this.baseurl}/employee/editstatus/`,allEmployee
    );
  }

  getOnePatient(patient_id: number) {
    return this.http.get<User>(this.baseurl + 'patient/' + patient_id);
  }
  getOneUser(staffId: number) {
    return this.http.get<User>(this.baseurl + 'user/' + staffId);
  }
  getPatientCount(){
    return this.http.get<Response>(this.baseurl+'patients/patientcount');
    
  }
  getEmployeeCount(){
    return this.http.get<Number>(this.baseurl+'user/usercount');
    
  }
}
