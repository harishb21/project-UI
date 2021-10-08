import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessage } from '../../model/error.model';
import { User } from '../../../model/user.model';
import { UserService } from '../../services/user.service';
import { emailValidator } from '../../validators/email.validator';

@Component({
  selector: 'app-patient-reg',
  templateUrl: './patient-reg.component.html',
  styleUrls: ['./patient-reg.component.css'],
})
export class PatientRegComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formSubmitAttempt: boolean = false;

  todayDate: Date = new Date();

  hideNewPwd: boolean = true;
  hideConfirmPwd: boolean = true;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todayDate = new Date();

    this.form = this.fb.group(
      {
        title: ['', [Validators.required]],
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            emailValidator(this.userService),
          ],
        ],
        birthDate: [
          '',
          [Validators.required, this.userService.validateBirthDate],
        ],
        contactNo: [''],
        // username: [''],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
      },
      { validator: this.userService.mustMatch('password', 'confirmPassword') }
    );
  }

  onRegister() {
    this.formSubmitAttempt = true;
    console.log(this.form);

    // const newPatient = new Patient(
    //   this.form.value.title,
    //   this.form.value.firstName,
    //   this.form.value.lastName,
    //   this.form.value.email,
    //   this.form.value.birthDate,
    //   this.form.value.contactNo,
    //   this.form.value.username,
    //   this.form.value.password
    // );

    if (this.form.valid) {
      const newPatient = new User();
      newPatient.title = this.form.value.title;
      newPatient.firstName = this.form.value.firstName;
      newPatient.lastName = this.form.value.lastName;
      newPatient.email = this.form.value.email;
      newPatient.birthDate = this.form.value.birthDate;
      newPatient.contactNo = this.form.value.contactNo;
      newPatient.username = this.form.value.username;
      newPatient.password = this.form.value.password;

      this.userService.addPatient(newPatient);

      // Redirect to Login Page when Sign up by new Patient
      // this.router.navigate(['auth']);

      // Redirect To Dashboard after registration
    }
  }

  errorTitle() {
    if (this.form.controls.title.errors?.required) {
      return ErrorMessage.TITLE_REQUIRED;
    } else {
      return '';
    }
  }

  errorFirstName() {
    if (this.form.controls.firstName.errors?.required) {
      return ErrorMessage.FIRSTNAME_REQUIRED;
    } else if (this.form.controls.firstName.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorLastName() {
    if (this.form.controls.lastName.errors?.required) {
      return ErrorMessage.LASTNAME_REQUIRED;
    } else if (this.form.controls.lastName.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorEmail() {
    if (this.form.controls.email.errors?.required) {
      return ErrorMessage.EMAIL_REQUIRED;
    } else if (this.form.controls.email.errors?.email) {
      return ErrorMessage.EMAIL_REQUIRED;
    } else if (this.form.controls.email.errors?.emailInvalid) {
      return ErrorMessage.EMAIL_INVALID;
    } else {
      return '';
    }
  }

  errorBirthDate() {
    if (this.form.controls.birthDate.errors?.required) {
      return ErrorMessage.VALID_DATE_REQUITED;
    } else if (this.form.controls.birthDate.errors?.futureDate) {
      return ErrorMessage.VALID_BIRTH_DATE_REQUIRED;
    } else {
      return '';
    }
  }

  errorPassword() {
    if (
      this.form.controls.password.errors?.required ||
      this.form.controls.password.errors?.pattern
    ) {
      return ErrorMessage.FORM_PASSWORD_CRITERIA;
    } else {
      return '';
    }
  }

  errorConfirmPassword() {
    if (
      this.form.controls.confirmPassword.errors?.required ||
      this.form.controls.password.errors?.pattern
    ) {
      return ErrorMessage.REQUIRED;
    } else if (this.form.controls.confirmPassword.errors?.mustMatch) {
      return ErrorMessage.FORM_PASSWORD_NOT_MATCH;
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
