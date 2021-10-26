import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProcedureDialogComponent } from '../dialog/procedure-dialog/procedure-dialog.component';
import { Procedure } from '../model/procedure';
import { AppointmentService } from '../services/appointment.service';
import { PatientProceduresService } from '../services/patient-procedures.service';
@Component({
  selector: 'app-patient-procedures',
  templateUrl: './patient-procedures.component.html',
  styleUrls: ['./patient-procedures.component.css'],
})
export class PatientProceduresComponent implements OnInit {
  appointmentId: string;
  isPopupOpened = true;
  procedureList: Procedure[] = [];

  constructor(
    private dailog?: MatDialog,
    private service?: PatientProceduresService,
    private appointmentService?: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentId = this.appointmentService.appointmentId;

    this.getProcedureList();
  }

  addProcedure() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '250px';
    dialogConfig.data = this.appointmentId;
    dialogConfig.position = {};

    this.isPopupOpened = true;
    const dialogRef = this.dailog
      .open(ProcedureDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe((value) => {
        this.isPopupOpened = false;
        this.getProcedureList();
      });
  }

  getProcedureList() {
    return this.service
      .getByAppointmentId(this.appointmentId)
      .subscribe((value) => (this.procedureList = value));
  }

  deleteProcedure(id: number) {
    this.service.deleteProcedure(id).subscribe((value) => {
      this.getProcedureList();
    });
  }
}
