import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { UserGuard } from './guard/user.guard';
import { Roles } from './model/roles.enum';
import { PatientRegComponent } from './patient-reg/patient-reg.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'employee',
    component: EmployeeRegComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.ADMIN],
    },
  },
  {
    path: 'patient',
    component: PatientRegComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.PHYSICIAN, Roles.NURSE, Roles.ADMIN],
    },
  },
  {
    path: 'update',
    component: ChangePasswordComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.PATIENT, Roles.PHYSICIAN, Roles.NURSE, Roles.ADMIN],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
