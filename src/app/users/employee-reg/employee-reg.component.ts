import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from '../model/error.enum';
import { Role } from '../model/role.model';
import { Roles } from '../model/roles.enum';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css'],
})
export class EmployeeRegComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  roles: Role[] = [];
  formSubmitAttempt: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.roles.subscribe((res) => {
      // Need to remove patient
      this.roles = res.filter((role) => role.roleId !== Roles.PATIENT);
    });

    // this.roles.push(new Role(1, 'ADMIN'));
    // this.roles.push(new Role(2, 'PHYSICIAN'));
    // this.roles.push(new Role(3, 'NURSE'));
    console.log(this.roles);

    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthDate: new FormControl(null, [
        Validators.required,
        this.userService.validateBirthDate,
      ]),
      role: new FormControl(null, [Validators.required]),
      // empId: new FormControl(null, [Validators.required]),
    });
  }

  onRegister() {
    console.log('INSIDE onREgister');

    this.formSubmitAttempt = true;

    const newEmployee = new User();
    newEmployee.title = this.form.value.title;
    newEmployee.firstName = this.form.value.firstName;
    newEmployee.lastName = this.form.value.lastName;
    newEmployee.email = this.form.value.email;
    newEmployee.birthDate = this.form.value.birthDate;
    newEmployee.roleId = this.form.value.role;
    // newEmployee.empId = this.form.value.empId;

    if (this.form.valid) {
      this.userService.addEmployee(newEmployee);

      // If need to redirect to landing page
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

  errorRole() {
    if (this.form.controls.role.errors?.required) {
      return ErrorMessage.ROLE_REQUIRED;
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
