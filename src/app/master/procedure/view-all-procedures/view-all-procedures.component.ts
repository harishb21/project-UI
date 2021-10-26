import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProcedureMaster } from '../../model/ProcedureMaster';
import { ProcedureMasterService } from '../../services/procedure-master.service';
import { AddProcedureComponent } from '../add-procedure/add-procedure.component';

@Component({
  selector: 'app-view-all-procedures',
  templateUrl: './view-all-procedures.component.html',
  styleUrls: ['./view-all-procedures.component.css'],
})
export class ViewAllProceduresComponent implements OnInit {
  constructor(
    private procedureMasterService: ProcedureMasterService,
    private dialog?: MatDialog
  ) {}

  procedue: ProcedureMaster[];
  depricatedValue: any = '';
  isPopupOpened = true;

  procedureList: ProcedureMaster[];

  ngOnInit(): void {
    this.loadProcedure();
  }

  loadProcedure() {
    this.procedureMasterService.getProcedures().subscribe((data) => {
      this.procedureList = data;
      console.log(this.procedureList);
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
    const dialogRef = this.dialog.open(AddProcedureComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
      this.loadProcedure();    });
  }

  procedureDepricate(value: ProcedureMaster) {
    if (value.isDepricated == 'yes') {
      value.isDepricated = 'no';
    } else {
      value.isDepricated = 'yes';
    }

    this.procedureMasterService.saveProcedures(value);
    this.loadProcedure();  }

 
}
