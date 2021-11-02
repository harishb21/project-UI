import { GlobalConstants } from 'src/app/common/global-constants';
import { User } from 'src/app/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientInterface } from '../patient-list/patient-list.component';
import { map } from 'rxjs/operators';
import { Allergy } from '../../model/allergy.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patientList: PatientInterface[] = [];
  patientId:any;
  patientIdToAddAllergy: string;
  constructor(private http: HttpClient) {
    this.getAllPatient();
  }

  baseUrl: string = GlobalConstants.SERVER_URL;

  updatePatientDetails(patient: User) {
    this.http
      .post(`${GlobalConstants.SERVER_URL}/patient/save`, patient)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getAllAllergiesOfPatient(patientId: string): Observable<any> {
    return this.http.get(this.baseUrl + `/allergy/getByPatientId/` + patientId);
  }

  saveAllergy(allergy: Allergy) {
    this.http.post(this.baseUrl + `/allergy/save`, allergy).subscribe((res) => {
      console.log(res);
    });
  }
  

  fetchPatient(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/patient/getById/' + id);
  }

  getAllPatient(): Observable<PatientInterface[]> {
    return this.http.get<PatientInterface[]>(this.baseUrl + '/patient/getAll');
    //   .subscribe((list) => {
    //     console.log('data : ' + list);

    //     this.patientList.splice(0, this.patientList.length);
    //     this.patientList.push(...list);
    //   });

    // console.log('data in service : ' + this.patientList);

    // return this.patientList;
  }

  fetchAllAllergyIds() {
    return this.http.get<string[]>(this.baseUrl + '/allergy/ids');
  }

  getAllergy(): Observable<any> {
    return this.http.get(this.baseUrl + `/allergy/allAllergy`);
  }

  getAllergyName(): Observable<any> {
    return this.http
      .get(this.baseUrl + `/allergy/allAllergy`)
      .pipe(
        map<any, any>((response: []) =>
          response.map((item) => item['allergyName'])
        )
      );
  }

  getAllergyType(): Observable<any> {
    return this.http
      .get(this.baseUrl + `/allergy/allAllergy`)
      .pipe(
        map<any, any>((response: []) =>
          response.map((item) => item['allergyType'])
        )
      );
  }

  deleteAllergy(id: string) {
    console.log("url: "+this.baseUrl + '/allergy/delete/' + id);
    
    this.http
      .delete(this.baseUrl + '/allergy/delete/' + id)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getAllergyById(allergyCode: string): Observable<any> {
    console.log('service' + allergyCode);
    return this.http.get(
      this.baseUrl + 'patient/getAllergyByCode/' + allergyCode
    );
  }
}
