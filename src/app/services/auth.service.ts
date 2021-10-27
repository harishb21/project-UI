import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GlobalConstants } from '../common/global-constants';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userInfo = new BehaviorSubject<User | null>(null);

  HOST_URL = 'http://localhost:8082';

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.userInfo.subscribe((res) => {
      if (res) {
        sessionStorage.setItem('user', JSON.stringify(res));
      }
    });

    if (sessionStorage.getItem('user')) {
      const str: string | null = sessionStorage.getItem('user');
      const user: User = JSON.parse(str === null ? '{}' : str);
      this.userInfo.next(user);
    }
  }

  /**
   * This will authenicate the user whether valid or not , If Valid will return user Details and roles , so that it gets registered for whole application and if invalid return null with error code
   *
   * @param user
   * @returns
   */
  authenticate(user: User) {
    return this.http.post<any>(
      `${GlobalConstants.SERVER_URL}/auth/verify`,
      user
    );
  }

  /**
   * Logout Remove user from system
   */
  logout() {
    this.userInfo.next(null);
    sessionStorage.clear();
  }
}
