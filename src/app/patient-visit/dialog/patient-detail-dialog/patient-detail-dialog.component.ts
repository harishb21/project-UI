import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { PatientService } from 'src/app/patient-visit/services/patient.service';
import { AppointmentService } from '../../services/appointment.service';
import { DiagnosisDialogComponent } from '../diagnosis-dialog/diagnosis-dialog.component';

@Component({
  selector: 'app-patient-detail-dialog',
  templateUrl: './patient-detail-dialog.component.html',
  styleUrls: ['./patient-detail-dialog.component.css'],
})
export class PatientDetailDialogComponent implements OnInit {
  constructor(private patientService: PatientService,
    private appointmentService: AppointmentService,
    private dialogRef: MatDialogRef<DiagnosisDialogComponent>) {}

  patient: User = new User();

  ngOnInit(): void {

console.log("########################### : "+this.appointmentService.patientId);


    this.loadPatient(this.appointmentService.patientId);
  }

  loadPatient(id: string) {
    this.patientService.fetchPatient(id).subscribe(
      (data) => {
        console.log(data);
        
        this.patient = data;
      },
      (error) => console.log(error)
    );
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
