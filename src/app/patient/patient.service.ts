import { User } from 'src/app/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientInterface } from './patient-list/patient-list.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patientList: PatientInterface[] = [];
  constructor(private http: HttpClient) {
    this.getAllPatient();
  }

  baseUrl: string = 'http://localhost:8083/';

  updatePatientDetails(patient: User) {
    this.http.post('http://localhost:8083/patient/save', patient).subscribe((res) => {
      console.log(res);
    });
  }

  fetchPatient(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'patient/getById/' + id);
  }

  getAllPatient(): Observable<PatientInterface[]> {
    return this.http.get<PatientInterface[]>(this.baseUrl + 'patient/getAll');
    //   .subscribe((list) => {
    //     console.log('data : ' + list);

    //     this.patientList.splice(0, this.patientList.length);
    //     this.patientList.push(...list);
    //   });

    // console.log('data in service : ' + this.patientList);

    // return this.patientList;
  }

  fetchAllAllergyIds() {
    return this.http.get<string[]>(this.baseUrl + 'allergy/ids');
  }

  getAllergy(): Observable<any> {
    return this.http.get(this.baseUrl + `/patient/allAllergy`);
  }

  getAllergyName(): Observable<any> {
    return this.http
      .get(this.baseUrl + `/patient/allAllergy`)
      .pipe(
        map<any, any>((response: []) =>
          response.map((item) => item['allergyName'])
        )
      );
  }

  getAllergyType(): Observable<any> {
    return this.http
      .get(this.baseUrl + `/patient/allAllergy`)
      .pipe(
        map<any, any>((response: []) =>
          response.map((item) => item['allergyType'])
        )
      );
  }

  getAllergyById(allergyCode: string): Observable<any> {
    console.log('service' + allergyCode);
    return this.http.get(
      this.baseUrl + 'patient/getAllergyByCode/' + allergyCode
    );
  }
}
