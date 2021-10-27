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

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.loadData();
  }

  loadData() {
    // Loading Roles in Project
    this.http.get<Role[]>(`${GlobalConstants.SERVER_URL}/roles/`).subscribe(
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

    this.http
      .post<User>(`${GlobalConstants.SERVER_URL}/users/employees/`, employee)
      .subscribe(
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

    this.http
      .post<User>(`${GlobalConstants.SERVER_URL}/users/patients/`, patient)
      .subscribe(
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

  signupPatient(patient: User) {
    console.log(patient);

    this.http
      .post<User>(
        `${GlobalConstants.SERVER_URL}/users/patients/signup/`,
        patient
      )
      .subscribe(
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
    return this.http.get(`${GlobalConstants.SERVER_URL}/auth/valid/${value}`);
  }

  /**
   * To update password
   *
   * @param user
   * @param oldPassword
   * @param newPassword
   * @returns
   */
  updatePasssword(user: User, oldPassword: string, newPassword: string) {
    return this.http.post<User>(`${GlobalConstants.SERVER_URL}/auth/update`, {
      email: user.email,
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
  }

  /**
   * If Email is send successfully then we will user with alert kindly check mail otherwise error will be showed
   *
   * @param email
   * @returns
   */
  forgetPassword(email: string) {
    let successful: boolean = false;

    // Sending username so that mail get send to email to corresponding username
    return this.http.post(`${GlobalConstants.SERVER_URL}/auth/forget`, {
      email: email,
    });
  }
}
