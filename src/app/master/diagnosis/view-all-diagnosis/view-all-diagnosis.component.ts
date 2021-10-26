import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DiagnosisMaster } from '../../model/DiagnosisMaster';
import { DiagnosisMasterService } from '../../services/diagnosis-master.service';
import { AddDiagnosisComponent } from '../add-diagnosis/add-diagnosis.component';

@Component({
  selector: 'app-view-all-diagnosis',
  templateUrl: './view-all-diagnosis.component.html',
  styleUrls: ['./view-all-diagnosis.component.css'],
})
export class ViewAllDiagnosisComponent implements OnInit {
  diagnosis: DiagnosisMaster[];
  depricatedValue: any = '';
  isPopupOpened = true;

  diagnosisList: DiagnosisMaster[];

  constructor(
    private diagnosisMasterService: DiagnosisMasterService,
    private dialog?: MatDialog
  ) {}

  ngOnInit() {
    this.loadDiagnosis();
  }

  loadDiagnosis() {
    this.diagnosisMasterService.getDiagnosis().subscribe((data) => {
      this.diagnosisList = data;
    });
  }

  addDiagnosisPopUp() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '350px';
    dialogConfig.height = '250px';
    dialogConfig.position = {};

    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddDiagnosisComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
      this.loadDiagnosis();
    });
  }

  diagnosisDepricate(value: DiagnosisMaster) {
    if (value.isDepricated == 'yes') {
      value.isDepricated = 'no';
    } else {
      value.isDepricated = 'yes';
    }

    this.diagnosisMasterService.saveDiagnosis(value);
    this.loadDiagnosis();
  }
}
