import { User } from './../model/user.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Page, PageRequest } from '../model/page';

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

  getAllPatient(page:any,size:any,columnName:any,direction:any): Observable<any> {
    const params = {
      page,
      size,
      columnName,
      direction
    }
    return this.http.get(`${this.baseurl}patient-list`,{params});
  }

  getAllUsers(page:any,size:any,columnName:any,direction:any): Observable<any> {
    const params = {
      page,
      size,
      columnName,
      direction
    }
    return this.http.get(`${this.baseurl}user-list`,{params});
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

  getPatientCount(){
    return this.http.get<Response>(this.baseurl+'patients/patientcount');
    
  }
  getEmployeeCount(){
    return this.http.get<Number>(this.baseurl+'user/usercount');
    
  }
  
}
