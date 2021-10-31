import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Allergy } from 'src/app/model/allergy.model';
import { User } from 'src/app/model/user.model';
import { AllergyDialogComponent } from '../dialog/allergy-dialog/allergy-dialog.component';
import { EmergencyContactDialogComponent } from '../dialog/emergency-contact-dialog/emergency-contact-dialog.component';
import { PatientDetailDialogComponent } from '../dialog/patient-detail-dialog/patient-detail-dialog.component';
import { AppointmentService } from '../services/appointment.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private appointmentService: AppointmentService
  ) {}

  patient: User = new User();
  allergies: Allergy[];

  ngOnInit(): void {    
    this.loadPatient(this.appointmentService.patientId);
  }

  loadPatient(id: string) {
    this.patientService.fetchPatient(id).subscribe(
      (data) => {
        this.patient = data;
        // this.allergies = this.patient.allergies;
      },
      (error) => console.log(error)
    );

    this.patientService
    .getAllAllergiesOfPatient(id)
    .subscribe((data) => {
      this.allergies = data;
    });


  }




  // openDialogPatientDetail() {
  //   const dialogRef = this.dialog.open(PatientDetailDialogComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // openDialogEmergencyContact() {
  //   const dialogRef = this.dialog.open(EmergencyContactDialogComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // openDialogAllergy() {
  //   const dialogRef = this.dialog.open(AllergyDialogComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
