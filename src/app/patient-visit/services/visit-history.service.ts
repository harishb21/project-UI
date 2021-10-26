import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VisitHistoryService {
  baseUrl: string = 'http://localhost:8083';
  appointmentBaseUrl: string = 'http://localhost:8072';

  constructor(private http: HttpClient) {}

  getVitalSings(appointmentId: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `/vital/getByAppointmentId/${appointmentId}`
    );
  }

  getDiagnosisByAppoinId(appointmentId: any): Observable<any> {
    return this.http.get(
      this.baseUrl + `/diagnosis/getByAppointmentId/${appointmentId}`
    );
  }

  getProceduresByAppoinId(appointmentId: any): Observable<any> {
    // return this.http
    //   .get(this.baseUrl + `/procedure/getByAppointmentId/${appointmentId}`)
    //   .pipe(
    //     map<any, any>((response: []) =>
    //       response.map((item) => item['procedures'])
    //     )
    //   );

    return this.http.get(
      this.baseUrl + `/procedure/getByAppointmentId/${appointmentId}`
    );
  }

  getMedicinesByAppoinId(appointmentId: any): Observable<any> {
    return this.http.get(
      this.baseUrl + `/drug/getByAppointmentId/${appointmentId}`
    );
  }

  getVisitDates(patientId: string): Observable<any> {
    return this.http.get(this.appointmentBaseUrl + `/api/appointments/dates/` + patientId);
  }


  getAppointmentIdByVisitDate(appointmentDate: any): Observable<any> {

    let params = new HttpParams();
    params=  params.append('visitedDate', appointmentDate);
    return this.http.get(this.appointmentBaseUrl + `/api/appointment/id/`,{params});
  }

}
