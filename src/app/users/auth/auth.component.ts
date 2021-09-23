import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from '../auth.service';
import { ErrorMessage } from '../model/error.enum';
import { User } from '../model/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  user: User | null = null;
  attempt: number = 0;
  form: FormGroup = new FormGroup({});
  formSubmitAttempt: boolean = false;
  MAX_ATTEMPT: number = 3;
  errorMessage: string = '';
  isForget: boolean = false;
  hidePwd: boolean = true;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isForget = false;

    this.authService.userInfo.subscribe((user) => {
      this.user = user;
      this.attempt = 0;
    });

    this.form = new FormGroup({
      email: new FormControl('admin@admin', [Validators.required]),
      password: new FormControl('Welcome@1231', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
    });

    this.removeForgetValidation();
  }

  // Login
  onLogin() {
    console.log('Inside login');

    this.formSubmitAttempt = true;

    let email = this.form.value.email;
    let password = this.form.value.password;
    let verified: boolean = false;

    // console.log(this.form);
    // return false;
    if (this.form.valid) {
      this.http
        .post<User>(`${GlobalConstants.USER_SERVER_URL}/auth/verify`, {
          email: email,
          password: password,
        })
        .subscribe(
          (res) => {
            console.log('Response Received');

            console.log(res);
            this.authService.userInfo.next(res);
            // localStorage.setItem('user', JSON.stringify(res));
            verified = true;

            if (res.attempt === -1) {
              // new user redirect update password page
              this.router.navigate(['/users/update']);
            } else {
              this.router.navigate(['/']);
            }

            this._snackBar.open('Successfully Authenticated');

            // If res shows user not found set user null and login fail
            // If successfully then fetch that user update for global access
          },
          (err) => {
            console.log('Error Received');
            console.log(err);

            if (err.error.attempt) {
              console.log('Inside attempt');

              // Error Message when user tries more than one time with wrong crendials
              if (err.error.attempt >= this.MAX_ATTEMPT) {
                this.errorMessage =
                  'Your account has been locked. Please contact the hospital administrator or call helpdesk on 123456 for more information.';
              } else if (err.error.attempt > 0) {
                this.errorMessage = `${
                  this.MAX_ATTEMPT - err.error.attempt
                } login attempts remaining`;
              } else {
                this.errorMessage = '';
              }

              this.attempt = err.error.attempt;
            }

            // alert(err.error.title + '\n' + err.error.detail);

            this.authService.userInfo.next(null);
            verified = false;

            // this._snackBar.open(this.errorMessage);
          }
        );

      // let authenticated = this.authService.authenticate(email, password);
      // if (authenticated) {
      //   // Navigation after successful login
      //   this.router.navigate(['/']);
      // } else {
      //   console.log('Waiting ', authenticated);
      // }
    }
    //  else {
    //   this.attempt++;
    // }
  }

  // Register
  onRegister() {
    this.router.navigate(['/patient-registration']);
  }

  removeForgetValidation() {
    if (this.isForget) {
      this.form.get('password')?.clearValidators();
      this.form.get('password')?.updateValueAndValidity();
    }
  }

  onForget() {
    this.removeForgetValidation();

    let email = this.form.value.email;
    // send mail to provided username with default one time password and when they click on link redirect to change password page
    if (this.authService.forgetPassword(email)) {
      // alert('Email link send to change password');
    } else {
    }
  }

  isFieldInvalid(field: string) {
    // {6}
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  errorPassword() {
    if (this.form.controls.password.errors?.required) {
      return ErrorMessage.REQUIRED;
    } else if (this.form.controls.password.errors?.pattern) {
      return ErrorMessage.PASSWORD_PATTERN_NOT_MATCH;
    } else {
      return '';
    }
  }

  errorEmail() {
    if (this.form.controls.email.errors?.required) {
      return ErrorMessage.REQUIRED;
    } else {
      return '';
    }
  }

  actionToggle(): string {
    return !this.isForget ? 'Forget Password' : 'Already have account';
  }
}
