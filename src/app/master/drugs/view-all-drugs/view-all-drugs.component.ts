import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DrugMaster } from '../../model/DrugMaster';
import { DrugMasterService } from '../../services/drug-master.service';
import { AddDrugsComponent } from '../add-drugs/add-drugs.component';

@Component({
  selector: 'app-view-all-drugs',
  templateUrl: './view-all-drugs.component.html',
  styleUrls: ['./view-all-drugs.component.css'],
})
export class ViewAllDrugsComponent implements OnInit {
  depricatedValue: any = '';
  isPopupOpened = true;

  drugList: DrugMaster[];

  constructor(
    private drugMasterService: DrugMasterService,
    private dialog?: MatDialog
  ) {}

  ngOnInit() {
    this.loadDrugs();
  }

  loadDrugs() {
    this.drugMasterService.getDrugs().subscribe((data) => {
      this.drugList = data;
    });
  }

  addDiagnosisPopUp() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '350px';
    dialogConfig.height = '450px';
    dialogConfig.position = {};

    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddDrugsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
      this.loadDrugs();
    });

  }

//  drugDepricate(value: DrugMaster) {
//     if (value.isDepricated == 'yes') {
//       value.isDepricated = 'no';
//     } else {
//       value.isDepricated = 'yes';
//     }

//     this.drugMasterService.saveDiagnosis(value);
//     location.reload();
//   }
// }

}