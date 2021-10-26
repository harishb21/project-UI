import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Allergy } from 'src/app/model/allergy.model';
import { User } from 'src/app/model/user.model';
import { PatientService } from 'src/app/patient/patient.service';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-allergy-dialog',
  templateUrl: './allergy-dialog.component.html',
  styleUrls: ['./allergy-dialog.component.css'],
})
export class AllergyDialogComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private appointmentService: AppointmentService,
    private dialogRef: MatDialogRef<AllergyDialogComponent>
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
        this.allergies = this.patient.allergies;
      },
      (error) => console.log(error)
    );
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
