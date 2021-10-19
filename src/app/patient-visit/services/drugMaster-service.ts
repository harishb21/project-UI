import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DrugMaster } from '../model/drugMaster';

@Injectable({
  providedIn: 'root'
})
export class DrugMasterService 
{
  constructor(private http:HttpClient) { }

  baseUserUrl:string= 'http://localhost:8083' //usr api


  getDrug( page: number, pageSize: number,searchName : string,sortColumn:string,sortDirection:string):Observable<any>
  {
    return this.http.get<any>(`${this.baseUserUrl}/user/getAllDrugs?page=${page}&pageSize=${pageSize}&searchName=${searchName}&sortColumn=${sortColumn}&sortDirection=${sortDirection}`);
  }

  
  addNewDrug(newDrug: DrugMaster):Observable<any>
  {
    return this.http.post(`${this.baseUserUrl}/user/addDrug`, newDrug);
  }
  
  setDrugIsDepricated(drugIsDepricated : string,drugId:number):Observable<any>
  {
    const data = 
    {
      drugId: drugId,
      drugIsDepricated: drugIsDepricated
    };

    console.log(drugIsDepricated);
    console.log(`${this.baseUserUrl}/user/editDrugIsDepricatedByDrugId`,data);
    return this.http.post(`${this.baseUserUrl}/user/editDrugIsDepricatedByDrugId`,data);
  }

}
