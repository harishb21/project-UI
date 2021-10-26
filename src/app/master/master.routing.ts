import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiagnosisComponent } from './diagnosis/add-diagnosis/add-diagnosis.component';
import { ViewAllDiagnosisComponent } from './diagnosis/view-all-diagnosis/view-all-diagnosis.component';
import { ViewAllDrugsComponent } from './drugs/view-all-drugs/view-all-drugs.component';
import { MasterComponent } from './master/master.component';
import { AddProcedureComponent } from './procedure/add-procedure/add-procedure.component';
import { ViewAllProceduresComponent } from './procedure/view-all-procedures/view-all-procedures.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
  },
  {
    path: 'all-procedures',
    component: ViewAllProceduresComponent,
  },
  {
    path: 'add-procedure',
    component: AddProcedureComponent,
  },
  {
    path: 'all-drugs',
    component: ViewAllDrugsComponent,
  },
  {
    path: 'add-drugs',
    component: AddDiagnosisComponent,
  },
  {
    path: 'all-diagnosis',
    component: ViewAllDiagnosisComponent,
  },
  {
    path: 'add-diagnosis',
    component: AddDiagnosisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
