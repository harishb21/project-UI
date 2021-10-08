import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { PatientManagementComponent } from './patient-managemt/patient-managemt.component';
import { AdminComponent } from './admin.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserGuard } from '../users/guard/user.guard';
import { Roles } from '../model/roles.enum';



const routes: Routes = [
      {
        path: '',
        component: AdminComponent,
        canActivate: [UserGuard],
        data: {
          role: [Roles.ADMIN],
        },
      },
      {
        path: 'patient-details',
        component: PatientManagementComponent,
        canActivate: [UserGuard],
        data: {
          role: [Roles.ADMIN],
        },
      },
      {
        path: 'employee-details',
        component: EmployeeManagementComponent,
        canActivate: [UserGuard],
        data: {
          role: [Roles.ADMIN],
        },
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}