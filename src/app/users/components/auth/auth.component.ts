import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from '../../../services/auth.service';
import { ErrorMessage } from '../../../model/error.enum';
import { User } from '../../../model/user.model';
import { UserService } from '../../services/user.service';

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
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.isForget = false;

    this.authService.userInfo.subscribe((user) => {
      this.user = user;
      this.attempt = 0;
    });

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
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

    // if (localStorage.getItem('user')) {
    //   this.router.navigate(['/admin']);
    // }

    // let email =this.form.value.email;
    // let password =this.form.value.password;

    let user: User = new User();
    user.email = this.form.value.email;
    user.password = this.form.value.password;

    if (this.form.valid) {
      this.authService.authenticate(user).subscribe(
        (res) => {
          console.log('Response Received');

          console.log(res);
          this.authService.userInfo.next(res);
          sessionStorage.setItem('user', JSON.stringify(res));
          sessionStorage.setItem('token', JSON.stringify(res.accessToken));

          this.errorMessage = '';

          if (res.attempt === -1) {
            // new user redirect update password page
            this.router.navigate(['/users/update']);
          } else {
            let redirectLink = '/';
            // if (res.roleName == Roles.ADMIN) {
            //   redirectLink = '/admin';
            // }
            // this.router
            //   .navigateByUrl('/', { skipLocationChange: true })
            //   .then(() => {
            //     this.router.navigate([redirectLink]);
            //   });
            window.location.reload();
            this.router.navigate([redirectLink]);

            window.location.reload();
            console.log('INSIDE ELSE Auth');
          }
          console.log(this.user)
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
          } else {
            this.errorMessage = err.error;
          }

          // alert(err.error.title + '\n' + err.error.detail);

          this.authService.userInfo.next(null);

          // this._snackBar.open(this.errorMessage);
        }
      );
    }

    // Errors
    // Might possible user not found

    // Might possible credentials mismatch

    // Redirection URLS
    // Normal Login send to dashboard

    // First Time Login Redirect To Change Password

    // Forget Password First time Login send to change password
  }

  // Register
  // onRegister() {
  //   this.router.navigate(['/patient-registration']);
  // }

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
    this.userService.forgetPassword(email).subscribe(
      (res) => {
        console.log('Response Received');
        console.log(res);

        // After Successful, Sending Email for forget email link
      },
      (err) => {
        console.error('Error Received');
        console.error(err);

        // After Failed, Sending Email for forget email link

        // User Not Found with that username
      }
    );
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
