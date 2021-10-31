import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Roles } from '../model/roles.enum';
import { UserGuard } from '../users/guard/user.guard';
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
    canActivate: [UserGuard],
    data: {
      role: [Roles.ADMIN],
    },
  },
  {
    path: 'add-procedure',
    component: AddProcedureComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.ADMIN],
    },
  },
  {
    path: 'all-drugs',
    component: ViewAllDrugsComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.ADMIN],
    },
  },
  {
    path: 'add-drugs',
    component: AddDiagnosisComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.ADMIN],
    },
  },
  {
    path: 'all-diagnosis',
    component: ViewAllDiagnosisComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.ADMIN],
    },
  },
  {
    path: 'add-diagnosis',
    component: AddDiagnosisComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.ADMIN],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
