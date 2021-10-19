import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastService } from 'src/app/toast/toast.service';
import { DiagnosisDialogComponent } from '../dialog/diagnosis-dialog/diagnosis-dialog.component';
import { DiagnosisService } from '../services/diagnosis.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css'],
})
export class DiagnosisComponent implements OnInit {
  @Input() appointmentId: number;
  isPopupOpened = true;
  diagnosisList: any = [];

  constructor(
    private dialog?: MatDialog,
    private service?: DiagnosisService,
    private to?: ToastService
  ) {}

  ngOnInit(): void {
    this.getDiagnosisList();

  }

  addDiagnosis() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '380px';
    dialogConfig.data = this.appointmentId;
    dialogConfig.position = {};

    //this.dialog.open(DiagnosisDailogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DiagnosisDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log('Dialog output:', data);
      this.getDiagnosisList();
    });
  }

  getDiagnosisList() {
    console.log('get diagnosis component');
    this.appointmentId=1;
    this.service.getByAppointmentId(this.appointmentId).subscribe((value) => {
      this.diagnosisList = value;
      console.log(this.diagnosisList);
    });
  }

  deleteDiagnosis(id: number) {
    console.log(id);
    this.service.deleteDiagnosis(id).subscribe((value) => {
      this.to.show(value, { classname: 'bg-success text-light', delay: 1000 });
      this.getDiagnosisList();
    });
  }
}
