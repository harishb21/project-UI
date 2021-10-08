import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ErrorMessage } from '../../../model/error.enum';
import { User } from '../../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  user: User | null = null;
  form: FormGroup = new FormGroup({});
  formSubmitAttempt: boolean = false;
  retries = 0;
  MAX_ATTEMPT: number = 3;

  errorMessage: string = '';

  // To handle when first time login after forget or first login from employee
  newUser: boolean = false;

  // For Showing visibiity to user
  hideNewPwd: boolean = true;
  hideOldPwd: boolean = true;
  hideConfirmPwd: boolean = true;

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.userInfo.subscribe((userInfo) => {
      this.user = userInfo;

      if (this.user?.attempt === -1) {
        this.newUser = true;
      }
    });

    this.form = this.formbuilder.group(
      {
        oldPassword: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.userService.mustMatch('password', 'confirmPassword') }
    );

    this.removeNewUserValidation();
  }

  /**
   * This Will Remove Valdiation when new User trying to change password,
   * remove old password validation of form
   */
  removeNewUserValidation() {
    if (this.newUser) {
      this.form.get('oldPassword')?.clearValidators();
      this.form.get('oldPassword')?.updateValueAndValidity();
    }
  }

  onSubmit() {
    this.removeNewUserValidation();

    this.formSubmitAttempt = true;

    if (this.user && this.form.valid) {
      let oldPassword = this.form.value.oldPassword;
      let newPassword = this.form.value.password;

      this.authService
        .updatePassswordObservable(this.user, oldPassword, newPassword)
        .subscribe(
          (res) => {
            console.log('Response Created');
            this.errorMessage = res.message;
            console.log(res);

            // Mail Confirmation for password update and user confirmation in UI also.
          },
          (err) => {
            console.error('Error Occured');
            console.error(err);

            this.errorMessage = err.error;

            // Might failed to update passord
          }
        );

      // if (
      //   this.authService.updatePassword(this.user, oldPassword, newPassword)
      // ) {
      //   // After updating again retirect to login

      //   console.log('Password updated');
      //   // alert('Password updated');
      //   // this.router.navigate(['/auth']);
      // } else {
      //   // Updating the details if wrong data then error
      //   this.retries++;
      // }
    }

    console.log(this.form);
  }

  // errorMessage() {
  //   // Error Message when user tries more than one time with wrong crendials
  //   if (this.retries >= this.MAX_ATTEMPT) {
  //     return `Your account has been locked for next 24 hours for security purpose.
  //       Please contact the hospital administrator or call helpdesk on 123456 for
  //       more information.`;
  //   } else if (this.retries === 2) {
  //     return `Kindly provide correct old password`;
  //   }

  //   return '';
  // }

  errorOldPassword() {
    if (this.form.controls.oldPassword.errors?.required) {
      return ErrorMessage.REQUIRED;
    } else {
      return '';
    }
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

  errorConfirmPassword() {
    if (this.form.controls.confirmPassword.errors?.required) {
      return ErrorMessage.REQUIRED;
    } else if (this.form.controls.confirmPassword.errors?.mustMatch) {
      return ErrorMessage.CONFIRM_PASSWORD_NOT_MATCH;
    } else {
      return '';
    }
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }
}
