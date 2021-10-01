import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GlobalConstants } from '../common/global-constants';
import { User } from '../users/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userInfo = new BehaviorSubject<User | null>(null);
  // private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  // get isLoggedIn() {
  //   return this.loggedIn.asObservable(); // {2}
  // }

  // getUser() {
  //   return this.userInfo.asObservable();
  // }

  HOST_URL = 'http://localhost:8082';

  userList: User[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    // this.loadData();

    this.userInfo.subscribe((res) => {
      if (res) {
        localStorage.setItem('user', JSON.stringify(res));
      }
    });

    if (localStorage.getItem('user')) {
      const str: string | null = localStorage.getItem('user');
      const user: User = JSON.parse(str === null ? '{}' : str);
      this.userInfo.next(user);
    }
  }

  loadData() {
    this.http
      .get<User[]>(`${GlobalConstants.USER_SERVER_URL}/users`)
      .subscribe((res) => {
        this.userList.splice(0, this.userList.length);
        this.userList.push(...res);
      });
  }

  /**
   * This will authenicate the user whether valid or not , If Valid will return user Details and roles , so that it gets registered for whole application and if invalid return null with error code
   *
   * @param email
   * @param password
   */
  authenticate(email: string, password: string) {
    console.log('Inside authenticate');

    let verified: boolean = false;

    this.http
      .post<User>(`${GlobalConstants.USER_SERVER_URL}/auth/verify`, {
        email: email,
        password: password,
      })
      .subscribe(
        (res) => {
          console.log('Response Received');

          console.log(res);
          this.userInfo.next(res);
          localStorage.setItem('user', JSON.stringify(res));
          verified = true;

          this._snackBar.open('Successfully Authenticated');
          this.router.navigate(['/']);
          // If res shows user not found set user null and login fail
          // If successfully then fetch that user update for global access
        },
        (err) => {
          console.log('Error Received');
          console.log(err);

          // alert(err.error.title + '\n' + err.error.detail);

          this._snackBar.open(err.error.detail);
          this.userInfo.next(null);
          verified = false;
        }
      );

    // if (email !== '' && password !== '') {
    //   let user: User = new User();
    //   user.firstName = 'admin';
    //   user.roleId = 1;
    //   this.userInfo.next(user);
    //   // localStorage.setItem('user', JSON.stringify(user));
    //   // this.loggedIn.next(true);
    //   return true;
    // }
    return verified;

    // Errors
    // Might possible user not found

    // Might possible credentials mismatch

    // Redirection URLS
    // Normal Login send to dashboard

    // First Time Login Redirect To Change Password

    // Forget Password First time Login send to change password
  }

  /**
   * Logout Remove user from system
   */
  logout() {
    this.userInfo.next(null);
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
    // http://localhost:3000/auth/forget
    this.http
      .post(`${GlobalConstants.USER_SERVER_URL}/auth/forget`, { email: email })
      .subscribe(
        (res) => {
          console.log('Response Received');
          console.log(res);

          // After Successful, Sending Email for forget email link

          successful = true;
        },
        (err) => {
          console.error('Error Received');
          console.error(err);

          // After Failed, Sending Email for forget email link

          // User Not Found with that username

          successful = false;
        }
      );

    return successful;
  }

  /**
   * To update password
   *
   * @param user
   * @param oldPassword
   * @param newPassword
   * @returns
   */
  updatePassword(user: User, oldPassword: string, newPassword: string) {
    let updated: boolean = false;

    this.http
      .post<User>(`${GlobalConstants.USER_SERVER_URL}/auth/update`, {
        email: user.email,
        oldPassword: oldPassword,
        newPassword: newPassword,
      })
      .subscribe(
        (res) => {
          console.log('Response Created');
          console.log(res);

          // Mail Confirmation for password update and user confirmation in UI also.

          updated = true;
        },
        (err) => {
          console.error('Error Occured');
          console.error(err);

          // Might failed to update passord

          updated = false;
        }
      );

    // updated = true;
    return updated;
  }

  updatePassswordObservable(
    user: User,
    oldPassword: string,
    newPassword: string
  ) {
    return this.http.post<User>(
      `${GlobalConstants.USER_SERVER_URL}/auth/update`,
      {
        email: user.email,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }
    );
  }
}
