import { User } from 'src/app/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientInterface } from './patient-list/patient-list.component';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patientList: PatientInterface[] = [];
  constructor(private http: HttpClient) {
    this.getAllPatient();
  }

  updatePatientDetails(patient: User) {
    this.http.put('http://localhost:8083/patient', patient).subscribe((res) => {
      console.log(res);
    });
  }

  fetchPatient(id: number): Observable<any> {
    return this.http.get('http://localhost:8083/patient/' + id);
  }

  getAllPatient():Observable<PatientInterface[]> {
    return this.http.get<PatientInterface[]>('http://localhost:8083/getAll');
    //   .subscribe((list) => {
    //     console.log('data : ' + list);

    //     this.patientList.splice(0, this.patientList.length);
    //     this.patientList.push(...list);
    //   });

    // console.log('data in service : ' + this.patientList);

    // return this.patientList;
  }

  fetchAllAllergyIds() {
    return this.http.get<string[]>('http://localhost:8083/allergy/ids');
  }
}
