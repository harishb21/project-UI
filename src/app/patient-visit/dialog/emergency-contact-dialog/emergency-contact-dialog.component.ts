import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { PatientService } from 'src/app/patient/patient.service';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-emergency-contact-dialog',
  templateUrl: './emergency-contact-dialog.component.html',
  styleUrls: ['./emergency-contact-dialog.component.css'],
})
export class EmergencyContactDialogComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private appointmentService: AppointmentService,

    private dialogRef: MatDialogRef<EmergencyContactDialogComponent>
  ) {}

  patient: User = new User();

  ngOnInit(): void {
    this.loadPatient(this.appointmentService.patientId);
  }

  loadPatient(id: string) {
    this.patientService.fetchPatient(id).subscribe(
      (data) => {
        this.patient = data;
      },
      (error) => console.log(error)
    );
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
