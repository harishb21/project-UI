import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global-constants';
import { Role } from 'src/app/model/role.model';
import { User } from '../../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  public roles = new BehaviorSubject<Role[] | []>([]);

  HOST_URL = 'http://localhost:8082';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
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

    this.http.post<User>(`${this.HOST_URL}/employees/`, employee).subscribe(
      (res) => {
        console.log('Response Created');
        // res = JSON.parse(res);
        this._snackBar.open(res?.message);
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

    this.http.post<User>(`${this.HOST_URL}/patients/`, patient).subscribe(
      (res) => {
        console.log('Response Created');
        this._snackBar.open(res?.message);
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

  getUserByEmail(value: any) {
    return this.http.get(
      `${GlobalConstants.USER_SERVER_URL}/auth/valid/${value}`
    );
  }

  updatePasssword(user: User, oldPassword: string, newPassword: string) {
    return this.http.post<User>(
      `${GlobalConstants.USER_SERVER_URL}/auth/update`,
      {
        email: user.email,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }
    );
  }

  /**
   * This will authenicate the user whether valid or not , If Valid will return user Details and roles , so that it gets registered for whole application and if invalid return null with error code
   *
   * @param user
   * @returns
   */
  authenticate(user: User) {
    return this.http.post<any>(
      `${GlobalConstants.USER_SERVER_URL}/auth/verify`,
      user
    );
  }
}
