import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { MasterRoutingModule } from './master.routing';
import { AddProcedureComponent } from './procedure/add-procedure/add-procedure.component';
import { ViewAllProceduresComponent } from './procedure/view-all-procedures/view-all-procedures.component';
import { MasterHeaderComponent } from './master-header/master-header.component';
import { AddDrugsComponent } from './drugs/add-drugs/add-drugs.component';
import { ViewAllDrugsComponent } from './drugs/view-all-drugs/view-all-drugs.component';
import { ViewAllDiagnosisComponent } from './diagnosis/view-all-diagnosis/view-all-diagnosis.component';
import { AddDiagnosisComponent } from './diagnosis/add-diagnosis/add-diagnosis.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MasterComponent,
    AddProcedureComponent,
    ViewAllProceduresComponent,
    MasterHeaderComponent,
    AddDrugsComponent,
    ViewAllDrugsComponent,
    ViewAllDiagnosisComponent,
    AddDiagnosisComponent  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
