import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcedureMaster } from '../model/ProcedureMaster';

@Injectable({
  providedIn: 'root',
})
export class ProcedureMasterService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8083'; //visit

  getProcedures(): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/procedure/master/procedures`);
  }

  saveProcedures(value: ProcedureMaster) {
    this.http
      .post(this.baseUrl + `/procedure/master/save`, value)
      .subscribe(() => {
        console.log('data saved!!');
      });
  }

  getActiveProcedures(): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/procedure/master/active/procedures`);
  }

}
