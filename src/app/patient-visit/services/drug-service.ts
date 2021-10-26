import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrugService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8083'; //usr api

  getDrugs() {
    return this.http.get<any>(this.baseUrl + `/drug/drugs`);
  }


}
