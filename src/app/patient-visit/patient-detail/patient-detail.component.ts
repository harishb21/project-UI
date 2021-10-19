import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { AllergyDialogComponent } from '../dialog/allergy-dialog/allergy-dialog.component';
import { EmergencyContactDialogComponent } from '../dialog/emergency-contact-dialog/emergency-contact-dialog.component';
import { PatientDetailDialogComponent } from '../dialog/patient-detail-dialog/patient-detail-dialog.component';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialogPatientDetail() {
    const dialogRef = this.dialog.open(PatientDetailDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEmergencyContact() {
    const dialogRef = this.dialog.open(EmergencyContactDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAllergy() {
    const dialogRef = this.dialog.open(AllergyDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
