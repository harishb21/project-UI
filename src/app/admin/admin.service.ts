import { User } from './../model/user.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  allPatients: User[] = [];
  allUsers: User[];
  private baseurl: string;
  response: any;
  constructor(private http: HttpClient) {
    this.baseurl = 'http://localhost:8085/admin/';
  }

  getAllPatient(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseurl}patient-list`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseurl}user-list`);
  }

  editPatientStatus(allPatient: User[]) {
    return this.http.put<User>(
      `${this.baseurl}patient/editstatus`,
        allPatient
    );
  }
  editEmployeeStatus(allEmployee : User[]) {
    return this.http.put<User>(
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
