import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DiagnosisDialogComponent } from '../dialog/diagnosis-dialog/diagnosis-dialog.component';
import { Diagnosis } from '../model/diagnosis';
import { AppointmentService } from '../services/appointment.service';
import { DiagnosisService } from '../services/diagnosis.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css'],
})
export class DiagnosisComponent implements OnInit {
  appointmentId: string;
  isPopupOpened = true;
  diagnosisList: Diagnosis[] = [];

  constructor(
    private dialog?: MatDialog,
    private service?: DiagnosisService,
    private appointmentService?: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentId = this.appointmentService.appointmentId;
    this.getDiagnosisList();
  }

  addDiagnosis() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '250px';
    dialogConfig.data = this.appointmentId;
    dialogConfig.position = {};

    //this.dialog.open(DiagnosisDailogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DiagnosisDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      this.isPopupOpened = false;
      this.getDiagnosisList();
    });
  }

  getDiagnosisList() {
    this.service.getByAppointmentId(this.appointmentId).subscribe((value) => {
      this.diagnosisList = value;
    });
  }

  deleteDiagnosis(id: number) {
    this.service.deleteDiagnosis(id).subscribe(() => {
      this.getDiagnosisList();
    });
  }
}
