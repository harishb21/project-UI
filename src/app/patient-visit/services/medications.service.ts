import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Medications } from '../model/medications';

@Injectable({
  providedIn: 'root'
})
export class MedicationsService {


  _medicationList: Medications[]=[];
  baseVisitUrl:string= 'http://localhost:8083'//visit


  constructor(private http: HttpClient) { }

  addMedication(medication: Medications){
    this._medicationList.push(medication);
  }

  getAllMedList(){
    return this._medicationList;
    
  }

  deleteMedication(medicationId:number){
    return this.http.delete(`${this.baseVisitUrl}/drug/deleteMedication/${medicationId}`);
  }

  getData():Observable<any>{
    return this.http.get(`${this.baseVisitUrl}/drug/drugs`)
      .pipe(
        map<any, any>((response:[]) => response.map(item => item['drugId']))
      )
  }

  getallDAta():Observable<any>{
    return this.http.get(`${this.baseVisitUrl}/drug/drugs`)
      .pipe(
        map<any, any>((response:[]) => response.map(item => item['drugName']))
      )
  }

  getAllDrugForm():Observable<any>{
    return this.http.get(`${this.baseVisitUrl}/drug/drugs`)
      .pipe(
        map<any, any>((response:[]) => response.map(item => item['drugForm']))
      )
  }

  getDrugByID(id:any){
    return this.http.get(`${this.baseVisitUrl}/drug/${id}`)   
  }

  saveMedication(medicine: Medications):Observable<any>{
    return this.http.post(`${this.baseVisitUrl}/drug/saveDrugs/`,medicine);
  }

  getByAppointmentId(appointmentId:any): Observable<any> {
    console.log("URL : "+this.baseVisitUrl);
    
    return this.http.get(`${this.baseVisitUrl}/drug/getByAppointmentId/${appointmentId}`)
  }


}
