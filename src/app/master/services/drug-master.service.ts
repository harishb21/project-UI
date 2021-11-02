import { GlobalConstants } from 'src/app/common/global-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrugMaster } from '../model/DrugMaster';

@Injectable({
  providedIn: 'root',
})
export class DrugMasterService {
  constructor(private http: HttpClient) {}

  baseUrl: string = GlobalConstants.SERVER_URL; //usr api

  getDrugs() {
    return this.http.get<any>(this.baseUrl + `/drug/master/drugs`);
  }

  deleteDrug(drugId:string) {
    return this.http.delete<any>(this.baseUrl + `/drug/master/delete/`+drugId);
  }

  addNewDrug(newDrug: DrugMaster) {
    this.http
      .post(this.baseUrl + `/drug/master/save`, newDrug)
      .subscribe((data) => {
        console.log('data saved!');

        console.log(data);
      });
  }
}
