import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EmployeeRegComponent } from './components/employee-reg/employee-reg.component';
import { UserGuard } from './guard/user.guard';
import { PatientRegComponent } from './components/patient-reg/patient-reg.component';
import { Roles } from '../model/roles.enum';

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
