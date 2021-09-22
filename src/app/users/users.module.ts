import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { PatientRegComponent } from './patient-reg/patient-reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { MatSelectModule } from '@angular/material/select';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserGuard } from './guard/user.guard';
import { Roles } from './model/roles.enum';
import { AuthGuard } from './guard/auth.guard';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserRoutingModule } from './user-routing.module';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AuthComponent,
    EmployeeRegComponent,
    PatientRegComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatRadioModule,
    MatDatepickerModule,
    UserRoutingModule,
    MatSnackBarModule,
  ],
  exports: [],
  providers: [
    AuthService,
    UserService,
    UserGuard,
    AuthGuard,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 500 } },
  ],
})
export class UsersModule {}
