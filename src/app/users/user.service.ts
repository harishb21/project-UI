import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Role } from './model/role.model';
import { User } from './model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  public roles = new BehaviorSubject<Role[] | []>([]);

  HOST_URL = 'http://localhost:8082';

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    // Loading Roles in Project
    this.http.get<Role[]>(`${this.HOST_URL}/roles/`).subscribe(
      (res) => {
        // this.roles.splice(0, this.roles.length);
        // this.roles.push(...res)
        console.log('Response Created');
        this.roles.next(res);
      },
      (err) => {
        console.error('Error Occured');
        console.error(err);
      }
    );
  }

  // send data to server
  addEmployee(employee: User) {
    console.log('INSNIDE addEmployee');

    this.http.post(`${this.HOST_URL}/employees/`, employee).subscribe(
      (res) => {
        console.log('Response Created');
        console.log(res);
      },
      (err) => {
        console.error('Error Occured');
        console.error(err);
      }
    );
  }

  addPatient(patient: User) {
    console.log(patient);

    this.http.post(`${this.HOST_URL}/patients/`, patient).subscribe(
      (res) => {
        console.log('Response Created');

        console.log(res);
      },
      (err) => {
        console.error('Error Occured');
        console.error(err);
      }
    );
  }

  /**
   * When Future date is selected then valid flag will set false, otherwise null is return so that date is valid
   *
   * @param c Input FormControl Element on which this validation to perform
   * @returns
   */
  validateBirthDate(c: FormControl) {
    return c.value === null ||
      new Date().getTime() > new Date(c.value).getTime()
      ? null
      : {
          futureDate: {
            valid: false,
          },
        };
  }

  /**
   * To Match password whether they are same
   *
   * @param controlName
   * @param matchControlName
   * @returns
   */
  mustMatch(controlName: string, matchControlName: string) {
    return (formgroup: FormGroup) => {
      const control = formgroup.controls[controlName];
      const matchingControl = formgroup.controls[matchControlName];

      if (matchingControl.errors && matchingControl.errors.mustMatch) return;

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
