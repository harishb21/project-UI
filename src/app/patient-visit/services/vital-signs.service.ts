import { GlobalConstants } from 'src/app/common/global-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vitals } from '../model/vitals';

@Injectable({
  providedIn: 'root'
})
export class VitalSignsService {

  baseVisitUrl:string= GlobalConstants.SERVER_URL //visit

  constructor(private http: HttpClient) { }

  addVitals(vital: Vitals):Observable<any>{
    return this.http.post(`${this.baseVisitUrl}/vital/save`,vital);
  }
  getByAppointmentId(appointmentId:string): Observable<any> {
    return this.http.get(`${this.baseVisitUrl}/vital/getByAppointmentId/${appointmentId}`)
  }}
