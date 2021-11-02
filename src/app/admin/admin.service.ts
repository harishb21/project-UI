import { GlobalConstants } from 'src/app/common/global-constants';
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
    this.baseurl=GlobalConstants.SERVER_URL+"/admin/"
  }

  getAllPatient(
    page: any,
    size: any,
    columnName: any,
    direction: any
  ): Observable<any> {
    const params = {
      page,
      size,
      columnName,
      direction,
    };
    return this.http.get(`${this.baseurl}patient-list`, { params });
  }

  getAllUsers(
    page: any,
    size: any,
    columnName: any,
    direction: any
  ): Observable<any> {
    const params = {
      page,
      size,
      columnName,
      direction,
    };
    return this.http.get(`${this.baseurl}user-list`, { params });
  }

  editPatientStatus(allPatient: User[]): Observable<any>  {
    return this.http.put(`${this.baseurl}patient/editstatus`, allPatient);
  }
  editEmployeeStatus(allEmployee: User[]) : Observable<any> {
    
    return this.http.put(
      `${this.baseurl}/employee/editstatus/`,
      allEmployee
    );
  }

  getPatientCount(): Observable<any>  {
    return this.http.get(this.baseurl + 'patients/patientcount');
  }
  getEmployeeCount(): Observable<any>  {
    return this.http.get(this.baseurl + 'user/usercount');
  }
  getFilterPatientRecord(
    page: any,
    size: any,
    direction: any,
    filterValue:any):Observable<any>{
    const params = {
      page,
      size,
      direction,
      filterValue
    };
    return this.http.get(`${this.baseurl}filter/patient-list`,{params});
  }
  getFilterEmployeeRecord(
    page: any,
    size: any,
    direction: any,
    filterValue:any):Observable<any>{
    const params = {
      page,
      size,
      direction,
      filterValue
    };
    return this.http.get(`${this.baseurl}filter/user-list`,{params});
  }
  getAllPatientEmail():Observable<any>{
    return this.http.get(`${this.baseurl}patient/allpatients`)
  }
  getAllActivePatientEmail():Observable<any>{
    return this.http.get(`${this.baseurl}patient/allactivepatients`)
  }
  getAllEmployeeEmail():Observable<any>{
    return this.http.get(`${this.baseurl}employees/allemployees`)
  }
  getAllActiveEmployeeEmail():Observable<any>{
    return this.http.get(`${this.baseurl}employees/allactiveemployees`)
  }
}
