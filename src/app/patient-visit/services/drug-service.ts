import { GlobalConstants } from 'src/app/common/global-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrugService {
  constructor(private http: HttpClient) {}

  baseUrl: string = GlobalConstants.SERVER_URL; //usr api

  getDrugs() {
    return this.http.get<any>(this.baseUrl + `/drug/drugs`);
  }


}
