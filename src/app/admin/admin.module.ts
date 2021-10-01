import { HttpClientModule } from '@angular/common/http';
import { UserGuard } from './../users/guard/user.guard';
import { AuthGuard } from './../users/guard/auth.guard';
import { AuthService } from '../services/auth.service';
import { AdminserviceService } from './admin.service';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { PatientManagementComponent } from './patient-managemt/patient-managemt.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkColumnDef } from '@angular/cdk/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AngularMaterialModule } from '../angular-material.module';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [PatientManagementComponent, EmployeeManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    NgxPaginationModule,
    OrderModule,
    AdminRoutingModule,
    MatSnackBarModule,
    ChartModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [
    CdkColumnDef,
    AdminserviceService,
    AuthService,
    AuthGuard,
    UserGuard,
    ToastrModule,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 500 } },
  ],
  bootstrap: [],
})
export class AdminModule {}
