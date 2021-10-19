import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Procedure } from '../model/procedure';
import { map, skipWhile, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PatientProceduresService {
  baseVisitUrl: string='http://localhost:8083'; //visit

  procedureList: Procedure[] = [];

  constructor(private http: HttpClient) {}

  addProcedures(procedure: Procedure) {
    this.procedureList.push(procedure);
  }

  getAllProcedures() {
    return this.procedureList;
  }

  deleteProcedure(procedureCode: number) {
    return this.http.delete(
      `${this.baseVisitUrl}/procedure/deleteProcedure/${procedureCode}`
    );
  }

  getAllData() {
    return this.http
      .get(`${this.baseVisitUrl}/procedure/procedures`)
      .pipe(
        map<any, any>((response: []) =>
          response.map((item) => item['procedureDiscription'])
        )
      );
  }

  getAllCodes() {
    return this.http
      .get(`${this.baseVisitUrl}/procedure/procedures`)
      .pipe(
        map<any, any>((response: []) =>
          response.map((item) => item['procedureCode'])
        )
      );
  }

  saveProcedures(procedure: Procedure, id: number): Observable<any> {
    return this.http.post(
      `${this.baseVisitUrl}/procedure/saveProcedures/${id}`,
      procedure
    );
  }

  getProcedureOnSelectId(value: any): Observable<any> {
    return this.http.get(`${this.baseVisitUrl}/procedure/getById/${value}`);
  }

  getProcedureOnSelectNames(value: any): Observable<any> {
    return this.http.get(`${this.baseVisitUrl}/procedure/getByName/${value}`);
  }

  getByAppointmentId(appointmentId: number): Observable<any> {
    return this.http.get(
      `${this.baseVisitUrl}/procedure/getByAppointmentId/${appointmentId}`
    );
  }
}
