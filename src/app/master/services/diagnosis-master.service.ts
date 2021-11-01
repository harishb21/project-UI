import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosisMaster } from '../model/DiagnosisMaster';

@Injectable({
  providedIn: 'root',
})
export class DiagnosisMasterService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8083'; //visit

  getDiagnosis(): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/diagnosis/allDiagnosis`);
  }

  saveDiagnosis(value: DiagnosisMaster) {
    this.http
      .post(this.baseUrl + `/diagnosis/master/save`, value)
      .subscribe(() => {
        console.log('data saved!!');
      });
  }

  getActiveDiagnosis(): Observable<any> {
    
    return this.http.get<any>(this.baseUrl + `/diagnosis/master/active/diagnosis`);
  }

  getDiagnosisByCode(diagnosisCode:any): Observable<any> {
    
    return this.http.get<any>(this.baseUrl + `/diagnosis/getByDiagnosisCode/`+diagnosisCode);
  }

  deleteDiagnosis(diagnosisCode:any): Observable<any> {
    
    return this.http.delete(this.baseUrl + `/diagnosis/master/deleteDiagnosis/`+diagnosisCode);
  }

}
