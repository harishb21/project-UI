import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmergencyContact } from '../model/EmergencyContact';
import { ErrorMessage } from '../model/error.enum';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientDemographicsComponent implements OnInit {
  address = 'ketannnnnnnnnn';
  address2 = '';
  form: FormGroup = new FormGroup({});
  selected: any = null;
  toppings: FormGroup;
  checked: boolean = false;
  allergy: boolean = true;
  isDisabled: boolean = false;
  age: number;
  showAge: number;
  formSubmitAttempt: boolean = false;

  patient: Patient = new Patient();
  emergencyContact: EmergencyContact = new EmergencyContact();
  allergyIds: string[];
  patientId: any;
  constructor(
    fb: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {
    this.toppings = fb.group({});

    if (this.checked) {
      this.address2 = this.address;
    }
  }

  ngOnInit(): void {
    this.patientId = this.activatedroute.snapshot.paramMap.get('id');

    this.loadPatient(this.patientId);
    this.fetchAllAllergyIds();

    this.form = new FormGroup({
      patientId: new FormControl(null, null),
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
      languages: new FormControl(null, [
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
      emergencyContactFirstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),

      emergencyContactLastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      emergencyContactRelationship: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      emergencyContactEmail: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      emergencyContactContact: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
      ]),

      emergencyContactAddress: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  fetchAllAllergyIds() {
    this.patientService.fetchAllAllergyIds().subscribe((ids) => {
      console.log('allergy ids : ' + ids);

      this.allergyIds = ids;
    });
  }

  loadPatient(id: number) {
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
    console.log(' ageCalculator method called');

    const convertAge = new Date(this.age);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    console.log('age is ' + this.showAge);

  }

  changeFunction() {
    console.log('checked');
  }

  onSubmit() {
    // console.log('ng submit called');

    //Create Object
    const patientObject: Patient = {
      patientId: this.form.value.patientId,
      title: this.form.value.title,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      birthDate: this.form.value.birthDate,
      age: this.form.value.age,
      gender: this.form.value.gender,
      race: this.form.value.race,
      ethnicity: this.form.value.ethnicity,
      languages: this.form.value.languages,
      email: this.form.value.email,
      contactNo: this.form.value.contactNo,
      address: this.form.value.address,
      emergencyContact: this.emergencyContactDetails(),
    };

    // console.log('All data : ' + patientObject);

    const res = confirm('Are you sure?');
    if (res) {
      this.patientService.updatePatientDetails(patientObject);
      this.router.navigate(['/patient/landingPage']);
    }
  }

  emergencyContactDetails(): EmergencyContact {
    const emergencyContactObject: EmergencyContact = {
      firstName: this.form.value.emergencyContactFirstName,
      lastName: this.form.value.emergencyContactLastName,
      relationship: this.form.value.emergencyContactRelationship,
      email: this.form.value.emergencyContactEmail,
      contact: this.form.value.emergencyContactContact,
      address: this.form.value.emergencyContactAddress,
    };

    // alert(emergencyContactObject);

    return emergencyContactObject;
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
    if (this.form.controls.emergencyContactFirstName.errors?.required) {
      return ErrorMessage.FIRSTNAME_REQUIRED;
    } else if (this.form.controls.emergencyContactFirstName.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorEmergencyContactLastName() {
    if (this.form.controls.emergencyContactLastName.errors?.required) {
      return ErrorMessage.LASTNAME_REQUIRED;
    } else if (this.form.controls.emergencyContactLastName.errors?.minlength) {
      return ErrorMessage.ABBREVIATION_NOT_REQUIRED;
    } else {
      return '';
    }
  }

  errorEmergencyContactEmail() {
    if (this.form.controls.emergencyContactEmail.errors?.required) {
      return ErrorMessage.EMAIL_REQUIRED;
    } else if (this.form.controls.emergencyContactEmail.errors?.email) {
      return ErrorMessage.EMAIL_REQUIRED;
    } else {
      return '';
    }
  }

  errorEmergencyContactContactNo() {
    if (this.form.controls.emergencyContactContact.errors?.required) {
      return ErrorMessage.TELEPHONE_NUMBER_REQIRED;
    } else if (this.form.controls.emergencyContactContact.errors?.minlength) {
      return ErrorMessage.TELEPHONE_NUMBER_NOT_LESS_THAN_7;
    } else {
      return '';
    }
  }

  errorEmergencyContactAddress() {
    if (this.form.controls.emergencyContactAddress.errors?.required) {
      return ErrorMessage.ADDRESS_REQUIRED;
    } else if (this.form.controls.emergencyContactAddress.errors?.minlength) {
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
    if (this.form.controls.languages.errors?.required) {
      return ErrorMessage.LANGUAGE_REQUIRED;
    } else if (this.form.controls.languages.errors?.minlength) {
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
}
