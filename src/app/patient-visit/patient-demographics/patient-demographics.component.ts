import { User } from 'src/app/model/user.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmergencyContact } from '../../model/EmergencyContact';
import { ErrorMessage } from '../../model/error.enum';

import { PatientService } from '../services/patient.service';
import { Allergy } from 'src/app/model/allergy.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddAllergyDialogComponent } from '../add-allergy-dialog/add-allergy-dialog.component';
import { AppointmentService } from '../services/appointment.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientDemographicsComponent implements OnInit {
  address = 'ketannnnnnnnnn';
  address2 = '';

  allergyList: any[];

  form: FormGroup = new FormGroup({});
  selected: string = 'no';

  isPopupOpened = true;

  toppings: FormGroup;
  reactiveForm: FormGroup = new FormGroup({});
  isDisableAllergy: boolean = false;
  isDisableAllergyTab: boolean = false;
  checked: boolean = false;
  allergy: boolean = true;
  isDisabled: boolean = false;
  age: number;
  showAge: number;
  formSubmitAttempt: boolean = false;

  allergyCode?: string;
  allergyName?: string;
  allergyType?: string;

  allergy_idlist: Allergy[];
  allergy_namelist: Allergy[];
  allergy_typelist: Allergy[];

  patient: User = new User();
  emergencyContact: EmergencyContact = new EmergencyContact();
  allergyIds: string[];
  patientId: any;
  constructor(
    fb: FormBuilder,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private activatedroute: ActivatedRoute,
    private appointmentService: AppointmentService,
    private dialog?: MatDialog,
    private _snackBar?: MatSnackBar

  ) {
    this.toppings = fb.group({});

    if (this.checked) {
      this.address2 = this.address;
    }
  }

  ngOnInit(): void {
    this.patientId = this.appointmentService.patientId;

    if (this.appointmentService.patientId) {
      this.patientId = this.appointmentService.patientId;
    } else {
      this.patientId = this.activatedroute.snapshot.paramMap.get('id');
    }

    this.patientService.patientIdToAddAllergy = this.patientId;
    this.getAllAllergiesOfPatient(this.patientId);
    this.loadPatient(this.patientId);
    this.reactiveForm = this.formBuilder.group({
      allergyId: [' '],
      allergyName: [' '],
      allergyType: [''],
      allergyDesc: [''],
    });

    this.patientService.getAllergy().subscribe((allergy_idlist) => {
      console.log(allergy_idlist);
      this.allergy_idlist = allergy_idlist;
    });
    this.patientService.getAllergyName().subscribe((allergy_namelist) => {
      this.allergy_namelist = allergy_namelist;
    });
    this.patientService.getAllergyType().subscribe((allergy_typelist) => {
      this.allergy_typelist = allergy_typelist;
    });

    this.reactiveForm = this.formBuilder.group({
      allergy_fatal: [],
    });

    this.form = new FormGroup({
      id: new FormControl(null, null),
      title: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      birthDate: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      gender: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      race: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      ethnicity: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      langKnown: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contactNo: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      emgrFname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),

      emgrLname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      emgrRelation: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      emgrEmail: new FormControl(null, [Validators.required, Validators.email]),
      emgrContactNo: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
      ]),

      emgrAddress: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  addAllergyPopUp() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '350px';
    dialogConfig.position = {};

    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddAllergyDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
      this.getAllAllergiesOfPatient(this.patientId);
    });
  }

  getAllAllergiesOfPatient(patientId: string) {
    this.patientService
      .getAllAllergiesOfPatient(patientId)
      .subscribe((data) => {
        this.allergyList = data;
      });
  }

  fetchAllAllergyIds() {
    this.patientService.fetchAllAllergyIds().subscribe((ids) => {
      this.allergyIds = ids;
    });
  }

  loadPatient(id: string) {
    this.patientService.fetchPatient(id).subscribe(
      (data) => {
        console.log(data);
        this.patient = data;
        // this.emergencyContact=data
        //  alert(this.patient.emergencyContact.relationship)
      },
      (error) => console.log(error)
    );
  }

  ageCalculator() {
    const convertAge = new Date(this.age);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);

    console.log('age is : ' + this.showAge);
  }

  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  changeFunction() {
    console.log('checked');
  }

  private selectedLink: string = 'No';

  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      // if no radio button is selected, always return false so every nothing is shown
      return false;
    }

    return this.selectedLink === name; // if current radio button is selected, return true, else return false
  }

  isoptionSelected(name: string): boolean {
    if (!this.selected) {
      // if no radio button is selected, always return false so every nothing is shown
      return false;
    }

    return this.selected === name; // if current radio button is selected, return true, else return false
  }

  onSubmit() {
    // console.log('ng submit called');

    //Create Object
    const patientObject: User = new User();
    (patientObject.id = this.form.value.id),
      (patientObject.title = this.form.value.title),
      (patientObject.firstName = this.form.value.firstName),
      (patientObject.lastName = this.form.value.lastName),
      (patientObject.birthDate = this.form.value.birthDate),
      (patientObject.age = this.form.value.age),
      (patientObject.gender = this.form.value.gender),
      (patientObject.race = this.form.value.race),
      (patientObject.ethnicity = this.form.value.ethnicity),
      (patientObject.langKnown = this.form.value.langKnown),
      (patientObject.email = this.form.value.email),
      (patientObject.contactNo = this.form.value.contactNo),
      (patientObject.address = this.form.value.address),
      (patientObject.emgrTitle = this.form.value.emgrTitle);
    patientObject.emgrFname = this.form.value.emgrFname;
    patientObject.emgrLname = this.form.value.emgrLname;
    patientObject.emgrEmail = this.form.value.emgrEmail;
    patientObject.emgrContactNo = this.form.value.emgrContactNo;
    patientObject.emgrRelation = this.form.value.emgrRelation;
    patientObject.emgrAddress = this.form.value.emgrAddress;
    patientObject.emgrCity = this.form.value.emgrCity;
    patientObject.emgrPincode = this.form.value.emgrPincode;
    patientObject.emgrState = this.form.value.emgrState;
    patientObject.emgrCountry = this.form.value.emgrCountry;
    patientObject.allergies = this.listAllergies;

    console.log('All data : ' + patientObject);
    console.log(patientObject);

    const res = confirm('Are you sure?');
    if (res) {
      this.patientService.updatePatientDetails(patientObject);
      this._snackBar.open('Saved Successfully!!', '', { duration: 2000 });

    }
  }

  allergyFunction() {
    this.getAllAllergiesOfPatient(this.patientId);
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

  errorEmergencyContactFirstName() {
    if (this.form.controls.emgrFname.errors?.required) {
      return ErrorMessage.FIRSTNAME_REQUIRED;
    } else if (this.form.controls.emgrFname.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorEmergencyContactLastName() {
    if (this.form.controls.emgrLname.errors?.required) {
      return ErrorMessage.LASTNAME_REQUIRED;
    } else if (this.form.controls.emgrLname.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorEmergencyContactEmail() {
    if (this.form.controls.emgrEmail.errors?.required) {
      return ErrorMessage.EMAIL_REQUIRED;
    } else if (this.form.controls.emgrEmail.errors?.email) {
      return ErrorMessage.EMAIL_REQUIRED;
    } else {
      return '';
    }
  }

  errorEmergencyContactContactNo() {
    if (this.form.controls.emgrContactNo.errors?.required) {
      return ErrorMessage.TELEPHONE_NUMBER_REQIRED;
    } else if (this.form.controls.emgrContactNo.errors?.minlength) {
      return ErrorMessage.TELEPHONE_NUMBER_NOT_LESS_THAN_7;
    } else {
      return '';
    }
  }

  errorEmergencyContactAddress() {
    if (this.form.controls.emgrAddress.errors?.required) {
      return ErrorMessage.ADDRESS_REQUIRED;
    } else if (this.form.controls.emgrAddress.errors?.minlength) {
      return ErrorMessage.ADDRESS_REQUIRED;
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

  errorBirthDate() {
    if (this.form.controls.birthDate.errors?.required) {
      return ErrorMessage.VALID_DATE_REQUITED;
    } else if (this.form.controls.birthDate.errors?.futureDate) {
      return ErrorMessage.VALID_BIRTH_DATE_REQUIRED;
    } else {
      return '';
    }
  }

  errorGender() {
    if (this.form.controls.gender.errors?.required) {
      return ErrorMessage.GENDER_REQUIRED;
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

  errorRace() {
    if (this.form.controls.race.errors?.required) {
      return ErrorMessage.RACE_REQUIRED;
    } else if (this.form.controls.race.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorEthnicity() {
    if (this.form.controls.ethnicity.errors?.required) {
      return ErrorMessage.ETHNICITY_REQUIRED;
    } else if (this.form.controls.ethnicity.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorLanguages() {
    if (this.form.controls.langKnown.errors?.required) {
      return ErrorMessage.LANGUAGE_REQUIRED;
    } else if (this.form.controls.langKnown.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorContactNo() {
    if (this.form.controls.contactNo.errors?.required) {
      return ErrorMessage.TELEPHONE_NUMBER_REQIRED;
    } else if (this.form.controls.contactNo.errors?.minlength) {
      return ErrorMessage.TELEPHONE_NUMBER_NOT_LESS_THAN_7;
    } else {
      return '';
    }
  }

  errorAddress() {
    if (this.form.controls.address.errors?.required) {
      return ErrorMessage.ADDRESS_REQUIRED;
    } else if (this.form.controls.address.errors?.minlength) {
      return ErrorMessage.ADDRESS_REQUIRED;
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

  onChangeId(value: string) {
    value = 'aa';
    console.log('inside onchange : id =' + value);
    this.patientService.getAllergyById(value).subscribe((data) => {
      console.log(data);
    });
  }

  deleteAllergy(value: string) {
    this.patientService.deleteAllergy(value);
    this.getAllAllergiesOfPatient(this.patientId);
  }

  setOption(e: string): void {
    this.selected = e;
  }

  displayedColumns: string[] = ['1', '2', '3', '4', '5'];

  listAllergies: Allergy[] = [];

  addAllergy() {
    console.log('add allergies');

    let patientAllergy = {
      // allergyCode: this.reactiveForm.get('allergyCode').value,
      allergyName: this.reactiveForm.get('allergyName').value,
      allergyType: this.reactiveForm.get('allergyType').value,
      allergyFatal: this.reactiveForm.get('allergyFatal').value,
      allergyDesc: this.reactiveForm.get('allergyDesc').value,
    } as Allergy;

    this.listAllergies.push(patientAllergy);
    console.log('listallergies' + this.listAllergies);
  }
}
