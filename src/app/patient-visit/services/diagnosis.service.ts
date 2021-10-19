import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Diagnosis } from '../model/diagnosis';

@Injectable({
  providedIn: 'root',
})
export class DiagnosisService {
 
  baseVisitUrl: string = 'http://localhost:8083'; //visit

  diagnosislist: Diagnosis[] = [];
  constructor(private http: HttpClient) {}

  addDiagnosis(diagnosis: Diagnosis) {
    this.diagnosislist.push(diagnosis);
  }

  getAllList() {
    return this.diagnosislist;
  }

  deleteDiagnosis(diagnosisCode: number): Observable<any> {
    return this.http.delete(
      `${this.baseVisitUrl}/diagnosis/deleteByDiagnosisCode/${diagnosisCode}`
    );
  }

  getAllData() {
    console.log('inside ser');
    return this.http
      .get(`${this.baseVisitUrl}/diagnosis/diagnosiss`)
      .pipe(
        map<any, any>((response: []) =>
          response.map((item) => item['diagnosisName'])
        )
      );
  }

  getAllDiagnosisCode() {
    return this.http
      .get(`${this.baseVisitUrl}/diagnosis/diagnosiss`)
      .pipe(
        map<any, any>((response: []) =>
          response.map((item) => item['diagnosisCode'])
        )
      );
  }

  saveDiagnosis(diagnosis: Diagnosis, id: number): Observable<any> {
    return this.http.post(
      `${this.baseVisitUrl}/diagnosis/saveDaignosis/${id}`,
      diagnosis
    );
  }

  onSelectDiagnosisCode(value: any): Observable<any> {
    return this.http.get(
      `${this.baseVisitUrl}/diagnosis/getByDiagnosisCode/${value}`
    );
  }

  onSelectDiagnosisName(value: any): Observable<any> {
    return this.http.get(
      `${this.baseVisitUrl}/diagnosis/getByDiagnosisName/${value}`
    );
  }

  getByAppointmentId(appointmentId: any): Observable<any> {
    console.log('service');
    console.log('appointment id : ' + appointmentId);
    return this.http.get(
      this.baseVisitUrl + '/diagnosis/getByAppointmentId/' + 1
    );
  }
}
